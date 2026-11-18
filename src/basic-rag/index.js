import { loadDocument } from "./loadDocument.js";
import { chunkDocument } from "./chunkDocument.js";
import { createEmbeddings } from "./createEmbeddings.js";
import { storeEmbeddings } from "./storeEmbeddings.js";

await indexDocuments("./src/docs/dario.txt");
await indexDocuments("./src/docs/sam.txt");
await indexDocuments("./src/docs/musk.txt");

async function indexDocuments(filePath) {
  const data = await loadDocument(filePath);

  const chunks = chunkDocument(data);

  const embeddings = await createEmbeddings(chunks);

  await storeEmbeddings(filePath, chunks, embeddings);
}
