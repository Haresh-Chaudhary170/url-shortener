import React, { useState } from "react";
import axios from "axios";

function UrlShorterner() {
  const [longUrl, setLongUrl] = useState("");
  const [customText, setCustomText] = useState("");
  const [shortenedUrl, setShortenedUrl] = useState("");
  const [error, setError] = useState("");
  const [isCopied, setIsCopied] = useState(false);

  const generateShortUrl = async () => {
    try {
      const apiKey = "81ba68424d18462dbccff2afc26e5eab";
      const apiUrl = `https://api.rebrandly.com/v1/links`;

      const response = await axios.post(
        apiUrl,
        {
          destination: longUrl,
          domain: { fullName: "rebrand.ly" },
          slashtag: customText,
        },
        {
          headers: {
            "Content-Type": "application/json",
            apikey: apiKey,
          },
        }
      );

      if (response.status === 200) {
        setShortenedUrl(response.data.shortUrl);
      } else {
        setError("Failed to generate shortened URL");
      }
    } catch (error) {
      setError("Error: " + error.message);
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(shortenedUrl);
    setIsCopied(true);
  };
  return (
    <div>
      <div class="bg-white">
        <div class="relative isolate px-6 lg:px-8">
          <div class="mx-auto max-w-2xl sm:py-48 lg:py-56">
            <div class="text-center">
              <h1 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                Shorten And Customize Your Long URL
              </h1>
              <p class="mt-6 text-lg leading-8 text-gray-600">
                Having Trouble to send long and boring urls? <br />
                Just shorten and customize it here easily.
              </p>
              <div class="w-full text-left">
                <form className="bg-white shadow-lg border rounded-xl px-8 pt-6 pb-8 mb-4">
                  <div className="mb-4">
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2"
                      htmlFor="long_url"
                    >
                      Long Url
                    </label>
                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="long_url"
                      type="text"
                      placeholder="Long Url"
                      value={longUrl}
                      onChange={(e) => setLongUrl(e.target.value)}
                    />
                  </div>
                  <div className="mb-6">
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2"
                      htmlFor="custom_text"
                    >
                      Custom Text
                    </label>
                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                      id="custom_text"
                      type="text"
                      placeholder="Custom Text"
                      value={customText}
                      onChange={(e) => setCustomText(e.target.value)}
                    />
                  </div>
                  {shortenedUrl && (
                    <div className="flex gap-2 items-center">
                      <span className="mb-4">
                        Shortened Url: <span className="p-2 truncate bg-gray-300 rounded-md">{shortenedUrl}</span>
                      </span>
                      <button
                        onClick={copyToClipboard}
                        className="mb-4 bg-green-600 text-white p-2 rounded"
                        type="button"
                      >
                        {isCopied ? "Copied!" : "Copy to Clipboard"}
                      </button>
                      {error && <p className="text-red-500 mb-4">{error}</p>}
                    </div>
                  )}

                  <div className="flex items-center justify-center">
                    <button
                      onClick={generateShortUrl}
                      className="bg-primary hover:bg-primary text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                      type="button"
                    >
                      Generate
                    </button>
                  </div>
                </form>
                <p class="text-center text-gray-500 text-xs">
                  &copy;2024 Haresh Chaudhary. All rights reserved.
                </p>
              </div>
            </div>
          </div>
          <div
            class="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
            aria-hidden="true"
          ></div>
        </div>
      </div>
    </div>
  );
}

export default UrlShorterner;
