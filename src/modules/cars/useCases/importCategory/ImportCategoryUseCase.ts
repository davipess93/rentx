import { parse as csvParse } from "csv-parse";
import fs from "fs";

class ImportCategoryUseCase {
  execute(file: Express.Multer.File): void {
    const stram = fs.createReadStream(file.path);

    const parseFile = csvParse();

    stram.pipe(parseFile);

    parseFile.on("data", async (line) => {
      console.log(line);
    });
  }
}

export { ImportCategoryUseCase };
