import { useState, useMemo } from "react";
function UseMemoExample() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  // Expensive calculation
  const expensiveCalculation:any = (num:any) => {
    console.log("Computing...");
    return num * 2;
  };

  // Memoized result of the expensive calculation
  const memoizedResult = useMemo(() => expensiveCalculation(count), [count]);

  return (
    <div>
      <h1>----------UseMemo Hook 2-----------</h1>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount((prev) => prev + 1)}>Increment</button>
      <h2>Expensive Calculation Result: {memoizedResult}</h2>
      <input
        type="text"
        placeholder="Type something"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </div>
  );
}

export default UseMemoExample;
