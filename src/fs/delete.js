import fs from "fs";
import path from "path";

const remove = async () => {
  // Write your code here
  const deleteFilename = path.join(
    process.cwd(),
    "src",
    "fs",
    "files",
    "fileToRemove.txt"
  );
  if (!fs.existsSync(deleteFilename)) {
    throw new Error("FS operation failed");
  }
  fs.unlinkSync(deleteFilename);
};

await remove();
