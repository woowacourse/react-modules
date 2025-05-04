export const checkValidLength = (value: string, validLength: number) => {
  return value.length === validLength;
};

export const checkNumber = (value: string) => {
  return /^\d+$/.test(value);
};
