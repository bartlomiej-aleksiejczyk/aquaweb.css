import fs from "fs/promises";
import path from "path";
import { bundle } from "lightningcss";

async function createDirectory(directory) {
  try {
    await fs.mkdir(directory, { recursive: true });
    console.log(`Directory ${directory} created or already exists.`);
  } catch (err) {
    console.error(`Failed to create the directory: ${directory}`, err);
    throw err;
  }
}

async function writeFile(filePath, content) {
  try {
    await fs.writeFile(filePath, content);
    console.log(`File ${filePath} successfully written!`);
  } catch (err) {
    console.error(`Error writing file: ${filePath}`, err);
    throw err;
  }
}

async function bundleAndSave(inputPath, outputPath, minify) {
  console.log(`Processing: ${inputPath}`);
  const outputDir = path.dirname(outputPath);

  try {
    let { code } = bundle({
      filename: inputPath,
      minify: minify,
    });

    await createDirectory(outputDir);

    await writeFile(outputPath, code);
  } catch (err) {
    console.error("Failed to process CSS bundle:", err);
  }
}

const inputPath = process.argv[2];
const outputPath = process.argv[3];
const minify = process.argv[4] === "true";

bundleAndSave(inputPath, outputPath, minify);
