import { QdrantClient } from "@qdrant/js-client-rest";
import "dotenv/config";

import { VECTOR_DIMENSION } from "./config";

import { randomUUID } from "node:crypto";

const qdrant = new QdrantClient({
  url: process.env.QDRANT_HOST,
  apiKey: process.env.QDRANT_API_KEY,
});

const { exists } = await qdrant.collectionExists("people");

if (!exists) {
  await qdrant.createCollection("people", {
    vectors: { size: VECTOR_DIMENSION, distance: "Cosine" },
  });
}

export async function storeEmbeddings(filePath, chunks, embeddings) {
  const points = chunks.map((chunk, index) => ({
    id: randomUUID(),
    vector: embeddings[index],
    payload: { text: chunk, filePath: filePath, paragraphIndex: index + 1 },
  }));

  console.log(`Storing ${points.length} embeddings in Qdrant...`);

  await qdrant.upsert("people", { points });
}
