const validateEnglish = (value: string) => {
  const isEnglish = /^$|^[a-zA-Z ]+$/.test(value);

  if (!isEnglish) {
    return { isValid: false, errorMessage: '소유자명은 영어로만 입력해주세요' };
  }

  return { isValid: true, errorMessage: '' };
};

export default validateEnglish;
