import React from 'react';
import useCardCVC from './lib/useCardCVC';

function App() {
  const { cardCVC } = useCardCVC();

  return (
    <>
      <h1>Hooks Modules</h1>

      <input
        style={{ border: '2px solid black', padding: '4px' }}
        maxLength={3}
        type='text'
        value={cardCVC.value}
        onChange={cardCVC.onChange}
        onBlur={cardCVC.onBlur}
      />

      <p style={{ color: 'red' }}>{cardCVC.error.message}</p>
    </>
  );
}

export default App;
