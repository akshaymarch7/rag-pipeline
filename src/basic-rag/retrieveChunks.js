import { QdrantClient } from "@qdrant/js-client-rest";
import "dotenv/config";

const qdrant = new QdrantClient({
  url: process.env.QDRANT_HOST,
  apiKey: process.env.QDRANT_API_KEY,
});

export async function retrieveChunks(embedding) {
  const results = await qdrant.query("people", {
    query: embedding,
    with_payload: true,
    limit: 3, // top 3 relevant results
  });

  return results.points;
}
