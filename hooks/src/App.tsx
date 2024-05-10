import React from 'react';
import './App.css';
import {
  useCardNumber,
  useCardCompany,
  useCardOwnerName,
  useCardCVC,
  useCardPassword,
  useCardExpirationDate,
} from './lib';

function App() {
  const cardNumber = useCardNumber();
  const cardExpirationDate = useCardExpirationDate();
  const cardCompany = useCardCompany(['신한카드', '롯데카드', 'BC카드']);
  const cardOwnerName = useCardOwnerName();
  const cardCVC = useCardCVC();
  const cardPassword = useCardPassword();

  return (
    <>
      <h1>Hooks Modules</h1>
      <div>
        <h3>useCardNumber</h3>
        <input
          type="text"
          value={cardNumber.cardNumber}
          onChange={(e) => cardNumber.handleCardNumberChange(e.target.value)}
        ></input>
        <div>
          <p>{cardNumber.cardType}</p>
          <p>{`${cardNumber.isValidCardNumber}`}</p>
          <p>{cardNumber.cardNumberErrorMessage}</p>
        </div>
        <h3>useCardExpirationDate</h3>
        <input
          type="text"
          value={cardExpirationDate.month}
          onChange={(e) => cardExpirationDate.handleMonthChange(e.target.value)}
        ></input>
        <input
          type="text"
          value={cardExpirationDate.year}
          onChange={(e) => cardExpirationDate.handleYearChange(e.target.value)}
        ></input>
        <div>
          <p>{`${cardExpirationDate.isValidMonth} ${cardExpirationDate.isValidYear}`}</p>
          <p>{cardExpirationDate.monthErrorMessages}</p>
          <p>{cardExpirationDate.yearErrorMessages}</p>
        </div>
        <h3>useCardCompany</h3>
        <select onChange={(e) => cardCompany.handleCardCompanyChange(e.target.value)}>
          <option selected={cardCompany.cardCompany === ''} value="">
            선택해 주세요
          </option>
          <option selected={cardCompany.cardCompany === '신한카드'}>신한카드</option>
          <option selected={cardCompany.cardCompany === '롯데카드'}>롯데카드</option>
          <option selected={cardCompany.cardCompany === 'BC카드'}>BC카드</option>
        </select>
        <div>
          <p>{cardCompany.isValidCardCompany ? 'true' : 'false'}</p>
          <p>{cardCompany.cardCompanyErrorMessage}</p>
        </div>
        <h3>useCardOwnerName</h3>
        <input
          type="text"
          value={cardOwnerName.ownerName}
          onChange={(e) => cardOwnerName.handleOwnerNameChange(e.target.value)}
        />
        <div>
          <p>{cardOwnerName.isValidOwnerName ? 'true' : 'false'}</p>
          <p>{cardOwnerName.ownerNameErrorMessage}</p>
        </div>
        <h3>useCardCVC</h3>
        <input type="text" value={cardCVC.cvcNumber} onChange={(e) => cardCVC.handleCVCNumberChange(e.target.value)} />
        <div>
          <p>{cardCVC.isValidCVCNumber ? 'true' : 'false'}</p>
          <p>{cardCVC.cvcNumberErrorMessage}</p>
        </div>
        <h3>useCardPassword</h3>
        <input
          type="text"
          value={cardPassword.password}
          onChange={(e) => cardPassword.handlePasswordChange(e.target.value)}
        />
        <div>
          <p>{cardPassword.isValidPassword ? 'true' : 'false'}</p>
          <p>{cardPassword.passwordErrorMessage}</p>
        </div>
      </div>
    </>
  );
}

export default App;
