import React from 'react';
import { CardNumbersReturn } from './lib';

interface CardNumbersProps {
  cardNumbersInfo: CardNumbersReturn;
}

const CardNumbers = ({ cardNumbersInfo }: CardNumbersProps) => {
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
    <>
      <legend>cardNumbers</legend>
      <div>
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
      </div>

      <div>
        <span>{getErrorMessage()}</span>
        <span>{cardNumbersInfo.getCardBrand()}</span>
      </div>
    </>
  );
};

export default CardNumbers;
