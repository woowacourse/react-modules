const validateCardType = (value: string, options: string[]) => {
  if (typeof value === 'undefined') {
    return { isValid: false, errorMessage: '카드사를 선택해주세요.' };
  }

  if (!options.includes(value)) {
    return { isValid: false, errorMessage: '올바르지 않은 선택입니다.' };
  }

  return { isValid: true, errorMessage: '' };
};

export default validateCardType;
