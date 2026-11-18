import OpenAI from "openai";
import "dotenv/config";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function createEmbeddings(chunks) {
  const embeddings = await openai.embeddings.create({
    model: "text-embedding-3-small",
    input: chunks,
    dimension: 1536,
    encoding_format: "float",
  });

  return embeddings.data.map((item) => item.embedding);
}
