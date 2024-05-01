import React from 'react';
import './App.css';
import {
  useCardNumber,
  useCardCompany,
  useCardOwnerName,
  useCardCVC,
  useCardPassword,
} from './lib';

function App() {
  const cardNumbers = useCardNumber(4, 4);
  const cardNumbers2 = useCardNumber(1, 16);
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
          value={cardNumbers.cardNumber[0]}
          onChange={(e) => cardNumbers.handleCardNumberChange(e.target.value, 0)}
        ></input>
        <input
          type="text"
          value={cardNumbers.cardNumber[1]}
          onChange={(e) => cardNumbers.handleCardNumberChange(e.target.value, 1)}
        ></input>
        <input
          type="text"
          value={cardNumbers.cardNumber[2]}
          onChange={(e) => cardNumbers.handleCardNumberChange(e.target.value, 2)}
        ></input>
        <input
          type="text"
          value={cardNumbers.cardNumber[3]}
          onChange={(e) => cardNumbers.handleCardNumberChange(e.target.value, 3)}
        ></input>
        <div>
          <p>{`${cardNumbers.isValidCardNumbers}`}</p>
          <p>{cardNumbers.cardNumberErrorMessages}</p>
        </div>
        <h3>useCardNumber2</h3>
        <input
          type="text"
          value={cardNumbers2.cardNumber[0]}
          onChange={(e) => cardNumbers2.handleCardNumberChange(e.target.value, 0)}
        ></input>
        <div>
          <p>{`${cardNumbers2.isValidCardNumbers}`}</p>
          <p>{cardNumbers2.cardNumberErrorMessages}</p>
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
        <input
          type="text"
          value={cardCVC.cvcNumber}
          onChange={(e) => cardCVC.handleCVCNumberChange(e.target.value)}
        />
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
