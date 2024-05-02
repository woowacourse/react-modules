import useCardArrayValidate from '../useCardArrayValidate/useCardArrayValidate';

const useCardExpirationDate = (initValue: string[], maxLength: number = 2) => {
  const validateOnChange = (newValue: string, index: number) => {
    if (newValue.length > maxLength) {
      return {
        isValid: false,
        errorMessage: `각 유효기간은 ${maxLength}글자 까지만 입력이 가능해요.`,
      };
    }
    if (!/^\d*$/.test(newValue)) {
      return {
        isValid: false,
        errorMessage: '유효기간은 숫자만 입력이 가능해요.',
      };
    }
    if (index === 0 && !/^$|^(0[1-9]|1[0-2]|0|1)$/.test(newValue))
      return {
        isValid: false,
        errorMessage: '유효기간 월은 01~12 사이만 입력이 가능해요',
      };

    return { isValid: true, errorMessage: '' };
  };

  const validateOnBlur = () => {
    const nowDate = new Date();
    const year = nowDate.getFullYear().toString().slice(2, 4);
    const month = (nowDate.getMonth() + 1).toString().padStart(2, '0');
    const now = Number(year + month);
    const expireDate = Number(value[1] + value[0]);

    if (value.join('').length !== maxLength * initValue.length) {
      return {
        isValid: false,
        errorMessage: `유효기간은 (MM/YY) 형식의 ${maxLength * initValue.length}글자로 입력해 주세요.`,
      };
    }
    if (now - expireDate > 0) {
      return {
        isValid: false,
        errorMessage: `만료된 카드입니다.`,
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
  } = useCardArrayValidate({
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
export default useCardExpirationDate;
