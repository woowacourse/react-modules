import useCardValidate from './useCardValidate';

const useCardPassword = (initValue: string, maxLength: number = 2) => {
  const validateOnChange = (newValue: string) => {
    if (newValue.length > maxLength) {
      return {
        isValid: false,
        errorMessage: `비밀번호는 ${maxLength}글자 까지만 입력이 가능해요.`,
      };
    }
    if (!/^\d*$/.test(newValue)) {
      return {
        isValid: false,
        errorMessage: '비밀번호는 숫자만 입력이 가능해요.',
      };
    }
    return { isValid: true, errorMessage: '' };
  };

  const validateOnBlur = () => {
    if (value.length !== maxLength) {
      return {
        isValid: false,
        errorMessage: `비밀번호는 ${maxLength}글자로 입력해 주세요.`,
      };
    }
    return { isValid: true, errorMessage: '' };
  };

  const {
    value,
    errorMessage,
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
    onChangeHandler,
    onBlurHandler,
    onFocusHandler,
  };
};
export default useCardPassword;
