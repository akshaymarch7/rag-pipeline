import { createEmbeddings } from "./createEmbeddings.js";
import { retrieveChunks } from "./retrieveChunks.js";
import { buildContext } from "./buildContext.js";
import { generateResponse } from "./generateResponse.js";

const query = "Who is Sundar Pichai?";

const [embedding] = await createEmbeddings([query]);

const relevantChunks = await retrieveChunks(embedding);

const context = buildContext(relevantChunks);

const response = await generateResponse(query, context);

console.log("RESPONSE:", response);
