import { validateFilledValue, validateLength, validateNumber } from '../../utils';

import { CardNumberError, CardNumbersValidationResults, CardNumberValidationResult } from './useCardNumbers';

/**
 * validateCardNumber 의 결과
 */
interface ValidateCardNumberResult {
  isFilledValue: boolean;
  isNumber: boolean;
  isValidLength: boolean;
}

interface UseCardNumbersValidationProps {
  fieldCount: number;
  cardNumberCounts: number[];
  cardNumbers: (string | undefined)[];
}
/**
 * 카드 번호에 대한 입력 필드의 유효성 검사와 오류 여부를 계산하는 훅
 */
export default function useCardNumbersValidation(props: UseCardNumbersValidationProps): CardNumbersValidationResults {
  const { fieldCount, cardNumberCounts, cardNumbers } = props;

  /**
   * 특정 입력 필드(cardNumbers[index])에 대한 유효성 검사
   * @param index  입력 필드 index
   * @param cardNumbers  모든 입력 필드에 입력된 카드 정보 (값이 없으면 undefined)
   * @param cardNumberCounts  입력 필드당 가져야하는 문자 개수
   * @returns 유효성 검사 결과
   */
  const validateCardNumber = (
    index: number,
    cardNumbers: (string | undefined)[],
    cardNumberCounts: number[],
  ): ValidateCardNumberResult => {
    // 해당 입력 필드의 입력값들
    const cardNumber = cardNumbers[index] || '';
    // 해당 입력 필드에 입력값들이 지켜야하는 length 값
    const length = cardNumberCounts[index];
    // 해당 입력 필드에 대한 유효성 검사
    return {
      isFilledValue: validateFilledValue(cardNumber),
      isNumber: validateNumber(cardNumber),
      isValidLength: validateLength(cardNumber, length),
    };
  };

  /**
   * 입력 필드에 대한 유효성 검사 결과를 이용해 해당 입력 필드에 대한 오류 타입 반환
   * @param  ValidateCardNumberResult
   */
  const getCardNumberError = (validationResult: ValidateCardNumberResult): CardNumberError => {
    const { isFilledValue, isNumber, isValidLength } = validationResult;

    switch (true) {
      case !isFilledValue:
        return 'empty';
      case !isNumber:
        return 'number';
      case !isValidLength:
        return 'length';
      default:
        return null;
    }
  };
  /**
   * 입력 필드의 값(cardNumbers)을  돌면서, 해당 입력 필드에 대한 유효성 검사를 진행
   */
  const createValidation = (): CardNumbersValidationResults => {
    return Array.from({ length: fieldCount }).reduce<CardNumbersValidationResults>((acc, _, index) => {
      const validationResult = validateCardNumber(index, cardNumbers, cardNumberCounts);

      const error = getCardNumberError(validationResult);
      const validation: CardNumberValidationResult = {
        error,
        isValid: error === null,
      };
      acc.push(validation);

      return acc;
    }, []);
  };

  return createValidation();
}
