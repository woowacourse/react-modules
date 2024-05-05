const validatePasswordFormat = (value: string) => {
  const isValidLength = value.length === 0 || value.length === 2;

  if (!isValidLength) {
    return { isValid: false, errorMessage: '비밀번호는 2자리로 입력해주세요' };
  }

  return { isValid: true, errorMessage: '' };
};

export default validatePasswordFormat;
