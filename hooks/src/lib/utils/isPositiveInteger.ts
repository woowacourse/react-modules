const isPositiveInteger = (value: string) => {
  return /^\d*$/.test(value);
};

export default isPositiveInteger;
