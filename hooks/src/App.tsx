import React from 'react';
import useCardExpirationDate from './lib/useCardExpirationDate';

function App() {
  const { month, year } = useCardExpirationDate();

  const error = [month.error, year.error].find(({ state }) => state);

  return (
    <>
      <h1>Hooks Modules</h1>

      <input
        style={{ border: `2px solid ${month.error.state ? 'red' : 'black'}`, padding: '4px' }}
        maxLength={2}
        type='text'
        value={month.value}
        onChange={month.onChange}
      />

      <input
        style={{ border: `2px solid ${year.error.state ? 'red' : 'black'}`, padding: '4px' }}
        maxLength={2}
        type='text'
        value={year.value}
        onChange={year.onChange}
      />

      {error && <p style={{ color: 'red' }}>{error.message}</p>}
    </>
  );
}

export default App;
