import React from 'react';
import './App.css';
import {
  useCVC,
  useCardHolder,
  useExpiryDate,
  usePassword,
  useCardType,
  useCardNumbers,
} from 'cookie-nice-card-hooks';

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
    { first: '쿠키', second: '1234', third: '치코', fourth: '웨디' },
    { isAutoFocus: true },
  );

  const getErrorMessage = () => {
    const errorDetails = Object.values(cardNumbersInfo.validationResult);
    const firstErrorElement = errorDetails.find(value => !value.isValid);
    return firstErrorElement ? firstErrorElement.errorMessage : '';
  };

  return (
    <div>
      <form>
        <fieldset>
          <input
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
          <input
            type="password"
            value={passwordInfo.value}
            onChange={passwordInfo.runValidationInputTypeByChange}
            onBlur={passwordInfo.runValidationFieldRulesByBlur}
            aria-invalid={!passwordInfo.validationResult.isValid}
            maxLength={2}
          />
          {!passwordInfo.validationResult.isValid && (
            <span>{passwordInfo.validationResult.errorMessage}</span>
          )}
        </fieldset>
        <fieldset>
          <input
            type="text"
            value={cardholderInfo.value}
            onChange={cardholderInfo.runValidationInputTypeByChange}
            onBlur={cardholderInfo.runValidationFieldRulesByBlur}
            aria-invalid={!cardholderInfo.validationResult.isValid}
            maxLength={100}
          />
          {!cardholderInfo.validationResult.isValid && (
            <span>{cardholderInfo.validationResult.errorMessage}</span>
          )}
        </fieldset>
        <fieldset>
          <input
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
            <>
              <span>{expiryDate.month.validationResult.errorMessage}</span>
              <span>{expiryDate.year.validationResult.errorMessage}</span>
            </>
          )}
        </fieldset>
        <fieldset>
          <select
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
            <span>{cardTypeInfo.validationResult.errorMessage}</span>
          )}
        </fieldset>
        <fieldset>
          <input
            type="text"
            value={cardNumbersInfo.value.first}
            onChange={event => {
              cardNumbersInfo.runValidationInputTypeByChange(event, 'first');
            }}
            onBlur={event => {
              cardNumbersInfo.runValidationFieldRulesByBlur(event, 'first');
            }}
            aria-invalid={!cardNumbersInfo.validationResult.first}
            maxLength={4}
          />
          <input
            type="text"
            value={cardNumbersInfo.value.second}
            onChange={event => {
              cardNumbersInfo.runValidationInputTypeByChange(event, 'second');
            }}
            onBlur={event => {
              cardNumbersInfo.runValidationFieldRulesByBlur(event, 'second');
            }}
            aria-invalid={!cardNumbersInfo.validationResult.second}
            maxLength={4}
          />
          <input
            type="password"
            value={cardNumbersInfo.value.third}
            onChange={event => {
              cardNumbersInfo.runValidationInputTypeByChange(event, 'third');
            }}
            onBlur={event => {
              cardNumbersInfo.runValidationFieldRulesByBlur(event, 'third');
            }}
            aria-invalid={!cardNumbersInfo.validationResult.third.isValid}
            maxLength={4}
          />
          <input
            type="password"
            value={cardNumbersInfo.value.fourth}
            onChange={event => {
              cardNumbersInfo.runValidationInputTypeByChange(event, 'fourth');
            }}
            onBlur={event => {
              cardNumbersInfo.runValidationFieldRulesByBlur(event, 'fourth');
            }}
            aria-invalid={!cardNumbersInfo.validationResult.fourth.isValid}
            maxLength={4}
          />
          <span>{getErrorMessage()}</span>
        </fieldset>
      </form>
    </div>
  );
}

export default App;
