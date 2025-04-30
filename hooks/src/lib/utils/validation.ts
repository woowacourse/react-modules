export const isNumber = (value: string) => {
  const error = !/^[0-9]*$/.test(value);

  if (error) return { error, message: '숫자만 입력 가능합니다.' };
  return { error, message: '' };
};

export const isExpirationDate = (type: 'month' | 'year', value: string) => {
  const isNumberError = isNumber(value);
  if (isNumberError.error) return isNumberError;

  if (type === 'month') {
    const month = parseInt(value, 10);
    if (month < 1 || month > 12) {
      return { error: true, message: '유효하지 않은 월입니다.' };
    }
  } else if (type === 'year') {
    const year = parseInt(value, 10);
    const currentYear = new Date().getFullYear() % 100;
    if (year < currentYear) {
      return { error: true, message: '유효하지 않은 연도입니다.' };
    }
  }

  return { error: false, message: '' };
};
