import fs from "fs";
import path from "path";

const copy = async () => {
  // Write your code here
  const srcDir = path.join(
    process.cwd(),
    "src",
    "fs",
    "files"
  );
  const destDir = path.join(process.cwd(), path.sep, "files_copy");

  // Source directory must exist
  if (!fs.existsSync(srcDir)) {
    throw new Error(`Source directory ${srcDir} does not exist`);
  }

  // Destination directory must not be exist
  if (fs.existsSync(destDir)) {
    throw new Error(`Destination directory ${destDir} already exist`);
  }

  fs.mkdirSync(destDir);

  fs.readdirSync(srcDir).forEach((file) => {
    const srcFile = path.join(srcDir, file);
    const destFile = path.join(destDir, file);
    // Copy file, assume there is no nested folder
    fs.copyFileSync(srcFile, destFile);
  });
  console.log("File copy completed.");
};

await copy();
