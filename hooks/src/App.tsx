import React from 'react';
import useCardExpirationDate from './lib/useCardExpirationDate';

function App() {
  const { month, year, isCardExpirationDateValid } = useCardExpirationDate();

  const error = [month.error, year.error].find(({ state }) => state);

  return (
    <>
      <h1>Hooks Modules</h1>

      <input
        autoFocus
        ref={month.ref}
        style={{ border: `2px solid ${month.error.state ? 'red' : 'black'}`, padding: '4px' }}
        maxLength={2}
        type='text'
        value={month.value}
        onChange={(e) => month.onChange(e, 2)}
      />

      <input
        ref={year.ref}
        style={{ border: `2px solid ${year.error.state ? 'red' : 'black'}`, padding: '4px' }}
        maxLength={2}
        type='text'
        value={year.value}
        onChange={(e) => year.onChange(e, 2)}
      />
      {error && <p style={{ color: 'red' }}>{error.message}</p>}
      {isCardExpirationDateValid && <p style={{ color: 'red' }}>검증 완료</p>}
    </>
  );
}

export default App;
