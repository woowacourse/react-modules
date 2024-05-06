import React, { useState } from 'react';
import './App.css';
import {
  useCVCValidation,
  useCardHolderValidation,
  useCardNumberValidation,
  useCardPasswordValidation,
  useCardTypeValidation,
  useExpiryDateValidation,
} from 'fe-card-validation-hooks';

function App() {
  const [cardHolder, setCardHolder] = useState('');
  const [cardNumber, setCardNumber] = useState(['', '', '', '']);
  const [cardPassword, setCardPassword] = useState('');
  const [cardType, setCardType] = useState('');
  const [cvc, setCVC] = useState('');
  const [expiryMonth, setExpiryMonth] = useState('');
  const [expiryYear, setExpiryYear] = useState('');

  const { validationResult: holderValidationResult, handleCardHolderChange } = useCardHolderValidation();
  const { validationResults: numberValidationResults, handleCardNumberChange } = useCardNumberValidation();
  const { validationResult: passwordValidationResult, handleCardPasswordChange } = useCardPasswordValidation();
  const { validationResult: typeValidationResult, handleCardTypeChange } = useCardTypeValidation();
  const { validationResult: cvcValidationResult, handleCVCChange } = useCVCValidation();
  const { validationResult: expiryValidationResult, handleExpiryDateChange } = useExpiryDateValidation();

  const handleCardNumberInputChange = (value: string, index: number) => {
    const newCardNumber = [...cardNumber];
    newCardNumber[index] = value;
    setCardNumber(newCardNumber);
    handleCardNumberChange(value, index);
  };

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
        {cardNumber.map((number, index) => (
          <input
            key={index}
            type='text'
            value={number}
            maxLength={4}
            onChange={(e) => handleCardNumberInputChange(e.target.value, index)}
          />
        ))}
        {numberValidationResults.map((result, index) => (
          <div key={index}>
            {!result.isValid &&
              result.errorMessages?.map((error, idx) => (
                <p key={idx} style={{ color: 'red' }}>
                  {error}
                </p>
              ))}
          </div>
        ))}
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
        <label>Card Type: </label>
        <input
          type='text'
          value={cardType}
          onChange={(e) => {
            setCardType(e.target.value);
            handleCardTypeChange(e.target.value);
          }}
        />
        {<p>Card Type: {typeValidationResult.cardType}</p>}
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
