import React, { useState } from 'react';
import './App.css';
import {
  useCVCValidation,
  useCardHolderValidation,
  useCardNumber,
  useCardPasswordValidation,
  useExpiryDateValidation,
} from './lib/index';
function App() {
  const [cardHolder, setCardHolder] = useState('');
  const [cardPassword, setCardPassword] = useState('');
  const [cvc, setCVC] = useState('');
  const [expiryMonth, setExpiryMonth] = useState('');
  const [expiryYear, setExpiryYear] = useState('');
  const { validationResult: holderValidationResult, handleCardHolderChange } = useCardHolderValidation();
  const { cardNumberInfo, handleCardNumberChange } = useCardNumber();
  const { validationResult: passwordValidationResult, handleCardPasswordChange } = useCardPasswordValidation();
  const { validationResult: cvcValidationResult, handleCVCChange } = useCVCValidation();
  const { validationResult: expiryValidationResult, handleExpiryDateChange } = useExpiryDateValidation();
  return (
    <div>
      <h1>Hooks Modules</h1>
      <div>
        <label>Card Holder Name: </label>
        <input
          type='text'
          value={cardHolder}
          onChange={(e) => {
            setCardHolder(e.target.value);
            handleCardHolderChange(e.target.value, 15);
          }}
        />
        {!holderValidationResult.isValid &&
          holderValidationResult.errorMessages?.map((error, index) => (
            <p key={index} style={{ color: 'red' }}>
              {error}
            </p>
          ))}
      </div>
      <div>
        <label>Card Number: </label>
        <input
          type='text'
          value={cardNumberInfo.cardNumber.join(' ')}
          onChange={(e) => handleCardNumberChange(e.target.value)}
        />
        <div>
          {!cardNumberInfo.isValid &&
            cardNumberInfo.errorMessages?.map((error, idx) => (
              <p key={idx} style={{ color: 'red' }}>
                {error}
              </p>
            ))}
          {<p>Card Type: {cardNumberInfo.cardType}</p>}
        </div>
      </div>
      <div>
        <label>Card Password: </label>
        <input
          type='text'
          value={cardPassword}
          maxLength={2}
          onChange={(e) => {
            setCardPassword(e.target.value);
            handleCardPasswordChange(e.target.value, 2);
          }}
        />
        {!passwordValidationResult.isValid &&
          passwordValidationResult.errorMessages?.map((error, index) => (
            <p key={index} style={{ color: 'red' }}>
              {error}
            </p>
          ))}
      </div>
      <div>
        <label>CVC: </label>
        <input
          type='text'
          value={cvc}
          onChange={(e) => {
            setCVC(e.target.value);
            handleCVCChange(e.target.value, 4);
          }}
        />
        {!cvcValidationResult.isValid &&
          cvcValidationResult.errorMessages?.map((error, index) => (
            <p key={index} style={{ color: 'red' }}>
              {error}
            </p>
          ))}
      </div>
      <div>
        <label>Expiry Month: </label>
        <input
          type='text'
          value={expiryMonth}
          maxLength={2}
          onChange={(e) => {
            setExpiryMonth(e.target.value);
            handleExpiryDateChange(e.target.value, expiryYear);
          }}
        />
        {!expiryValidationResult.isValidMonth &&
          expiryValidationResult.monthErrorMessages?.map((error, index) => (
            <p key={index} style={{ color: 'red' }}>
              {error}
            </p>
          ))}
        <label>Expiry Year: </label>
        <input
          type='text'
          value={expiryYear}
          maxLength={2}
          onChange={(e) => {
            setExpiryYear(e.target.value);
            handleExpiryDateChange(expiryMonth, e.target.value);
          }}
        />
        {!expiryValidationResult.isValidYear &&
          expiryValidationResult.yearErrorMessages?.map((error, index) => (
            <p key={index} style={{ color: 'red' }}>
              {error}
            </p>
          ))}
      </div>
    </div>
  );
}
export default App;
