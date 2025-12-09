declare module '@apiverve/wordstonumbers' {
  export interface wordstonumbersOptions {
    api_key: string;
    secure?: boolean;
  }

  export interface wordstonumbersResponse {
    status: string;
    error: string | null;
    data: WordstoNumbersData;
    code?: number;
  }


  interface WordstoNumbersData {
      number:                string;
      words:                 string;
      ordinal:               string;
      numberOfDigitsNumeric: number;
      numberOfDigitsWords:   string;
      eachNumber:            string[];
  }

  export default class wordstonumbersWrapper {
    constructor(options: wordstonumbersOptions);

    execute(callback: (error: any, data: wordstonumbersResponse | null) => void): Promise<wordstonumbersResponse>;
    execute(query: Record<string, any>, callback: (error: any, data: wordstonumbersResponse | null) => void): Promise<wordstonumbersResponse>;
    execute(query?: Record<string, any>): Promise<wordstonumbersResponse>;
  }
}
