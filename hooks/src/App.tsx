import React from "react";
import "./App.css";
import useOwnerName from "./lib/useOwnerName";

function App() {
  const { ownerName, onChange } = useOwnerName();

  return (
    <>
      <h1>Hooks Modules</h1>
      <label>Owner Name</label>
      <div>
        <input value={ownerName.value} onChange={onChange} />
        <div>{ownerName.errorMessage}</div>
      </div>
    </>
  );
}

export default App;
