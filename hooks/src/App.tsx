import "./App.css";
// import useCvcNumber from "./lib/useCvcNumber";
import usePassword from "./lib/usePassword";
import useExpiryDate from "./lib/useExpiryDate";
import useCardNumbers from "./lib/useCardNumber";

function App() {
  const {
    password,
    error: passwordError,
    validate: passwordValidate,
  } = usePassword();
  const { date, error: dateError, validate: dateValidate } = useExpiryDate();
  const {
    numbers,
    error: cardNumbersError,
    validate: cardNumbersValidate,
  } = useCardNumbers();

  const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    passwordValidate(e.target.value);
  };

  const handleExpiryDate = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === "month") {
      dateValidate(e.target.value, "month");
    } else if (e.target.name === "year") {
      dateValidate(e.target.value, "year");
    }
  };

  const handleCardNumber = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    cardNumbersValidate(e.target.value, index);
  };
  return (
    <>
      <div>
        <h1>Password</h1>
        <input type="text" value={password} onChange={handlePassword} />
        <p>{passwordError.errorMessage}</p>
      </div>
      <div>
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
    </>
  );
}

export default App;
