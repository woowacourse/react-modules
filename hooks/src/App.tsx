import React from 'react';
import './App.css';
import {
  useCVC,
  useCardHolder,
  useExpiryDate,
  usePassword,
  useCardType,
  useCardNumbers,
} from './lib';

function App() {
  const cvcInfo = useCVC('111');
  const passwordInfo = usePassword('22');
  const cardholderInfo = useCardHolder('marucookie');
  const expiryDate = useExpiryDate({ month: '01', year: '' }, { month: { isAutoFocus: true } });
  const cardTypeInfo = useCardType({
    initialValue: '카드사를 입력해주세요',
    options: ['BC', 'KB', '하나', '우리'],
    placeholder: '카드사를 입력해주세요',
  });

  const cardNumbersInfo = useCardNumbers({ first: '1234' });

  const getErrorMessage = () => {
    const errorDetails = Object.values(cardNumbersInfo.errorInfo);
    const firstErrorElement = errorDetails.find(value => !value.isValid);
    return firstErrorElement ? firstErrorElement.errorMessage : '';
  };

  return (
    <div>
      <form>
        <div>
          {cardNumbersInfo.cardBrand && <span>카드 브랜드 : {cardNumbersInfo.cardBrand}</span>}
          {cardNumbersInfo.formattedCardNumber.length > 0 && (
            <div>
              <div>포맷팅 제공 : {cardNumbersInfo.formattedCardNumber}</div>
              <div>포맷팅 커스텀 : {cardNumbersInfo.formattedCardNumberList.join('%')}</div>
            </div>
          )}
        </div>
        <fieldset>
          <span>cvc : </span>
          <input
            type="text"
            value={cvcInfo.value}
            onChange={cvcInfo.handleChange}
            onBlur={cvcInfo.handleBlur}
            aria-invalid={!cvcInfo.errorInfo.isValid}
            maxLength={4}
          />
          {!cvcInfo.errorInfo.isValid && <span>{cvcInfo.errorInfo.errorMessage}</span>}
        </fieldset>
        <fieldset>
          <span>비밀번호 : </span>
          <input
            type="password"
            value={passwordInfo.value}
            onChange={passwordInfo.handleChange}
            onBlur={passwordInfo.handleBlur}
            aria-invalid={!passwordInfo.errorInfo.isValid}
            maxLength={2}
          />
          {!passwordInfo.errorInfo.isValid && <span>{passwordInfo.errorInfo.errorMessage}</span>}
        </fieldset>
        <fieldset>
          <span>카드 소유자 : </span>
          <input
            type="text"
            value={cardholderInfo.value}
            onChange={cardholderInfo.handleChange}
            onBlur={cardholderInfo.handleBlur}
            aria-invalid={!cardholderInfo.errorInfo.isValid}
            maxLength={100}
          />
          {!cardholderInfo.errorInfo.isValid && (
            <span>{cardholderInfo.errorInfo.errorMessage}</span>
          )}
        </fieldset>
        <fieldset>
          <span>유효기간 : </span>
          <input
            type="text"
            value={expiryDate.month.value}
            onChange={expiryDate.month.handleChange}
            onBlur={expiryDate.month.handleBlur}
            aria-invalid={!expiryDate.month.errorInfo.isValid}
            maxLength={2}
          />
          <input
            type="text"
            value={expiryDate.year.value}
            onChange={expiryDate.year.handleChange}
            onBlur={expiryDate.year.handleBlur}
            aria-invalid={!expiryDate.year.errorInfo.isValid}
            maxLength={2}
          />
          <div>
            {!expiryDate.month.errorInfo.isValid && (
              <span>{expiryDate.month.errorInfo.errorMessage}</span>
            )}
          </div>
          <div>
            {!expiryDate.year.errorInfo.isValid && (
              <span>{expiryDate.year.errorInfo.errorMessage}</span>
            )}
          </div>
        </fieldset>
        <fieldset>
          <span>카드사 : </span>
          <select
            aria-invalid={!cardTypeInfo.errorInfo.isValid}
            onChange={cardTypeInfo.handleChange}
            value={cardTypeInfo.value}
          >
            <option value={'카드사를 입력해주세요'} disabled hidden>
              카드사를 입력해주세요
            </option>
            <option value={'BC'}>BC</option>
            <option value={'KB'}>KB</option>
            <option value={'하나'}>하나</option>
            <option value={'우리'}>우리</option>
            <option value={'asd'}>오류</option>
          </select>
          {!cardTypeInfo.errorInfo.isValid && <span>{cardTypeInfo.errorInfo.errorMessage}</span>}
        </fieldset>
        <fieldset>
          <span>카드 번호 : </span>
          <input
            type="text"
            value={cardNumbersInfo.value.first}
            onChange={event => {
              cardNumbersInfo.handleChange(event, 'first');
            }}
            onBlur={event => {
              cardNumbersInfo.handleBlur(event, 'first');
            }}
            aria-invalid={!cardNumbersInfo.errorInfo.first.isValid}
            maxLength={cardNumbersInfo.validMaxLength}
          />
          <span>{getErrorMessage()}</span>
        </fieldset>
      </form>
    </div>
  );
}

export default App;
