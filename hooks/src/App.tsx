import './App.css';
import {
  useCardNumbers,
  useExpiryDate,
  useCvcNumber,
  usePassword,
} from 'jurunghappy-hooks';

function App() {
  const {
    numbers,
    error: cardNumbersError,
    validate: cardNumbersValidate,
  } = useCardNumbers();
  const { date, error: dateError, validate: dateValidate } = useExpiryDate();
  const { cvc, error: cvcError, validate: cvcValidate } = useCvcNumber();
  const {
    password,
    error: passwordError,
    validate: passwordValidate,
  } = usePassword();

  const handleCardNumber = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    cardNumbersValidate(e.target.value, index);
  };

  const handleExpiryDate = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === 'month') {
      dateValidate(e.target.value, 'month');
    } else if (e.target.name === 'year') {
      dateValidate(e.target.value, 'year');
    }
  };

  const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    passwordValidate(e.target.value);
  };

  const handleCvcNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
    cvcValidate(e.target.value);
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
          {cardNumbersError.find((error) => error.errorMessage !== '')
            ?.errorMessage ?? ''}
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
