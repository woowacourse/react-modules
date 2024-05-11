import { isOnlyNumber } from '../utils/validateCardInfo';
import { judgeCardBrand } from '../utils/judgeCardBrand';
import splitByLengthList from '../utils/splitByLengthList';
import useValidateInput from '../useValidateInput/useValidateInput';

const useCardNumber = (initValue: string, formattingChar: string = '-') => {
  const validateOnChange = (newValue: string) => {
    const cardBrand = judgeCardBrand(value);
    const maxLength = cardBrand.requiredLength;

    const temp = newValue.split(formattingChar).join('');

    if (temp.length > maxLength) {
      return {
        isValid: false,
        errorMessage: `카드번호는 ${maxLength}글자 까지만 입력이 가능해요.`,
      };
    }
    if (isOnlyNumber(temp)) {
      return {
        isValid: false,
        errorMessage: '카드번호는 숫자만 입력이 가능해요.',
      };
    }
    return { isValid: true, errorMessage: '' };
  };

  const decorator = (newValue: string) => {
    return newValue.split(formattingChar).join('');
  };

  const validateOnBlur = () => {
    const cardBrand = judgeCardBrand(value);
    const maxLength = cardBrand.requiredLength;

    if (value.length !== maxLength) {
      return {
        isValid: false,
        errorMessage: `카드번호는 ${maxLength}글자로 입력해 주세요.`,
      };
    }
    return { isValid: true, errorMessage: '' };
  };

  const {
    value,
    errorMessage,
    isCompleted,
    onChangeHandler,
    onFocusHandler,
    onBlurHandler,
  } = useValidateInput({
    initValue,
    validateOnChange,
    validateOnBlur,
    decorator,
  });

  const formattingValue = splitByLengthList(
    value.split(formattingChar).join(''),
    [...judgeCardBrand(value).formattingRules],
  ).join(formattingChar);

  return {
    value,
    cardBrand: judgeCardBrand(value).name,
    formattingValue,
    errorMessage,
    isCompleted,
    onChangeHandler,
    onBlurHandler,
    onFocusHandler,
  };
};
export default useCardNumber;
