import React, { useState, useEffect } from "react";

export default function SearchBox() {
  const [searchResult, setSearchResult] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [debounceTerm, setDebounceTerm] = useState("");

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebounceTerm(searchTerm);
      console.log(`Calling API to search: ${searchTerm}`);

      if (searchTerm.trim()) {
        setSearchResult(`Showing result for: "${searchTerm}"`);
      } else {
        setSearchResult("");
      }
    }, 500);

    return () => {
      console.log("timeout cleared");
      clearTimeout(timeout);
    };
  }, [searchTerm]);

  return (
    <div className="flex flex-col items-center mx-10 my-5 p-8 max-w-2xl w-full bg-white border border-gray-200 shadow-lg rounded-2xl">
      <h2 className="mb-6 pb-3 w-full font-bold text-center text-gray-800 text-xl border-b">
        Search Bar Optimization
      </h2>

      <div className="space-y-4 w-full">
        {/* Search Input */}
        <input
          type="text"
          id="search-text"
          placeholder="Type to search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="px-4 py-3 w-full text-gray-700 border border-gray-300 duration-200 transition focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg"
        />
        {/* Result Display - with word wrap */}
        {searchResult ? (
          <div className="px-4 py-4 w-full text-center bg-blue-50 rounded-lg">
            <p className="break-words font-medium text-blue-700 text-lg">
              {searchResult}
            </p>
          </div>
        ) : (
          <div className="px-4 py-4 w-full text-center bg-gray-50 rounded-lg">
            <p className="text-gray-400 text-sm">
              {searchTerm ? "Searching..." : "Type to search..."}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
