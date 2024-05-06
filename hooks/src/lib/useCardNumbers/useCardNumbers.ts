import { isOnlyNumber } from '../utils/validateCardInfo';
import useCardArrayValidate from '../useCardArrayValidate/useCardArrayValidate';

const useCardNumbers = (initValue: string[], maxLength: number = 4) => {
  const validateOnChange = (newValue: string) => {
    if (newValue.length > maxLength) {
      return {
        isValid: false,
        errorMessage: `카드번호는 ${maxLength}글자 까지만 입력이 가능해요.`,
      };
    }
    if (isOnlyNumber(newValue)) {
      return {
        isValid: false,
        errorMessage: '카드번호는 숫자만 입력이 가능해요.',
      };
    }
    return { isValid: true, errorMessage: '' };
  };

  const validateOnBlur = () => {
    const currentValuesLength = values.join('').length;
    const requiredLength = maxLength * initValue.length;

    if (currentValuesLength !== requiredLength) {
      return {
        isValid: false,
        errorMessage: `카드번호는 ${requiredLength}글자로 입력해 주세요.`,
      };
    }
    return { isValid: true, errorMessage: '' };
  };

  const {
    values,
    errorMessage,
    isCompleted,
    onChangeHandler,
    onFocusHandler,
    onBlurHandler,
  } = useCardArrayValidate({
    initValue,
    validateOnChange,
    validateOnBlur,
  });

  return {
    values,
    errorMessage,
    isCompleted,
    onChangeHandler,
    onBlurHandler,
    onFocusHandler,
  };
};
export default useCardNumbers;
