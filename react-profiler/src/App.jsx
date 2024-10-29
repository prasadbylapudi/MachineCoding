import React, { Profiler, useState } from "react";

// Sample child component that we want to profile
const ExpensiveComponent = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Expensive Component Rendered</h2>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

// Callback function to capture render data
const onRenderCallback = (
  id, // the "id" prop of the Profiler tree
  phase, // either "mount" or "update"
  actualDuration, // time spent rendering the committed update
  baseDuration, // estimated time to render the entire subtree without memoization
  startTime, // when React began rendering this update
  commitTime, // when React committed this update
  interactions // interactions that were present when this update was scheduled
) => {
  console.log(`Profiler ID: ${id}`);
  console.log(`Render phase: ${phase}`);
  console.log(`Actual duration: ${actualDuration}ms`);
  console.log(`Base duration: ${baseDuration}ms`);
  console.log(`Start time: ${startTime}ms`);
  console.log(`Commit time: ${commitTime}ms`);
  console.log(`Interactions:`, interactions);
};

const App = () => {
  return (
    <div>
      <h1>React Profiler Example</h1>
      <Profiler id="ExpensiveComponentProfiler" onRender={onRenderCallback}>
        <ExpensiveComponent />
      </Profiler>
    </div>
  );
};

export default App;
