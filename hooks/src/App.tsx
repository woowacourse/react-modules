import "./App.css";
// import { useCardNumbers } from "happyjurung-hooks";
// import { useExpiryDate } from "happyjurung-hooks";
// import { usePassword } from "happyjurung-hooks";
// import { useCvcNumber } from "happyjurung-hooks";
import useCardNumbers from "./lib/useCardNumbers";
import useExpiryDate from "./lib/useExpiryDate";
import usePassword from "./lib/usePassword";
import useCvcNumber from "./lib/useCvcNumber";

function App() {
  const {
    numbers,
    error: cardNumbersError,
    handleCardNumberChange,
  } = useCardNumbers();
  const { date, error: dateError, handleExpiryDateChange } = useExpiryDate();
  const { cvc, error: cvcError, handleCvcNumberChange } = useCvcNumber();
  const {
    password,
    error: passwordError,
    handlePasswordChange,
  } = usePassword();

  const handleCardNumber = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    handleCardNumberChange(e.target.value, index);
  };

  const handleExpiryDate = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === "month") {
      handleExpiryDateChange(e.target.value, "month");
    } else if (e.target.name === "year") {
      handleExpiryDateChange(e.target.value, "year");
    }
  };

  const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    handlePasswordChange(e.target.value);
  };

  const handleCvcNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleCvcNumberChange(e.target.value);
  };

  return (
    <>
      <div>
        <h1>CardNumbers</h1>
        {numbers.map((number, index) => (
          <input
            key={index}
            type="text"
            value={number}
            onChange={(e) => handleCardNumber(e, index)}
          />
        ))}
        <p>
          {cardNumbersError.find((error) => error.errorMessage !== "")
            ?.errorMessage ?? ""}
        </p>
      </div>
      <div>
        <h1>Date</h1>
        <input
          type="text"
          value={date.month}
          name="month"
          onChange={handleExpiryDate}
        />
        <p>{dateError[0].errorMessage}</p>
        <input
          type="text"
          value={date.year}
          name="year"
          onChange={handleExpiryDate}
        />
        <p>{dateError[1].errorMessage}</p>
      </div>
      <div>
        <h1>CVC</h1>
        <input type="text" value={cvc} onChange={handleCvcNumber} />
        <p>{cvcError.errorMessage}</p>
      </div>
      <div>
        <h1>Password</h1>
        <input type="text" value={password} onChange={handlePassword} />
        <p>{passwordError.errorMessage}</p>
      </div>
    </>
  );
}

export default App;
