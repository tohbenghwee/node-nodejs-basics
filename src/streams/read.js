import fs from "fs";
import path from "path";
import { createReadStream } from "fs";

const read = async () => {
    // Write your code here 
    const filePath = path.join(
        process.cwd(),
        "src",
        "streams",
        "files",
        "fileToRead.txt"
      );
      if (!fs.existsSync(filePath)) {
        throw new Error("FS operation failed");
      }
      const readStream = createReadStream(filePath, 'utf-8');
      readStream.pipe(process.stdout);
      readStream.on('error', (error) => {
        console.error(`Error occurs: ${error.message}`);
      });

};

await read();