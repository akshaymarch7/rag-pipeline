import OpenAI from "openai";
import "dotenv/config";
import { EMBEDDING_MODEL_NAME, VECTOR_DIMENSION } from "./config.js";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function createEmbeddings(chunks) {
  const embeddings = await openai.embeddings.create({
    model: EMBEDDING_MODEL_NAME,
    input: chunks,
    dimension: VECTOR_DIMENSION,
    encoding_format: "float",
  });

  return embeddings.data.map((item) => item.embedding);
}
