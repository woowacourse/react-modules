import "./App.css";

import { useExpiryDate } from "pesu-hooks";

export default function App() {
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
