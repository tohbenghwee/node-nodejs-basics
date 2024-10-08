import { createReadStream } from "fs";
import fs from "fs";
import { createHash } from "crypto";
import path from "path";

const calculateHash = async () => {
  // Write your code here
  const filePath = path.join(
    process.cwd(),
    "src",
    "hash",
    "files",
    "fileToCalculateHashFor.txt"
  );
  if (!fs.existsSync(filePath)) {
    throw new Error("FS operation failed");
  }
  const stream = createReadStream(filePath);
  const hash = createHash('sha256');
  stream.on("data", (chunk) => {
    hash.update(chunk);
  });

  stream.on("end", () => {
    const hashHex = hash.digest("hex");
    console.log(`SHA256 hash of the file is: ${hashHex}`);
  });

  stream.on("error", (error) => {
    console.error(`Error : ${error.message}`);
  });
};

await calculateHash();
