import { QdrantClient } from "@qdrant/js-client-rest";
import "dotenv/config";

const qdrant = new QdrantClient({
  url: process.env.QDRANT_HOST,
  apiKey: process.env.QDRANT_API_KEY,
});

const { exists } = await qdrant.collectionExists("people");

if (!exists) {
  await qdrant.createCollection("people", {
    vectors: { size: 1536, distance: "Cosine" },
  });
}

export async function storeEmbeddings(filePath, chunks, embeddings) {
  const points = chunks.map((chunk, index) => ({
    id: index + 1,
    vector: embeddings[index],
    payload: { text: chunk, filePath: filePath, paragraphIndex: index + 1 },
  }));

  console.log(`Storing ${points.length} embeddings in Qdrant...`);

  await qdrant.upsert("people", { points });
}
