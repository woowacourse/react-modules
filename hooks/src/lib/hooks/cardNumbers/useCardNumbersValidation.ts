import useCardNumber, { UseCardNumberValidation } from './useCardNumber';
import { CardNumberError, CardNumbersValidationResult, CardNumberValidation } from './useCardNumbers';

interface UseCardNumbersValidationProps {
  fieldCount: number;
  cardNumberCounts: number[];
  cardNumbers: (string | undefined)[];
}
/**
 * 카드 번호에 대한 입력 필드의 유효성 검사와 오류 여부를 계산하는 훅
 */
export default function useCardNumbersValidation(props: UseCardNumbersValidationProps): CardNumbersValidationResult {
  const { fieldCount, cardNumberCounts, cardNumbers } = props;
  /**
   * 특정 입력 필드(cardNumbers[index])에 대한 유효성 검사
   * @param index  입력 필드 index
   * @param cardNumbers  모든 입력 필드에 입력된 카드 정보 (값이 없으면 undefined)
   * @param cardNumberCounts  입력 필드당 가져야하는 문자 개수
   * @returns 유효성 검사 결과
   */
  const getCardNumberValidation = (
    index: number,
    cardNumbers: (string | undefined)[],
    cardNumberCounts: number[],
  ): ReturnType<typeof useCardNumber> => {
    const key = `field${index + 1}`;
    // 해당 입력 필드의 입력값들
    const cardNumber = cardNumbers[index] || '';
    // 해당 입력 필드에 입력값들이 지켜야하는 length 값
    const length = cardNumberCounts[index];
    // 해당 입력 필드에 대한 유효성 검사
    return useCardNumber({
      number: cardNumber,
      length,
      key,
    });
  };

  /**
   * 입력 필드에 대한 유효성 검사 결과를 이용해 해당 입력 필드에 대한 오류 타입 반환
   * @param cardNumberValidation
   */
  const getCardNumberError = (cardNumberValidation: UseCardNumberValidation): CardNumberError => {
    const { isFilledValue, isNumber, isValidLength } = cardNumberValidation;

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
  const createValidation = (): CardNumbersValidationResult => {
    return Array.from({ length: fieldCount }).reduce<CardNumbersValidationResult>((acc, _, index) => {
      const { validation: cardNumberValidation } = getCardNumberValidation(index, cardNumbers, cardNumberCounts);

      const error = getCardNumberError(cardNumberValidation);
      const validation: CardNumberValidation = {
        error,
        isValid: error === null,
      };
      acc.push(validation);

      return acc;
    }, []);
  };

  return createValidation();
}
