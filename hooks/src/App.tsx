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
  const cardholderInfo = useCardHolder('maru cookie');
  const expiryDate = useExpiryDate({ month: '01', year: '24' }, { month: { isAutoFocus: true } });
  const cardTypeInfo = useCardType({
    initialValue: '카드사를 입력해주세요',
    options: ['BC', 'KB', '하나', '우리'],
    placeholder: '카드사를 입력해주세요',
  });
  const cardNumbersInfo = useCardNumbers(
    { first: '', second: '', third: '', fourth: '' },
    { isAutoFocus: true },
  );

  const getErrorMessage = () => {
    const errorDetails = Object.values(cardNumbersInfo.validationResult);
    const firstErrorElement = errorDetails.find(value => !value.isValid);
    return firstErrorElement ? firstErrorElement.errorMessage : '';
  };

  const indexByKey = {
    0: 'first',
    1: 'second',
    2: 'third',
    3: 'fourth',
  };

  return (
    <div>
      <form>
        <fieldset>
          <legend>cvc</legend>
          <input
            id="cvc"
            type="text"
            value={cvcInfo.value}
            onChange={cvcInfo.runValidationInputTypeByChange}
            onBlur={cvcInfo.runValidationFieldRulesByBlur}
            aria-invalid={!cvcInfo.validationResult.isValid}
            maxLength={4}
          />
          {!cvcInfo.validationResult.isValid && (
            <span>{cvcInfo.validationResult.errorMessage}</span>
          )}
        </fieldset>
        <fieldset>
          <legend>password</legend>
          <input
            id="password"
            type="password"
            value={passwordInfo.value}
            onChange={passwordInfo.runValidationInputTypeByChange}
            onBlur={passwordInfo.runValidationFieldRulesByBlur}
            aria-invalid={!passwordInfo.validationResult.isValid}
            maxLength={2}
          />
          {!passwordInfo.validationResult.isValid && (
            <div>{passwordInfo.validationResult.errorMessage}</div>
          )}
        </fieldset>
        <fieldset>
          <legend>cardHolder</legend>
          <input
            id="cardHolder"
            type="text"
            value={cardholderInfo.value}
            onChange={cardholderInfo.runValidationInputTypeByChange}
            onBlur={cardholderInfo.runValidationFieldRulesByBlur}
            aria-invalid={!cardholderInfo.validationResult.isValid}
            maxLength={100}
          />
          {!cardholderInfo.validationResult.isValid && (
            <div>{cardholderInfo.validationResult.errorMessage}</div>
          )}
        </fieldset>
        <fieldset>
          <legend>expiryDate</legend>
          <input
            id="expiryDate"
            type="text"
            value={expiryDate.month.value}
            onChange={expiryDate.month.runValidationInputTypeByChange}
            onBlur={expiryDate.month.runValidationFieldRulesByBlur}
            aria-invalid={!expiryDate.month.validationResult.isValid}
            maxLength={2}
          />
          <input
            type="text"
            value={expiryDate.year.value}
            onChange={expiryDate.year.runValidationInputTypeByChange}
            onBlur={expiryDate.year.runValidationFieldRulesByBlur}
            aria-invalid={!expiryDate.year.validationResult.isValid}
            maxLength={2}
          />
          {(!expiryDate.year.validationResult.isValid ||
            !expiryDate.month.validationResult.isValid) && (
            <div>
              <span>{expiryDate.month.validationResult.errorMessage}</span>
              <span>{expiryDate.year.validationResult.errorMessage}</span>
            </div>
          )}
        </fieldset>
        <fieldset>
          <legend>cardType</legend>
          <select
            id="cardType"
            aria-invalid={!cardTypeInfo.validationResult.isValid}
            onChange={cardTypeInfo.runValidationByChange}
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
          {!cardTypeInfo.validationResult.isValid && (
            <div>{cardTypeInfo.validationResult.errorMessage}</div>
          )}
        </fieldset>
        <fieldset>
          <legend>cardNumbers</legend>
          {Array.from({ length: cardNumbersInfo.getInputMaxLengthByCardBrand().length }).map(
            (_, index) => (
              <input
                key={index}
                type="text"
                value={cardNumbersInfo.value[indexByKey[index]]}
                onChange={event => {
                  cardNumbersInfo.runValidationInputTypeByChange(event, indexByKey[index]);
                }}
                onBlur={event => {
                  cardNumbersInfo.runValidationFieldRulesByBlur(event, indexByKey[index]);
                }}
                aria-invalid={!cardNumbersInfo.validationResult[indexByKey[index]].isValid}
                maxLength={cardNumbersInfo.getInputMaxLengthByCardBrand()[index]}
              />
            ),
          )}
          <div>
            <span>{getErrorMessage()}</span>
            <span>{cardNumbersInfo.getCardBrand()}</span>
          </div>
        </fieldset>
      </form>
    </div>
  );
}

export default App;
