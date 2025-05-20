import './App.css';
import {
  // useCardNumbers,
  useExpiryDate,
  useCvcNumber,
  usePassword,
} from 'jurunghappy-hooks';
import { useCardNumbers } from './lib';
// import {
//   useCardNumbers,
//   useExpiryDate,
//   useCvcNumber,
//   usePassword,
// } from './lib';

function App() {
  const {
    numbers,
    cardBrand,
    format,
    error: cardNumbersError,
    handleCardNumbers,
  } = useCardNumbers();
  const { date, error: dateError, handleExpiryDate } = useExpiryDate();
  const { cvc, error: cvcError, handleCvc } = useCvcNumber();
  const { password, error: passwordError, handlePassword } = usePassword();

  return (
    <>
      <div>
        <h1>CardNumbers</h1>
        <input
          type="text"
          value={numbers}
          onChange={(e) => handleCardNumbers(e.target.value)}
        />
        <p>{cardBrand ? cardBrand : ''}</p>
        <p>{cardNumbersError.errorMessage}</p>
      </div>
      <div>
        <h1>Date</h1>
        <input
          type="text"
          value={date.month}
          name="month"
          onChange={(e) => handleExpiryDate(e.target.value, 'month')}
        />
        <p>{dateError[0].errorMessage}</p>
        <input
          type="text"
          value={date.year}
          name="year"
          onChange={(e) => handleExpiryDate(e.target.value, 'year')}
        />
        <p>{dateError[1].errorMessage}</p>
      </div>
      <div>
        <h1>CVC</h1>
        <input
          type="text"
          value={cvc}
          onChange={(e) => handleCvc(e.target.value)}
        />
        <p>{cvcError.errorMessage}</p>
      </div>
      <div>
        <h1>Password</h1>
        <input
          type="text"
          value={password}
          onChange={(e) => handlePassword(e.target.value)}
        />
        <p>{passwordError.errorMessage}</p>
      </div>
    </>
  );
}

export default App;
