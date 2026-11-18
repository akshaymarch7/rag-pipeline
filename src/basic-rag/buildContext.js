export function buildContext(chunks) {
  return chunks
    .map((chunk, index) => {
      const { text, filePath, paragraphIndex } = chunk.payload;
      return `File: ${filePath} -  Pragraph ${paragraphIndex}  - '${text}'`;
    })
    .join("\n\n");
}

// `File: sam.txt -  Pragraph 1  - 'Samuel Harris Altman (/ˈɔːltmən/ AWLT-mən;[1] born April 22, 1985) is an American entrepreneur and investor who has been the chief executive officer (CEO) of the artificial intelligence company OpenAI since 2019.

//     File: sam.txt, Pragraph 4 : Altman was born in Chicago on April 22, 1985,[6].......

//     File: sam.txt Pragraph 1 : Altman was born in Chicago on April 22, 1985,[6].......

//     `
