const crypto = require('crypto');
const SSM = require('aws-sdk/clients/ssm');
const exporter = require('./exporter/exporter');

const keyPath = '/dataviz/exporter/key';

let key;
function getHmacKey() {
    if (key) return Promise.resolve(key);
    return new Promise((res, rej) => {
        const ssm = new SSM({apiVersion: '2014-11-06'});
        const params = {
            Name: keyPath,
            WithDecryption: true
        };
        ssm.getParameter(params, function(err, data) {
            if (err || !data.Parameter) {
                console.error(err);
                return rej(null);
            }
            key = data.Parameter.Value;
            res(key);
        });
    });
}

async function isValidHash(data, hash) {
    try {
        const key = await getHmacKey();
        const hmac = crypto.createHmac('sha256', key);
        const optionsHash = hmac.update(data).digest("base64");
        return optionsHash == hash;
    } catch(e) {
        console.error(e);
        return false;
    }
}

async function handler(event) {
    if (!event.pathParameters || !event.pathParameters.options || !event.pathParameters.hash || !event.pathParameters.library) {
        return {
            statusCode: 500,
            body: JSON.stringify({
                error: 'Missing chart options'
            }),
        };
    }

    let { options, hash, library } = event.pathParameters;
    options = decodeURIComponent(options);
    hash = decodeURIComponent(hash);

    const keyResult = await isValidHash(options, hash);

    if (!keyResult) {
        return {
            statusCode: 500,
            body: JSON.stringify({
                error: 'Invalid key'
            }),
        };
    }

    try {
        chartOptionString = Buffer.from(options, 'base64').toString();
        const chartOptions = JSON.parse(chartOptionString);
        const viz = await exporter(chartOptions, library);

        return {
            statusCode: 200,
            headers: {
                "content-type": viz.contentType,
                "cache-control": `max-age=${2592000}`, // 30 days
            },
            isBase64Encoded: true,
            body: Buffer.from(viz.buffer, 'binary').toString('base64')
        };
    } catch(e) {
        return {
            statusCode: 500,
            body: JSON.stringify({
                error: e.message
            }),
        };
    }
}

module.exports.handler = handler;
