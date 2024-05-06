import useCardArrayValidate from '../useCardArrayValidate/useCardArrayValidate';

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
    if (values.join('').length !== maxLength * initValue.length) {
      return {
        isValid: false,
        errorMessage: `카드번호는 ${maxLength * initValue.length}글자로 입력해 주세요.`,
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
