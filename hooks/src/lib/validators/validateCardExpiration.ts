export const validateCardExpiration = (value: string, type: string): string => {
  if (value !== '' && Number.isNaN(Number(value))) {
    return '숫자만 입력 가능합니다.';
  }

  if (value !== '' && value.length != 2) {
    return '숫자 2개를 입력해주세요.';
  }

  if (
    value !== '' &&
    type === 'MM' &&
    !(Number(value) >= 1 && Number(value) <= 12)
  ) {
    return '월은 1이상 12이하여야 합니다.';
  }

  return '';
};
