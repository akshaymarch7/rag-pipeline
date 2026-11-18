## Basic RAG Project

1. Create our knowlege base (some .txt files)
2. Document Loading
3. Chunking
4. Create Embeddings
5. Store the embedding into our Vector DB
6. Create query
7. Create Embeddings
8. Retrive relevant chunks from vector DB
9. Pass the chunks and query into LLM
10. Generate the final response for our query


## QDrant Demo

1. Setup the Qdrant account
2. Create a Cluster
3. Setup the project - empty repo
4. npm init
5. Create .env file and paste the QDRANT_API_KEY and QDRANT_HOST here
5. git init and add a gitignore file
6. npm install @qdrant/js-client-rest 
7. Connect to Qdrant Cloud
8. npm i -D @types/node
9. Add node type in tsconfig
10. Creating a collection which is named items
11. buiding points array out of data
12. Upsert points to the collection
13. npm install dotenv and add import "dotenv/config" into indexing.ts
14. Run the code and you should see the collection getting updated


HOMEWORK: 

Add 500 quotes to the Qdrant DB and fetch "motivational quotes", "time quotes"