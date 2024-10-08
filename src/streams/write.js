import path from "path";
import { createWriteStream } from "fs";

const write = async () => {
  // Write your code here
  const filePath = path.join(
    process.cwd(),
    "src",
    "streams",
    "files",
    "fileToWrite.txt"
  );

  const writeStream = createWriteStream(filePath);
  process.stdin.pipe(writeStream);

  writeStream.on("error", (error) => {
    console.error(`Error writing to the file: ${error.message}`);
  });

  writeStream.on("finish", () => {
    console.log("Write complete.");
  });
};

await write();
