import React from 'react';
import useCardPassword from './lib/useCardPassword';

function App() {
  const { cardPassword } = useCardPassword();

  return (
    <>
      <h1>Hooks Modules</h1>

      <input
        style={{ border: '2px solid black', padding: '4px' }}
        maxLength={2}
        type='password'
        value={cardPassword.value}
        onChange={cardPassword.onChange}
        onBlur={cardPassword.onBlur}
      />

      <p style={{ color: 'red' }}>{cardPassword.error.message}</p>
    </>
  );
}

export default App;
