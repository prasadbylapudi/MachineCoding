import { useState } from "react";
export default function App() {
  const [searchText, setSearchText] = useState("");

  let counter = 0;
  function fetchData() {
    console.log("fetching data.....", counter++);
  }
  function doSomeMagic(fn, delay) {
    let timer;
    let context = this,
      args = arguments;
    return function () {
      clearTimeout(timer);
      timer = setTimeout(() => {
        fetchData.apply(context, args);
      }, delay);
    };
  }

  const betterFunction = doSomeMagic(fetchData, 500);

  return (
    <div className="App">
      <h1>Debounce Demo</h1>
      <input type={"text"} placeholder="search...." onKeyUp={betterFunction} />
      <h3>Check console for the output</h3>
    </div>
  );
}
