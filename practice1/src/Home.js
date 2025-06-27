function MyButton() {
    return (
      <button  onClick={"https://react.dev/learn"}   formAction=""     className="app-button">
        Click Here
      </button>
    );
  }
  
  export default function MyApp() {
    return (
      <div>
        <h2>Welcome to React</h2>
        <MyButton />
      </div>
    );
  }

