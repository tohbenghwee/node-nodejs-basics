import fs from "fs";
import path from "path";

const rename = async () => {
  // Write your code here
  const originalFilename = path.join(
    process.cwd(),
    "src",
    "fs",
    "files",
    "wrongFilename.txt"
  );
  const targetFilename = path.join(
    process.cwd(),
    "src",
    "fs",
    "files",
    "properFilename.md"
  );

  if (!fs.existsSync(originalFilename)) {
    throw new Error("FS operation failed");
  }

  if (fs.existsSync(targetFilename)) {
    throw new Error("FS operation failed");
  }

  fs.renameSync(originalFilename, targetFilename);
};

await rename();
