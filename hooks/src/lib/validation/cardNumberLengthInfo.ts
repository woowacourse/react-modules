export const validateCardInput = (value: string, validLength: number) => {
  const trimmedValue = value?.replace(/\s/g, '');

  if (/^[0-9]+$/.test(trimmedValue) === false) {
    return {
      isValid: false,
      errorMessage: `숫자(0~9)만 입력 가능합니다.`,
    };
  }

  if (trimmedValue.length !== validLength) {
    return {
      isValid: false,
      errorMessage: `숫자 ${validLength}자리를 정확히 입력해주세요.`,
    };
  }

  return {
    isValid: true,
    errorMessage: '',
  };
};
