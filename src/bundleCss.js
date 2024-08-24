import fs from "fs";
import path from "path";
import { bundle } from "lightningcss";

const inputPath = process.argv[2];
const outputPath = process.argv[3];
const outputDir = path.dirname(outputPath);
const minify = process.argv[4] === "true";

console.log(inputPath);
let { code, map } = bundle({
  filename: inputPath,
  minify: minify,
});

fs.mkdir(outputDir, { recursive: true }, (err) => {
  if (err) {
    console.error("Failed to create the directory:", err);
  } else {
    fs.writeFile(outputPath, code, (err) => {
      if (err) {
        console.error("Error writing file after creating directory:", err);
      } else {
        console.log("File successfully written!");
      }
    });
  }
});
