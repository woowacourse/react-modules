const validateRange = (value: string, min: number, max: number) => {
  return Number(value) <= max && Number(value) >= min;
};

export default validateRange;
