import React from 'react';
import useCardOwner from './lib/useCardOwner';

function App() {
  const { cardOwner } = useCardOwner();

  return (
    <>
      <h1>Hooks Modules</h1>
      <input autoFocus style={{ border: '1px solid black' }} value={cardOwner.value} onBlur={cardOwner.onBlur} onChange={cardOwner.onChange} />
      <p>{cardOwner.value}</p>
      <p style={{ color: 'red' }}>{cardOwner.error.message}</p>
    </>
  );
}

export default App;
