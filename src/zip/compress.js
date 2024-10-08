import fs from "fs";
import zlib from "zlib";
import path from "path";

const compress = async () => {
  // Write your code here
  const inputFilePath = path.join(
    process.cwd(),
    "src",
    "zip",
    "files",
    "fileToCompress.txt"
  );
  const outputFilePath = path.join(
    process.cwd(),
    "src",
    "zip",
    "files",
    "archive.gz"
  );

  const input = fs.createReadStream(inputFilePath);
  const output = fs.createWriteStream(outputFilePath);
  const gzip = zlib.createGzip();
  input
    .pipe(gzip)
    .pipe(output)
    .on("finish", () => {
      console.log(`File successfully zipped to  ${outputFilePath}`);
    })
    .on("error", (error) => {
      console.error("Error :", error);
    });
};

await compress();
