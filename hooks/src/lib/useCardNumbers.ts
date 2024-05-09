import { CustomValidator } from './types';
import useInputs from './useInputs';
import { useEffect } from 'react';

type CardBrand = 'Diners' | 'AMEX' | 'UnionPay' | 'VISA' | 'MasterCard';

const validateInputType = (value: string) => {
  const isNumber = !Number.isNaN(Number(value));

  if (!isNumber) {
    return { isValid: false, errorMessage: '숫자를 입력해주세요' };
  }

  return { isValid: true, errorMessage: '' };
};

const validateFieldRules = (value: string) => {
  const isValidLength = value.length === 0 || value.length === 4;

  if (!isValidLength) {
    return { isValid: false, errorMessage: '카드번호는 4자리로만 입력해주세요' };
  }

  return { isValid: true, errorMessage: '' };
};

export interface CardNumbersOptions extends CustomValidator {
  isAutoFocus?: boolean;
}

const useCardNumbers = (initialValue: Record<string, string>, options?: CardNumbersOptions) => {
  const { isAutoFocus, customValidateInputType, customValidateFieldRules } = options ?? {};

  const {
    value,
    setValue,
    validationResult,
    isValidValue,
    handleValidationResult,
    clearInvalidInitialValues,
  } = useInputs(initialValue, {
    validateInputType: customValidateInputType ?? validateInputType,
    validateFieldRules: customValidateFieldRules ?? validateFieldRules,
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>, name: string) => {
    if (!isValidValue(event.target.value, name, 'inputType')) return;

    setValue(prev => ({
      ...prev,
      [name]: event.target.value,
    }));

    if (event.target.value.length === event.target.maxLength) {
      focusNextInputWhenMaxLength(event, isAutoFocus ?? false, name);
    }
  };

  const CardValidateFieldRules = (value: string, parentElement: HTMLElement | null) => {
    if (cardTypeCondition.Diners) {
      const secondLength = (parentElement?.childNodes[1] as HTMLInputElement).value.length;
      const thirdLength = (parentElement?.childNodes[2] as HTMLInputElement).value.length;
      const isValidSecondLength = secondLength === 0 || secondLength === 6;
      const isValidThirdLength = thirdLength === 0 || thirdLength === 4;

      if (!isValidSecondLength || !isValidThirdLength) {
        return { isValid: false, errorMessage: '유효한 카드번호를 입력해주세요' };
      } else {
        return { isValid: true, errorMessage: '' };
      }
    }

    if (cardTypeCondition.AMEX) {
      const secondLength = (parentElement?.childNodes[1] as HTMLInputElement).value.length;
      const thirdLength = (parentElement?.childNodes[2] as HTMLInputElement).value.length;
      const isValidSecondLength = secondLength === 0 || secondLength === 6;
      const isValidThirdLength = thirdLength === 0 || thirdLength === 5;

      if (!isValidSecondLength || !isValidThirdLength) {
        return { isValid: false, errorMessage: '유효한 카드번호를 입력해주세요' };
      } else {
        return { isValid: true, errorMessage: '' };
      }
    }

    return validateFieldRules(value);
  };

  const focusNextInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const target = event.target.nextElementSibling;
    if (target instanceof HTMLInputElement) target.focus();
  };

  const focusNextInputWhenMaxLength = (
    event: React.ChangeEvent<HTMLInputElement>,
    isAutoFocus: boolean,
    name: string,
  ) => {
    const validationResult = CardValidateFieldRules(event.target.value, event.target.parentElement);
    handleValidationResult(name, validationResult);
    if (!validationResult.isValid) return;
    if (isAutoFocus) focusNextInput(event);
  };

  const handleBlur = (event: React.FocusEvent<HTMLInputElement, Element>, name: string) => {
    const validationResult = CardValidateFieldRules(event.target.value, event.target.parentElement);
    handleValidationResult(name, validationResult);
  };

  useEffect(() => {
    clearInvalidInitialValues(
      initialValue,
      (value: string) =>
        `cardNumbers field error: ${value} 라는 올바르지 않은 값이 들어와 빈 값으로 초기화했습니다.`,
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const cardNumbersToArray = Array.from(Object.values(value));

  const cardTypeCondition: Record<CardBrand, boolean> = {
    Diners: cardNumbersToArray[0].startsWith('36'),
    AMEX: cardNumbersToArray[0].startsWith('34') || cardNumbersToArray[0].startsWith('37'),
    UnionPay:
      (Number(cardNumbersToArray.join().replace(',', '').slice(0, 6)) >= 622126 &&
        Number(cardNumbersToArray.join().replace(',', '').slice(0, 6)) <= 622925) ||
      (Number(cardNumbersToArray[0].slice(0, 3)) >= 624 &&
        Number(cardNumbersToArray[0].slice(0, 3)) <= 626) ||
      (Number(cardNumbersToArray[0]) >= 6282 && Number(cardNumbersToArray[0]) <= 6286),
    VISA: cardNumbersToArray[0].startsWith('4'),
    MasterCard:
      Number(cardNumbersToArray[0].slice(0, 2)) >= 51 &&
      Number(cardNumbersToArray[0].slice(0, 2)) <= 55,
  };

  const maxLengthByCardBrand: Record<CardBrand, number[]> = {
    Diners: [4, 6, 4],
    AMEX: [4, 6, 5],
    UnionPay: [4, 4, 4, 4],
    VISA: [4, 4, 4, 4],
    MasterCard: [4, 4, 4, 4],
  };

  const getCardBrand = () => {
    return (Object.keys(cardTypeCondition) as CardBrand[]).find(
      key => cardTypeCondition[key] === true,
    );
  };

  const getInputMaxLengthByCardBrand = () => {
    const cardBrand = getCardBrand();
    if (cardBrand === undefined) return [4, 4, 4, 4];

    return maxLengthByCardBrand[cardBrand];
  };

  return {
    value,
    getCardBrand,
    getInputMaxLengthByCardBrand,
    runValidationInputTypeByChange: handleChange,
    runValidationFieldRulesByBlur: handleBlur,
    validationResult,
  };
};

export default useCardNumbers;
