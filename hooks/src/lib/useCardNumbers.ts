import { useState, ChangeEvent } from 'react';
import useCardNumber from './useCardNumber';
import { CARD_NUMBERS_GROUP_LENGTH } from './contexts';
import { ErrorMessage, UseCardModuleProps } from './types';
import useCardValidationWithKey from './useCardValidationWithKey';

interface CardNumbersValidationErrors {
  empty: string;
  number: string;
  length: string;
}
/**
 * @property {number[]} cardNumberLength : 카드 번호에 대한 하나의 입력란에 들어가는 카드 번호 개수 (ex:4자리 씩 16자린 인 경우 [4,4,4,4], 15자인 경우 [4,3,4,4])
 */
interface CardNumberValidations {
  cardNumberLength: number[];
}

type UserCardNumbersProps = UseCardModuleProps<CardNumbersValidationErrors, CardNumberValidations>;

export default function useCardNumbers(props: UserCardNumbersProps) {
  const [numbers, setNumbers] = useState(Array.from({ length: CARD_NUMBERS_GROUP_LENGTH }, () => ''));
  const [error, setError] = useState(Array.from({ length: CARD_NUMBERS_GROUP_LENGTH }, () => false));
  const [errorMessage, setErrorMessage] = useState<ErrorMessage>(null);

  const { changeEventValidators, blurEventValidators, totalValidators } = useCardNumber(props);

  const getNewNumbers = (value: string, index: number) => {
    const newNumbers = [...numbers];
    newNumbers[index] = value;

    return newNumbers;
  };

  const { handleValidationChange, handleValidationBlur, handleUpdateValue } = useCardValidationWithKey<string, number>({
    blurEventValidators,
    changeEventValidators,
    totalValidators,
    applyNewValue: (value, key) => {
      const newNumbers = getNewNumbers(value, key);
      setNumbers(newNumbers);
    },
    applyNewError: (isValid, key) => {
      const newError = [...error];
      newError[key] = isValid;
      setError(newError);
    },
    setErrorMessage,
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>, index: number) => {
    handleValidationChange(e.target.value, index);
  };
  const handleBlur = (e: ChangeEvent<HTMLInputElement>, index: number) => {
    handleValidationBlur(e.target.value, index);
  };

  const updateValue = (value: string, index: number) => {
    handleUpdateValue(value, index);
  };

  return { numbers, handleChange, handleBlur, updateValue, errorMessage, error };
}
