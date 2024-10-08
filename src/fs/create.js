import fs from "fs";
import path from "path";

const create = async () => {
  // Write your code here
  const outputFile = path.join(
    process.cwd(),
    "src",
    "fs",
    "files",
    "fresh.txt"
  );

  if (!fs.existsSync(outputFile)) {
    fs.writeFileSync(outputFile, "I am fresh and young");
  } else {
    throw new Error("FS operation failed");
  }
};

await create();
