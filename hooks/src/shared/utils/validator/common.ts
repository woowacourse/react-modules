export const isNumeric = (value: string) => {
  return /^\d+$/.test(value);
};

export const isAlphabetic = (value: string) => {
  return /^[A-Za-z]+$/.test(value);
};
