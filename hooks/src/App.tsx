import React from 'react';
import useCardCompany from './lib/useCardCompany';

function App() {
  const { cardCompany } = useCardCompany();

  return (
    <>
      <h1>Hooks Modules</h1>

      <input readOnly onBlur={cardCompany.onBlur} style={{ border: '3px solid black', padding: '4px' }} value={cardCompany.value} />

      <label htmlFor='BC카드'>BC카드</label>
      <input hidden onChange={cardCompany.onChange} id='BC카드' type='radio' value='BC카드' name='cardcompany' />

      <label htmlFor='국민카드'>국민카드</label>
      <input hidden onChange={cardCompany.onChange} id='국민카드' type='radio' value='국민카드' name='cardcompany' />

      <label htmlFor='카카오뱅크'>카카오뱅크</label>
      <input hidden onChange={cardCompany.onChange} id='카카오뱅크' type='radio' value='카카오뱅크' name='cardcompany' />

      <label htmlFor='신한카드'>신한카드</label>
      <input hidden onChange={cardCompany.onChange} id='신한카드' type='radio' value='신한카드' name='cardcompany' />

      <p style={{ color: 'red' }}>{cardCompany.error.message}</p>
    </>
  );
}

export default App;
