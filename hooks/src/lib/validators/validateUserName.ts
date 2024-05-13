export const validateUserName = (
  value: string,
  cardUserNameLength: number,
): string => {
  if (value !== '' && !/^[a-zA-Z\s]+$/.test(value)) {
    return '영어만 입력 가능합니다.';
  }

  if (value !== '' && value.length > cardUserNameLength) {
    return `${cardUserNameLength}자까지 입력 가능합니다.`;
  }

  return '';
};
