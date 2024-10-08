import fs from "fs";
import path from "path";

const list = async () => {
  // Write your code here
  const directory = path.join(
    process.cwd(),
    "src",
    "fs",
    "files"
  );

  // Source directory must exist
  if (!fs.existsSync(directory)) {
    throw new Error(`Source directory ${directory} does not exist`);
  }

  const files = fs.readdirSync(directory);

  files.forEach((file) => {
    console.log(file);
  });
};

await list();
