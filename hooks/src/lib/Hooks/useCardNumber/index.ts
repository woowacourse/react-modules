import { useState } from 'react';
import { validateNumericString } from '../../utils/validation';
import checkNoError from '../../utils/checkNoError';
import {
  ErrorMessageType,
  CurriedInputChangeHandler,
  ValidateFuncReturnType,
  SingleErrorType,
  CarNumberHookReturnType,
} from '../../types';
import { CARD_BRANDS } from '../../constants';
import { formatCardNumber } from '../../utils/formatCardNumber';
import { identifyCardNumber } from '../../utils/identifyCardBrand';

const useCardNumber = (): CarNumberHookReturnType => {
  const [inputStates, setInputStates] = useState('');

  const validateCardNumber = (
    value: string,
    maxLength: number
  ): ValidateFuncReturnType => {
    if (value === '') return { error: false, message: '' };

    const numberCheck = validateNumericString(value);
    if (numberCheck.error) return numberCheck;

    const lengthCheck = value.length < maxLength;
    if (lengthCheck) {
      return {
        error: true,
        message: `${maxLength}자리의 숫자를 입력해주세요.`,
      };
    }

    return { error: false, message: '' };
  };

  const { cardBrand, maxLength } = identifyCardNumber(inputStates);

  const {
    error,
    message,
  }: { error: SingleErrorType; message: ErrorMessageType | string } =
    validateCardNumber(inputStates, maxLength); //inputState 바뀌면 자동 계산

  const onChange: CurriedInputChangeHandler = () => (e) => {
    const value = e.target.value;
    const digitsOnly = value.replace(/\D/g, '');

    // 최신 입력 기반으로 다시 카드 브랜드 식별
    const { maxLength: latestMaxLength } = identifyCardNumber(digitsOnly);
    const sliced = digitsOnly.slice(0, latestMaxLength);

    setInputStates(sliced);
  };

  const noError = checkNoError(error);

  const brandInfo = CARD_BRANDS.find((b) => b.name === cardBrand);
  const formattedValue = brandInfo
    ? formatCardNumber(inputStates, brandInfo.format)
    : inputStates;

  return {
    inputStates,
    errorMessage: message,
    onChange,
    noError,
    cardBrand,
    formattedValue,
    format: brandInfo?.format ?? [4, 4, 4, 4],
  };
};

export default useCardNumber;
