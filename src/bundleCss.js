import { bundle } from "lightningcss";

const args = process.argv.slice(2);
const filename = args[0];
const minify = args[1] === 'true';

let { code, map } = bundle({
  filename: filename,
  minify: minify,
});

