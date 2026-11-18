export function chunkDocument(text) {
  const chunks = text
    .trim()
    .split("\n\n")
    .map((chunk) => chunk.trim())
    .filter((chunk) => chunk.length > 0);
  return chunks;
}
