import fs from "fs";
import zlib from "zlib";
import path from "path";

const decompress = async () => {
  // Write your code here
  const inputFilePath = path.join(
    process.cwd(),
    "src",
    "zip",
    "files",
    "archive.gz"
  );
  const outputFilePath = path.join(
    process.cwd(),
    "src",
    "zip",
    "files",
    "fileToCompress.txt"
  );

  const input = fs.createReadStream(inputFilePath);
  const output = fs.createWriteStream(outputFilePath);
  const gunzip = zlib.createGunzip();
  input
    .pipe(gunzip)
    .pipe(output)
    .on("finish", () => {
      console.log(`File successfully unzip back to ${outputFilePath}`);
    })
    .on("error", (error) => {
      console.error("Error :", error);
    });
};

await decompress();
