import { useCvc } from 'meta-seo-hooks';
import './App.css';
import useCardNumber from './lib/cardNumber/useCardNumber';
import { useEffect } from 'react';

function App() {
  // const { cardNumber, errorState, handleCardNumberChange } = useCardNumber();
  // const { expiration, errorState, handleExpirationChange } = useExpiration();
  const { cvc, errorState, handleCvcChange } = useCvc();
  useEffect(() => {
    console.log(errorState.errorState);
  }, [errorState.errorState]);

  return (
    <>
      <input value={cvc} onChange={(e) => handleCvcChange(e)}></input>
      {/* <input value={expiration.year} onChange={(e) => handleExpirationChange(e, 'year')}></input> */}
      {/* <input value={cardNumber.third} onChange={(e) => handleCardNumberChange(e, 'third')}></input>
      <input value={cardNumber.fourth} onChange={(e) => handleCardNumberChange(e, 'fourth')}></input> */}
      <p>{errorState.errorMessage}</p>
    </>
  );
}

export default App;
