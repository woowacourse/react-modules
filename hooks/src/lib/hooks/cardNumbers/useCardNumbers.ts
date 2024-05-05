import { INVALID_INPUT_VALUE } from '../../constants';
import { UseCardModuleReturn } from '../../types';
import { sliceText } from '../../utils';

import useCardNumbersValidation from './useCardNumbersValidation';
import useCardNumbersValidationErrorMessage from './useCardNumbersValidationErrorMessage';

export type CardNumbersType = (string | undefined)[];
/**
 * useCardNumbers props인 errorMessage 타입
 */
export interface UseCardNumbersErrorMessage {
  empty: string;
  number: string;
  length: string;
}
export interface UseCardNumbersProps {
  fieldCount: number;
  cardNumberCounts: number[];
  cardNumbers: CardNumbersType;
  errorMessages: UseCardNumbersErrorMessage;
  isNeedValidValue: boolean;
}

export type CardNumberError = 'empty' | 'number' | 'length' | null;

/**
 * 카드 번호 입력 필드 하나에 대한 유효성 검사 결과
 */
export interface CardNumberValidationResult {
  error: CardNumberError;
  isValid: boolean;
}
/**
 * 모든 카드 번호 입력 필드에 대한 유효성 검사 결과
 */
export type CardNumbersValidationResults = CardNumberValidationResult[];
/**
 * useCardNumbers 가 반환하는 validationResultErrorMessage의 타입,모든 카드 번호 입력 필드의 오류 메세지가 배열로 담김
 */
export type CardNumberValidationResultErrorMessage = (string | null)[];

export type UseCardNumbersReturn = UseCardModuleReturn<
  CardNumberValidationResultErrorMessage,
  CardNumbersValidationResults,
  CardNumbersType
>;

export default function useCardNumbers(props: UseCardNumbersProps): UseCardNumbersReturn {
  const { fieldCount, cardNumberCounts, cardNumbers, errorMessages, isNeedValidValue } = props;

  const validationResult = useCardNumbersValidation({ fieldCount, cardNumberCounts, cardNumbers });
  const validationErrorMessage = useCardNumbersValidationErrorMessage({ validationResult, errorMessages });

  /**
   * length외의 오류 인지를 확인하는 함수
   */
  const isNoneLengthError = (error: CardNumberError) => error && error !== 'length';

  const getFormattedValue = () => {
    //cardNumberCounts에 맞추어서 cardNumbers의 글자를 자름
    const slicedCardNumbers = cardNumbers.map((numbers, index) =>
      numbers ? sliceText(numbers, cardNumberCounts[index]) : numbers,
    );
    if (!isNeedValidValue) return slicedCardNumbers;

    return Object.values(validationResult).map((value, index) =>
      isNoneLengthError(value.error) ? INVALID_INPUT_VALUE : slicedCardNumbers[index],
    );
  };

  return {
    validationErrorMessage,
    validationResult,
    formattedValue: getFormattedValue(),
  };
}
