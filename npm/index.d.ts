declare module '@apiverve/wordstonumbers' {
  export interface wordstonumbersOptions {
    api_key: string;
    secure?: boolean;
  }

  /**
   * Describes fields the current plan does not unlock. Locked fields arrive as null
   * in `data`; `locked_fields` names them, using dot paths for nested fields.
   * Absent when the plan unlocks everything.
   */
  export interface PremiumInfo {
    message: string;
    upgrade_url: string;
    locked_fields: string[];
  }

  export interface wordstonumbersResponse {
    status: string;
    error: string | null;
    data: WordstoNumbersData;
    code?: number;
    premium?: PremiumInfo;
  }


  interface WordstoNumbersData {
      number:                null | string;
      words:                 null | string;
      ordinal:               null | string;
      numberOfDigitsNumeric: number | null;
      numberOfDigitsWords:   null | string;
      eachNumber:            (null | string)[];
  }

  export default class wordstonumbersWrapper {
    constructor(options: wordstonumbersOptions);

    execute(callback: (error: any, data: wordstonumbersResponse | null) => void): Promise<wordstonumbersResponse>;
    execute(query: Record<string, any>, callback: (error: any, data: wordstonumbersResponse | null) => void): Promise<wordstonumbersResponse>;
    execute(query?: Record<string, any>): Promise<wordstonumbersResponse>;
  }
}
