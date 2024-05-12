import { useEffect } from 'react';
import { validateCardNumberFormat, validateNumber } from '../validator';
import { Options } from '../type';
import useValidations from '../useValidations';
import useCardNumbersState from './useCardNumbersState';
import useCardBrand from './useCardBrand';
import { validateCardNumberLength } from '../validator/validateCardBrand';
import { cardBrandChecker } from '../constants';
import { formatCardNumber, formatCardNumberToString } from '../utils';

const useCardNumbers = (initialValue: Record<string, string>, options?: Options) => {
  const { value, updateCardNumbers } = useCardNumbersState(initialValue);
  const { errorInfo, updateValidationResult, checkValidInputs } = useValidations(initialValue);
  const { cardBrand, determineCardBrand, validMaxLength } = useCardBrand();

  const fullCardNumber = Object.values(value).reduce((acc, cur) => acc + cur);
  const cardNumberFormat = cardBrandChecker[cardBrand]
    ? cardBrandChecker[cardBrand].format
    : [4, 4, 4, 4];
  const formattedCardNumberList = formatCardNumber(fullCardNumber, cardNumberFormat);
  const formattedCardNumber = formatCardNumberToString(formattedCardNumberList, cardNumberFormat);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>, name: string) => {
    const targetValue = event.target.value;
    const validCardBrand = determineCardBrand(targetValue);
    const cardBrandInfo = cardBrandChecker[validCardBrand];
    const validLength = cardBrandInfo ? cardBrandInfo.validMaxLength : 16;

    if (targetValue.length > validLength) {
      updateCardNumbers(targetValue.substring(0, validLength), name);
      return;
    }
    if (!checkValidInputs(targetValue, name, validateNumber)) return;
    updateCardNumbers(targetValue, name);

    if (options?.isAutoFocus) {
      autoFocusNextInput(event.target);
    }
  };

  const handleBlur = (event: React.FocusEvent<HTMLInputElement, Element>, name: string) => {
    const cardBrandInfo = cardBrandChecker[cardBrand];

    const validationResult = validateCardNumberLength(cardBrandInfo);
    if (event.target.value.length < validMaxLength) {
      updateValidationResult(validationResult, name);
    }
  };

  const autoFocusNextInput = (element: HTMLElement) => {
    const target = element.nextElementSibling;
    if (target instanceof HTMLInputElement) target.focus();
  };

  useEffect(() => {
    const initialValues = Object.entries(initialValue);
    for (const [key, value] of initialValues) {
      if (!validateNumber(value).isValid || !validateCardNumberFormat(value).isValid) {
        console.error(
          `cardNumbers field error: ${initialValue} 라는 올바르지 않은 값이 들어와 빈 값으로 초기화했습니다.`,
        );
        updateCardNumbers('', key);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    value,
    handleChange,
    handleBlur,
    errorInfo,
    cardBrand,
    formattedCardNumberList,
    formattedCardNumber,
    validMaxLength,
  };
};

export default useCardNumbers;
