const validateNumber = (value: string): boolean =>
  value.split("").every((char) => !Number.isNaN(Number(char)));

export default validateNumber;
