import React from "react";
import "./App.css";
import useExpiryDate from "./lib/useExpiryDate";

function App() {
  const { expiryDate, handleExpiryDateChange, errorMessage } = useExpiryDate();

  console.log(expiryDate, errorMessage);

  return (
    <>
      <input
        type="text"
        onChange={handleExpiryDateChange}
        data-date-type="year"
      />
      <input
        type="text"
        onChange={handleExpiryDateChange}
        data-date-type="month"
      />
    </>
  );
}

export default App;
