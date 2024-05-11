import useInputValidate from '../useInputValidate/useInputValidate';
const useCardExpirationDate = (initValue: string, maxLength: number = 4) => {
  const getPureNumbers = (value: string) => value.replace(/\//g, '');

  const validateOnChange = (newValue: string) => {
    if (getPureNumbers(newValue).length > maxLength) {
      return {
        isValid: false,
        errorMessage: `각 유효기간은 ${maxLength}글자 까지만 입력이 가능해요.`,
      };
    }
    if (!/^\d*$/.test(getPureNumbers(newValue))) {
      return {
        isValid: false,
        errorMessage: '유효기간은 숫자만 입력이 가능해요.',
      };
    }
    return { isValid: true, errorMessage: '' };
  };

  const validateOnBlur = (value: string) => {
    const nowDate = new Date();
    const year = nowDate.getFullYear().toString().slice(2, 4);
    const month = (nowDate.getMonth() + 1).toString().padStart(2, '0');
    const now = Number(year + month);
    const expireDate = Number(value.slice(3, 5) + value.slice(0, 2));

    if (getPureNumbers(value).length !== maxLength) {
      return {
        isValid: false,
        errorMessage: `유효기간은 (MM/YY) 형식의 ${maxLength}글자로 입력해 주세요.`,
      };
    }
    if (!/^$|(0[1-9]|1[0-2])/.test(value)) {
      return {
        isValid: false,
        errorMessage: '유효기간 월은 01~12 사이만 입력이 가능해요',
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

  const formatValue = (value: string) => {
    const numberValue = getPureNumbers(value);
    return numberValue.replace(/^(\d{1,2})/g, '$1/').replace(/\/+$/, '');
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
    formatValue,
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
export default useCardExpirationDate;
