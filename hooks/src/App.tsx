import React from 'react';
import useCardNumber from './lib/hooks/useCardNumber';

function App() {
  const { cardNumber, setCardNumber, handleCardNumber, isValid, errorMessage, cardBrand } = useCardNumber();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const newCardNumber = { ...cardNumber, [name]: value };
    setCardNumber(newCardNumber);
    handleCardNumber(newCardNumber);
  };

  return (
    <div>
      <input name='input1' onChange={handleChange} />
      <input name='input2' onChange={handleChange} />
      <input name='input3' onChange={handleChange} />
      <input name='input4' onChange={handleChange} />
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <span style={{ color: 'white', display: 'flex', flexDirection: 'column' }}>
          {Object.entries(isValid).map(([key, value]) => {
            if (value === false) {
              return <span key={key}>{key}</span>;
            }
            return null;
          })}
        </span>

        <span style={{ color: 'white' }}>{errorMessage}</span>
        <span style={{ color: 'white' }}>cardBrand: {cardBrand}</span>
      </div>
    </div>
  );
}

export default App;
