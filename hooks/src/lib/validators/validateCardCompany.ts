export const validateCardCompany = (
  value: string,
  defaultValue: string,
): string => {
  if (value === defaultValue) return '카드사를 선택해주세요.';

  return '';
};