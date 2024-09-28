import { useState, useRef, useEffect, useCallback } from "react";

import "./App.css";

/* Problem Statement: Building a Search Filter Component
Objective: Create a React component that allows users to filter a list of items based on a search query entered in an input field. The displayed items should update in real-time as the user types.
Requirements: User Input:
Provide an input field for the user to type in their search query. The input field should allow for live updates to the displayed list. Item List:
Use an array of predefined items, such as:
['Apple', 'Banana', 'Orange', 'Grapes', 'Pineapple'] Display only those items that match the search query.
Performance Optimization:
Use useState to manage:
The search query. The filtered list of items. Use useRef to hold a reference to the input field for programmatic focus. Use useEffect to trigger filtering when the search query changes, ensuring that the input is focused when the component mounts. Use useCallback to memoize the filtering function, optimizing performance and preventing unnecessary computations during re-renders.
User Experience:
Ensure that the filtering updates happen smoothly and efficiently. Consider edge cases, such as empty search querie
*/

function App() {
  const data = ["Apple", "Banana", "Orange", "Grapes", "Pineapple"];
  const [searchText, setSearchText] = useState("");
  const [suggestionsList, setSuggestionsList] = useState([...data]);

  const inputRef = useRef(null); // Step 1: Create the ref

  useEffect(() => {
    inputRef.current.focus(); // Step 2: Focus the input on mount
  }, []);

  const handleSearch = useCallback(
    (e) => {
      const query = e.target.value;
      setSearchText(query);

      // Filter the list based on the query
      const filteredList = data.filter((item) =>
        item.toLowerCase().includes(query.toLowerCase())
      );
      setSuggestionsList(filteredList);
    },
    [data]
  );

  return (
    <>
      <div>
        <h1>search filter</h1>
        <div className="search-container">
          <input
            type="text"
            value={searchText}
            onChange={handleSearch}
            ref={inputRef}
          />
        </div>
        <div
          className="suggestions"
          style={{ border: "2px solid black", margin: "20px" }}
        >
          {suggestionsList.length > 0 ? (
            suggestionsList.map((item, i) => (
              <li
                style={{ borderBottom: "2px solid black", margin: "20px" }}
                key={i}
              >
                {item}
              </li>
            ))
          ) : (
            <p>No matching items found</p>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
