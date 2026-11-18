import { createEmbeddings } from "./createEmbeddings.js";
import { retrieveChunks } from "./retrieveChunks.js";
import { buildContext } from "./buildContext.js";
import { generateResponse } from "./generateResponse.js";

const query = "When and where was Sam Altman was born?";

const [embedding] = await createEmbeddings([query]);

const relevantChunks = await retrieveChunks(embedding);

const context = buildContext(relevantChunks);

const response = await generateResponse(query, context);

console.log("RESPONSE:", response);
