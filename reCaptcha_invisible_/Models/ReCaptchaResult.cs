using Newtonsoft.Json;
using System.Collections.Generic;

namespace reCaptcha_invisible_.Models
{
    public class ReCaptchaResult
    {
        [JsonProperty("success")]
        public bool Success { get; set; }

        [JsonProperty("error-codes")]
        public List<string> ErrorCodes { get; set; }

    }
}