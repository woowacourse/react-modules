import useInputArrayValidate from '../useInputArrayValidate/useInputArrayValidate';

const useCardNumbers = (initValue: string[], maxLength: number = 4) => {
  const validateOnChange = (newValue: string) => {
    if (newValue.length > maxLength) {
      return {
        isValid: false,
        errorMessage: `카드번호는 ${maxLength}글자 까지만 입력이 가능해요.`,
      };
    }
    if (!/^\d*$/.test(newValue)) {
      return {
        isValid: false,
        errorMessage: '카드번호는 숫자만 입력이 가능해요.',
      };
    }
    return { isValid: true, errorMessage: '' };
  };

  const validateOnBlur = () => {
    if (value.join('').length !== maxLength * initValue.length) {
      return {
        isValid: false,
        errorMessage: `카드번호는 ${maxLength * initValue.length}글자로 입력해 주세요.`,
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
  } = useInputArrayValidate({
    initValue,
    validateOnChange,
    validateOnBlur,
  });

  return {
    value,
    errorMessage,
    isCompleted,
    onChangeHandler,
    onBlurHandler,
    onFocusHandler,
  };
};
export default useCardNumbers;
