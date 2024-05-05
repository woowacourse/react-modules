const validateExpiryYearFormat = (value: string) => {
  const nowYear = Number(new Date().getFullYear().toString().slice(2));
  const isValidLength = value.length === 0 || value.length === 2;
  const isValidYear = Number(value) >= nowYear;

  if (!isValidLength) {
    return { isValid: false, errorMessage: '년은 2자리로 입력해주세요' };
  }

  if (!isValidYear) {
    return { isValid: false, errorMessage: `유효 기간은 ${nowYear}년 이후로 입력해주세요` };
  }

  return { isValid: true, errorMessage: '' };
};

export default validateExpiryYearFormat;
