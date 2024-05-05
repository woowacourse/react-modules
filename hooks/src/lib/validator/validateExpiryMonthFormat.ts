const validateExpiryMonthFormat = (value: string) => {
  const isValidLength = value.length === 0 || value.length === 2;
  const isValidMonth = Number(value) >= 1 && Number(value) <= 12;

  if (!isValidLength) {
    return { isValid: false, errorMessage: '월은 2자리로 입력해주세요' };
  }

  if (!isValidMonth) {
    return { isValid: false, errorMessage: '월은 01~12 사이의 수로 입력해주세요' };
  }

  return { isValid: true, errorMessage: '' };
};

export default validateExpiryMonthFormat;
