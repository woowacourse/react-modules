type ValidateRangeParams = {
  value: number;
  min: number;
  max: number;
};
const validateRange = ({ value, min, max }: ValidateRangeParams) => {
  return value <= max && value >= min;
};

export default validateRange;
