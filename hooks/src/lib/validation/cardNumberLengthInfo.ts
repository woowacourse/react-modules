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
      errorMessage: `${validLength}보다 작을 수 없습니다.`,
    };
  }

  return {
    isValid: true,
    errorMessage: '',
  };
};
