import './App.css';
// import { useCardNumbers } from 'pongda-payments-hooks';
import useCardNumbers from './useCardNumbers/useCardNumbers';
import getCardNetwork from './useCardNumbers/getCardNetwork';
import useFormattedCardNumbers from './useFormattedCardNumbers/useFormattedCardNumbers';
function App() {
  // const { cardNumbers, handleCardNumbersChange, isError, errorMessage } =
  //   useCardNumbers();
  const {
    formattedCardNumbers,
    handleFormattedCardNumbersChange,
    isError,
    errorMessage,
  } = useFormattedCardNumbers();

  return (
    <>
      <h1>Hooks Modules</h1>
      <input
        value={formattedCardNumbers}
        onChange={handleFormattedCardNumbersChange}
      ></input>

      {/* <input
        value={cardNumbers.FIRST}
        onChange={handleCardNumbersChange({ target: 'FIRST' })}
      ></input>
      <input
        value={cardNumbers.SECOND}
        onChange={handleCardNumbersChange({ target: 'SECOND' })}
      ></input>
      <input
        value={cardNumbers.THIRD}
        onChange={handleCardNumbersChange({ target: 'THIRD' })}
      ></input>
      <input
        value={cardNumbers.FOURTH}
        onChange={handleCardNumbersChange({ target: 'FOURTH' })}
      ></input> */}
      {isError && (
        <div className="error-message">
          {Object.values(errorMessage).map((message, index) => (
            <p key={index}>{message}</p>
          ))}
        </div>
      )}
    </>
  );
}

export default App;
