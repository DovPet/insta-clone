import React, { useState, useEffect } from "react";
import faker from "@faker-js/faker";

function Suggestions() {
  const [suggestions, setSuggestions] = useState([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    const suggestions = [...Array(15)].map((_, i) => ({
      ...faker.helpers.contextualCard(),
      id: i,
    }));
    setSuggestions(suggestions);
    console.log(suggestions);
  }, []);

  return (
    <div className="mt-4 ml-10">
      <div className="flex justify-between text-sm mb-5">
        <h3 className="text-sm font-bold text-gray-400">Suggestions for you</h3>
        <button
          className="font-semibold text-gray-600"
          onClick={() => setShowAll(!showAll)}
        >
          {showAll ? "See less" : "See all"}
        </button>
      </div>

      {suggestions.slice(0, showAll ? 15 : 5).map((suggestion) => (
        <div
          key={suggestion.id}
          className="flex items-center justify-between mt-3"
        >
          <img
            className="w-10 h-10 rounded-full border p-[2px]"
            src={suggestion.avatar}
            alt={suggestion.id}
          />
          <div className="flex-1 ml-4">
            <h2 className="font-semibold text-sm">{suggestion.username}</h2>
            <h3 className="text-xs text-gray-400">Works at {suggestion.company.name}</h3>
          </div>
          <button className="text-blue-400 text-xs text-bold">Follow</button>
        </div>
      ))}
    </div>
  );
}

export default Suggestions;
