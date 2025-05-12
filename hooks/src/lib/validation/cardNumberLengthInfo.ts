export const validateCardInput = (value: string, validLength: number) => {
  if (/^[0-9]+$/.test(value) === false) {
    return {
      errorMessage: `숫자(0~9)만 입력 가능합니다.`,
      isValid: false,
    };
  }

  if (value.length < validLength || value.length > validLength) {
    return {
      errorMessage: `숫자 ${validLength}자리를 입력해주세요.`,
      isValid: false,
    };
  }

  return {
    errorMessage: '',
    isValid: true,
  };
};
