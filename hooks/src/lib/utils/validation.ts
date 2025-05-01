export const isNumber = (value: string) => {
  const error = !/^[0-9]*$/.test(value);

  if (error) return { error, message: '숫자만 입력 가능합니다.' };
  return { error, message: '' };
};

export const isExpirationDate = (type: 'month' | 'year', value: string) => {
  const isNumberError = isNumber(value);
  if (isNumberError.error) return isNumberError;

  const num = parseInt(value);
  if (type === 'month' && (num < 1 || num > 12)) {
    return { error: true, message: '유효하지 않은 월입니다.' };
  } else if (type === 'year' && num < new Date().getFullYear() % 100) {
    return { error: true, message: '유효하지 않은 연도입니다.' };
  }

  return { error: false, message: '' };
};
