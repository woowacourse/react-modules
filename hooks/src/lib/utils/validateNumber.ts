const validateNumber = (value: string): boolean =>
  value.split('').every((char) => !isNaN(Number(char)));

export default validateNumber;
