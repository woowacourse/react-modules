import { useEffect } from "react";
import "./App.css";
import { usePassword } from "./lib";

function App() {
  // const { onChange, errorMessage, numbers, formattedNumbers } =
  //   useCardNumbers2();
  const { value, onChange, errorMessage } = usePassword("");

  useEffect(() => {
    console.log("aa", value);
  }, [value]);
  return (
    <>
      {/* <input onChange={onChange} value={numbers} />
      <span>{formattedNumbers}</span>
      <span>{errorMessage}</span> */}
      <span>error</span>
      <input onChange={onChange} value={value} />
      <span>{value}</span>
      <span>{errorMessage}</span>
    </>
  );
}

export default App;
