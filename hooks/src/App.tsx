import './App.css';
import { EXPIRY_DATE_KEY } from './lib';
import useExpiryDate from './lib/expiryDate/useExpiryDate';

function App() {
  const { expiryDate, validationResults, handleExpiryDateChange } =
    useExpiryDate();

  return (
    <>
      <h1>Hooks Modules</h1>
      <input
        type="text"
        name={EXPIRY_DATE_KEY.month}
        onChange={(event) =>
          handleExpiryDateChange('month', event.target.value)
        }
        value={expiryDate.month}
      />
      <p>{validationResults.month.isValid}</p>
      <input
        type="text"
        name={EXPIRY_DATE_KEY.year}
        onChange={(event) =>
          handleExpiryDateChange('year', event?.target.value, {
            skipValidation: true,
          })
        }
        value={expiryDate.year}
      />
      <p>{validationResults.year.isValid}</p>

      <p>{validationResults.month.errorMessage}</p>
      <p>{validationResults.year.errorMessage}</p>
    </>
  );
}

export default App;
