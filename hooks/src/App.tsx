import './App.css';
import useCardNumbers from './cardNumber/useCardNumbers';
import { CARD_NUMBERS_KEY } from './cardNumber/constants';

function App() {
  const { cardNumbers, validationResults, handleCardNumbersChange } =
    useCardNumbers();

  return (
    <>
      <h1>Hooks Modules</h1>
      <input
        type="text"
        name={CARD_NUMBERS_KEY.part1}
        onChange={handleCardNumbersChange}
        value={cardNumbers.part1}
      />
      <p>{validationResults.part1.isValid}</p>
      <input
        type="text"
        name={CARD_NUMBERS_KEY.part2}
        onChange={handleCardNumbersChange}
        value={cardNumbers.part2}
      />
      <p>{validationResults.part2.isValid}</p>
      <input
        type="text"
        name={CARD_NUMBERS_KEY.part3}
        onChange={handleCardNumbersChange}
        value={cardNumbers.part3}
      />
      <p>{validationResults.part3.isValid}</p>
      <input
        type="text"
        name={CARD_NUMBERS_KEY.part4}
        onChange={(e) => handleCardNumbersChange(e, false)}
        value={cardNumbers.part4}
      />
      <p>{validationResults.part4.isValid}</p>
      <p>{validationResults.part1.errorMessage}</p>
    </>
  );
}

export default App;
