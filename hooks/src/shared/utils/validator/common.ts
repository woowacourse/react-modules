export const isNumeric = (value: string) => {
  return Number.isInteger(Number(value));
};

export const isAlphabetic = (value: string) => {
  return /^[A-Za-z]+$/.test(value);
};
