export const validateCVC = (value: string, cardCVCLength: number): string => {
  if (value !== '' && Number.isNaN(Number(value))) {
    return '숫자만 입력 가능합니다.';
  }

  if (value !== '' && value.length !== cardCVCLength) {
    return `${cardCVCLength}자리를 입력해주세요.`;
  }

  return '';
};
