import { readFile } from "node:fs/promises";

export async function loadDocument(filePath) {
  return await readFile(filePath, "utf8");
}
