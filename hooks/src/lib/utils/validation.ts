export const isEmpty = (value: string) => {
  return value === '';
};

export const isPositiveInteger = (value: string) => {
  return /^\d*$/.test(value);
};

export const isLengthEqual = (value: string, length: number) => {
  return value.length === length;
};

export const isLengthBetween = (value: string, min: number, max: number) => {
  return value.length >= min && value.length <= max;
};
