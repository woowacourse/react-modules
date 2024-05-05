const validateCVCFormat = (value: string) => {
  const isValidLength = value.length === 0 || value.length === 3 || value.length === 4;

  if (!isValidLength) {
    return { isValid: false, errorMessage: 'cvc는 3자리 또는 4자리로 입력해주세요' };
  }

  return { isValid: true, errorMessage: '' };
};

export default validateCVCFormat;
