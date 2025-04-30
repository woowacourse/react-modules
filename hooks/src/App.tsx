import React from 'react';
import './App.css';
import useCardNumbers from './useCardNumbers';
import { CARD_NUMBERS_KEY } from './cardNumber/constants';

function App() {
  const { cardNumbers, isValid, errorMessage, handleCardNumbersChange } =
    useCardNumbers();

  return (
    <>
      <h1>Hooks Modules</h1>
      <input
        type='text'
        name={CARD_NUMBERS_KEY.part1}
        onChange={handleCardNumbersChange}
        value={cardNumbers.part1}
      />
      <p>{isValid.part1}</p>
      <input
        type='text'
        name={CARD_NUMBERS_KEY.part2}
        onChange={handleCardNumbersChange}
        value={cardNumbers.part2}
      />
      <p>{isValid.part2}</p>
      <input
        type='text'
        name={CARD_NUMBERS_KEY.part3}
        onChange={handleCardNumbersChange}
        value={cardNumbers.part3}
      />
      <p>{isValid.part3}</p>
      <input
        type='text'
        name={CARD_NUMBERS_KEY.part4}
        onChange={handleCardNumbersChange}
        value={cardNumbers.part4}
      />
      <p>{isValid.part4}</p>
      <p>{errorMessage}</p>
    </>
  );
}

export default App;
