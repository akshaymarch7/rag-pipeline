import OpenAI from "openai";
import "dotenv/config";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function generateResponse(userQuery, context) {
  const response = await openai.responses.create({
    model: "gpt-6-luna",
    instructions: `You are a helpful AI assistant that answers questions using given user query and context. 
      If the answer is not in the context then please politely say that the knowledge base does not have an answer.
      Do NOT EVER ANSWER OUT OF CONTEXT.
      Write the answer in basic plain english.
      Along with the answer, always give information about the file and paragraphs where the answer exist, this information is availabe in the context.
      If the answer lies in multiple files and paragraphs include both of them.
      `,
    input: `Question: ${userQuery} Context: ${context}`,
  });
  return response.output_text;
}
