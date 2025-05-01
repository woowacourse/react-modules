export const getValidLength = (value: string, maxLength: number) => {
  if (value.length === 0) return true;
  return value.length === maxLength;
};
