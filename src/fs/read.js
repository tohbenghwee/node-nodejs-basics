import fs from "fs";
import path from "path";

const read = async () => {
  // Write your code here
  const fileToRead = path.join(
    process.cwd(),
    "src",
    "fs",
    "files",
    "fileToRead.txt"
  );

  if (!fs.existsSync(fileToRead)) {
    throw new Error("FS operation failed");
  }

  const content = fs.readFileSync(fileToRead, "utf-8");
  console.log(content);
};

await read();
