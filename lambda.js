const exporter = require('./exporter/exporter');

async function handler(event) {
    let requestBody = JSON.parse(event.body);

    try {
        const viz = await exporter(requestBody);

        return {
            statusCode: 200,
            headers: {"content-type": viz.contentType},
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
