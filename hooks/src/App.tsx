import { useState } from "react";
import "./App.css";
import { useCardNumberValidation } from "@sooyeoniya/hooks";

function App() {
  const [input, setInput] = useState({
    first: "",
    second: "",
    third: "",
    fourth: "",
  });
  const results = useCardNumberValidation(input);
  console.log(results);
  return (
    <>
      <h1>Hooks Modules</h1>
      <input
        value={input.first}
        onChange={(e) =>
          setInput((prev) => ({ ...prev, first: e.target.value }))
        }
      />
      <input
        value={input.second}
        onChange={(e) =>
          setInput((prev) => ({ ...prev, second: e.target.value }))
        }
      />
      <input
        value={input.third}
        onChange={(e) =>
          setInput((prev) => ({ ...prev, third: e.target.value }))
        }
      />
      <input
        value={input.fourth}
        onChange={(e) =>
          setInput((prev) => ({ ...prev, fourth: e.target.value }))
        }
      />
    </>
  );
}

export default App;
