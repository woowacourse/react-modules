export const validateCardInput = (value: string, validLength: number) => {
  if (/^[0-9]+$/.test(value) === false) {
    return {
      isValid: false,
      errorMessage: `숫자(0~9)만 입력 가능합니다.`,
    };
  }

  if (value.length < validLength) {
    return {
      isValid: false,
      errorMessage: `숫자 ${validLength}자리를 입력해주세요.`,
    };
  }

  return {
    isValid: true,
    errorMessage: '',
  };
};
