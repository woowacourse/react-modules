import React from 'react';
import useCardNumbers from './lib/useCardNumbers';

function App() {
  const { cardNumbers, cardBrand } = useCardNumbers(['', '', '', '']);

  const cardNumberError = cardNumbers.find(({ error }) => error.state);

  return (
    <>
      <h1>Hooks Modules</h1>
      <input
        autoFocus
        maxLength={4}
        style={{ border: '1px solid black' }}
        value={cardNumbers[0].value}
        onBlur={cardNumbers[0].onBlur}
        onChange={cardNumbers[0].onChange}
      />
      <input
        maxLength={4}
        style={{ border: '1px solid black' }}
        value={cardNumbers[1].value}
        onBlur={cardNumbers[1].onBlur}
        onChange={cardNumbers[1].onChange}
      />
      <input
        maxLength={4}
        style={{ border: '1px solid black' }}
        value={cardNumbers[2].value}
        onBlur={cardNumbers[2].onBlur}
        onChange={cardNumbers[2].onChange}
      />
      <input
        maxLength={4}
        style={{ border: '1px solid black' }}
        value={cardNumbers[3].value}
        onBlur={cardNumbers[3].onBlur}
        onChange={cardNumbers[3].onChange}
      />
      <p>cardNumbers 1: {cardNumbers[0].value}</p>
      <p>cardNumbers 2: {cardNumbers[1].value}</p>
      <p>cardNumbers 3: {cardNumbers[2].value}</p>
      <p>cardNumbers 4: {cardNumbers[3].value}</p>
      {cardNumberError && <p style={{ color: 'red' }}>{cardNumberError.error.message}</p>}

      <p style={{ color: 'blue' }}>{cardBrand}</p>
    </>
  );
}

export default App;
