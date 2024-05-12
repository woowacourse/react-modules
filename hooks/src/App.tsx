import React from 'react';
import {
  useCardNumber,
  useCVCNumber,
  useExpiration,
  useCardPassword,
  useOwnerName,
  formattingValue,
} from '@jaymyong66/payments-hooks';

function App() {
  const { cvcNumber, cvcError, handleChangeCVCNumber } = useCVCNumber();
  const { cardNumbers, cardNumberError, handleChangeCardNumber } = useCardNumber();
  const { expiration, expirationError, handleChangeExpiration } = useExpiration();
  const { cardPassword, cardPasswordError, handleChangeCardPassword } = useCardPassword();
  const { ownerName, ownerNameError, handleChangeOwnerName } = useOwnerName();
  return (
    <>
      <h1>Card Owner Name</h1>
      <input value={ownerName} onChange={(e) => handleChangeOwnerName(e.target.value)} />
      <div>{ownerNameError.errorMessage}</div>
      <h1>Card Password</h1>
      <input value={cardPassword} onChange={(e) => handleChangeCardPassword(e.target.value)} />
      <div>{cardPasswordError.errorMessage}</div>
      <h1>Card CVC</h1>
      <input value={cvcNumber} onChange={(e) => handleChangeCVCNumber(e.target.value)} />
      <div>{cvcError.errorMessage}</div>
      <h1>Card Expiration</h1>
      <input value={expiration.month} onChange={(e) => handleChangeExpiration('month', e.target.value)} />
      <input value={expiration.year} onChange={(e) => handleChangeExpiration('year', e.target.value)} />
      <div>{expirationError.errorMessage}</div>
      <h1>Card Numbers</h1>
      <input value={formattingValue(cardNumbers)} onChange={(e) => handleChangeCardNumber(e.target.value)} />
      <div>{cardNumberError.errorMessage}</div>
    </>
  );
}
export default App;
