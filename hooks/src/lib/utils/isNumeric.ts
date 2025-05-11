const isNumeric = (value: string) => {
  return /^[0-9]*$/.test(value);
};

export default isNumeric;
