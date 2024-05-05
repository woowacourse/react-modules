import { INVALID_INPUT_VALUE } from '../../constants';
import { UseCardModuleReturn } from '../../types';
import { sliceText } from '../../utils';
import useCardNumbersValidation from './useCardNumbersValidation';
import useCardNumbersValidationErrorMessage from './useCardNumbersValidationErrorMessage';

export type CardNumbersType = (string | undefined)[];

export interface UseCardNumbersProps {
  fieldCount: number;
  cardNumberCounts: number[];
  cardNumbers: CardNumbersType;
  errorMessages: {
    empty: string;
    number: string;
    length: string;
  };
  isNeedValidValue: boolean;
}

export type CardNumberError = 'empty' | 'number' | 'length' | null;

export interface CardNumberValidation {
  error: CardNumberError;
  isValid: boolean;
}

export type CardNumbersValidationResult = CardNumberValidation[];
export type CardNumberValidationErrorMessage = (string | null)[];

export type UseCardNumbersReturn = UseCardModuleReturn<
  CardNumberValidationErrorMessage,
  CardNumbersValidationResult,
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
