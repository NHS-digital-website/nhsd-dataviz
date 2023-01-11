import glob from 'fast-glob';
import { readFile } from 'fs/promises';
import path from 'path';

export default () => ({
  name: 'svg-importer',
  resolveId: (id, importer) => {
    if (!id.match(/\.svg$/)) return null;
    return path.resolve(importer, '..', id).replace(/\\/g, '/');
  },
  load: async (id) => {
    if (!id.match(/\.svg$/)) return null;
    const icons = {};
    for (const svgPath of await glob(id, { absolute: true })) {
        const fname = svgPath.split("/").slice(-1)[0].replace(/\.svg$/, "");
        icons[fname] = (await readFile(svgPath)).toString();
    }
    return `export default ${JSON.stringify(icons)}`;
  }
});
