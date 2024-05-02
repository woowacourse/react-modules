import useCardValidate from './useCardValidate';

const useCardHolderName = (initValue: string, maxLength: number = 50) => {
  const validateOnChange = (newValue: string) => {
    if (newValue.length > maxLength) {
      return {
        isValid: false,
        errorMessage: `이름은 ${maxLength}글자 까지만 입력이 가능해요.`,
      };
    }
    if (!/^\[a-zA-Z]*$/.test(newValue)) {
      return {
        isValid: false,
        errorMessage: '이름은 영어만 입력이 가능해요.',
      };
    }
    return { isValid: true, errorMessage: '' };
  };

  const validateOnBlur = () => {
    return { isValid: true, errorMessage: '' };
  };

  const {
    value,
    errorMessage,
    isCompleted,
    onChangeHandler,
    onFocusHandler,
    onBlurHandler,
  } = useCardValidate({
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
export default useCardHolderName;
