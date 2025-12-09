using System;
using System.Collections.Generic;
using System.Text;
using Newtonsoft.Json;

namespace APIVerve.API.WordstoNumbers
{
    /// <summary>
    /// Query options for the Words to Numbers API
    /// </summary>
    public class WordstoNumbersQueryOptions
    {
        /// <summary>
        /// The words to convert to numbers
        /// Example: seven thousand six hundred and twenty
        /// </summary>
        [JsonProperty("words")]
        public string Words { get; set; }
    }
}
