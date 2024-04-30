import React from 'react';
import useInput from './lib/useInput';

function App() {
  const { value, onChange } = useInput();

  return (
    <>
      <h1>Hooks Modules</h1>
      <input value={value} onChange={onChange} />
      <p>{value}</p>
    </>
  );
}

export default App;
