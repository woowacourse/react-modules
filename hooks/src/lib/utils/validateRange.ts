type validateRange = {
  value: number;
  min: number;
  max: number;
};
const validateRange = ({ value, min, max }: validateRange) => {
  return value <= max && value >= min;
};

export default validateRange;
