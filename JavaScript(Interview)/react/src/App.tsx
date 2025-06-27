import "./App.css";
// import { useState, useEffect } from "react";
// import ExpensiveCalculation from "./components/UseMemo";
// import UseRefExample from "./components/UseRef";
// import UseRefExample2 from "./components/UseRefExample2";
// import UseMemoExample from "./components/UseMemoEx2";
import UseState from "./components/UseState";
import UseEffect from "./components/UseEffect";

function App() {
  // const [count, setCount] = useState<number>(0);

  //   useEffect(() => {
  //   if(count % 2 === 0 ){
  //   }
  //   }, [count]);

  return (
    <>
      {/* <div>
        <h1>You clicked the button {count} times!</h1>
        <button onClick={() => setCount(count + 1)}>Click me</button>
      </div> */}
      {/* <ExpensiveCalculation />
      <UseRefExample />
      <UseRefExample2 />
      <UseMemoExample /> */}
      <UseState />
      <UseEffect />
    </>
  );
}

export default App;
