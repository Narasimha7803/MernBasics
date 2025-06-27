import { useState, useMemo } from "react";

function ExpensiveCalculation() {
  const [count, setCount] = useState<number>(0); 
  const [otherState, setOtherState] = useState<boolean>(false); 

  // Expensive function
  const computeBigNumber = (num: number): number => { 
    console.log("Calculating a big number...");
    return num * 1000;
  };

  // Memoized value
  const bigNumber = useMemo(() =>
    computeBigNumber(count), [count]);

  return (

    <div>
      <h1>Big Number: {bigNumber}</h1>
      <button onClick={() => setCount(count + 1)}>Increase Count</button>
      <button onClick={() => setOtherState(!otherState)}>
        Toggle Other State
      </button>
    </div>
  );
}

export default ExpensiveCalculation;
