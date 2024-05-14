import React, { useState } from 'react';
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
  const cardNumbers = useCardNumber();
  const cardCompany = useCardCompany(['신한카드', '롯데카드', 'BC카드']);
  const cardOwnerName = useCardOwnerName();
  const cardOwnerName2 = useCardOwnerName();
  const cardCVC = useCardCVC();
  const cardPassword = useCardPassword();
  const expirationDate = useCardExpirationDate();

  const [isPressedKey, setIsPressedKey] = useState(false);
  const [prevCursor, setPrevCursor] = useState(0); // 이전 커서 위치 저장

  return (
    <>
      <h1>Hooks Modules(테스트용)</h1>
      <div>
        <h3>useCardNumber</h3>
        <input
          type='text'
          value={cardNumbers.cardNumber}
          onChange={(e) => {
            cardNumbers.handleCardNumberChange(e.target.value);

            const cursor = e.target.selectionStart;
            const el = e.target;

            // 카드번호 포매팅(공백으로 구분)으로 인한 커서 위치 동적 수정 로직
            window.requestAnimationFrame(() => {
              if (cursor === null) return;
              if (prevCursor > cursor) {
                // 지우는 경우
                el.selectionStart = cursor;
                el.selectionEnd = cursor;
              } else if (e.target.value.length - 1 > cursor) {
                // 1을 지우는 이유는 1개의 공백으로 카드번호가 포매팅되는 것 때문
                // 중간을 채우는 경우(예시. 카드 번호 중간이 틀려서 이를 수정하는 경우)
                el.selectionStart = cursor;
                el.selectionEnd = cursor;
              } else {
                // 채우는 경우
                el.selectionStart = cursor + 1;
                el.selectionEnd = cursor + 1;
              }

              setPrevCursor(cursor);
            });
          }}></input>

        <div>
          <p>{cardNumbers.cardType}</p>
          <p>{`${cardNumbers.isValidCardNumber}`}</p>
          <p>{cardNumbers.cardNumberErrorMessage}</p>
        </div>

        <h3>useCardCompany</h3>
        <select onChange={(e) => cardCompany.handleCardCompanyChange(e.target.value)}>
          <option selected={cardCompany.cardCompany === ''} value=''>
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
          type='text'
          value={cardOwnerName.ownerName}
          onChange={(e) => {
            cardOwnerName.handleOwnerNameChange(e.target.value);
          }}
          onKeyDown={(e) => {
            cardOwnerName.handleOwnerNameChange(e.currentTarget.value);
          }}
        />
        <div>
          <p>{cardOwnerName.isValidOwnerName ? 'true' : 'false'}</p>
          <p>{cardOwnerName.ownerNameErrorMessage}</p>
        </div>

        <h3>useCardOwnerName(with enter key)</h3>
        <input
          type='text'
          value={cardOwnerName2.ownerName}
          onChange={(e) => {
            cardOwnerName2.handleOwnerNameChange(e.target.value);
          }}
          onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {
            if (e.key === 'Enter') setIsPressedKey(true);
            else {
              cardOwnerName2.handleOwnerNameChange(e.currentTarget.value);
              setIsPressedKey(false);
            }
          }}
        />
        <div>
          <p>{cardOwnerName2.isValidOwnerName && isPressedKey ? 'true' : 'false'}</p>
          <p>{cardOwnerName2.ownerNameErrorMessage}</p>
        </div>

        <h3>useCardCVC</h3>
        <input type='text' value={cardCVC.cvcNumber} onChange={(e) => cardCVC.handleCVCNumberChange(e.target.value)} />
        <div>
          <p>{cardCVC.isValidCVCNumber ? 'true' : 'false'}</p>
          <p>{cardCVC.cvcNumberErrorMessage}</p>
        </div>

        <h3>useCardPassword</h3>
        <input
          type='text'
          value={cardPassword.password}
          onChange={(e) => cardPassword.handlePasswordChange(e.target.value)}
        />
        <div>
          <p>{cardPassword.isValidPassword ? 'true' : 'false'}</p>
          <p>{cardPassword.passwordErrorMessage}</p>
        </div>

        <h3>useCardExpirationDate</h3>
        <input
          type='text'
          value={expirationDate.month}
          onChange={(e) => expirationDate.handleMonthChange(e.target.value)}
        />
        <input
          type='text'
          value={expirationDate.year}
          onChange={(e) => expirationDate.handleYearChange(e.target.value)}
        />
        <div>
          <span>{expirationDate.isValidMonth ? 'true' : 'false'} </span>
          <span>{expirationDate.isValidYear ? 'true' : 'false'}</span>
          <p className='m'>month: {expirationDate.monthErrorMessage}</p>
          <p className='y'>year: {expirationDate.yearErrorMessage}</p>
        </div>
      </div>
    </>
  );
}

export default App;
