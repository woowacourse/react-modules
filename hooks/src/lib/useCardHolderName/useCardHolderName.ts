import useInputValidate from '../useInputValidate/useInputValidate';

const useCardHolderName = (initValue: string, maxLength: number = 50) => {
  const validateOnChange = (newValue: string) => {
    if (newValue.length > maxLength) {
      return {
        isValid: false,
        errorMessage: `이름은 ${maxLength}글자 까지만 입력이 가능해요.`,
      };
    }
    if (!/^([a-zA-Z]+ ?)*[a-zA-Z]*$/.test(newValue)) {
      return {
        isValid: false,
        errorMessage:
          '이름은 영어만 입력이 가능해요.(글자 간 공백은 1개까지만 가능합니다.)',
      };
    }
    return { isValid: true, errorMessage: '' };
  };

  const validateOnBlur = () => {
    if (value.length === 0) {
      return {
        isValid: false,
        errorMessage: `이름을 입력해 주세요.`,
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
  } = useInputValidate({
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
