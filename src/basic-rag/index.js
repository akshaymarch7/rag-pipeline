import { loadDocument } from "./loadDocument.js";
import { chunkDocument } from "./chunkDocument.js";
import { createEmbeddings } from "./createEmbeddings.js";
import { storeEmbeddings } from "./storeEmbeddings.js";

const filePath = "./src/docs/sam.txt";

const data = await loadDocument(filePath);

const chunks = chunkDocument(data);

const embeddings = await createEmbeddings(chunks);

await storeEmbeddings(filePath, chunks, embeddings);
