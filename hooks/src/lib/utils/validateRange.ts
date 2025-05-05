type validateRange = {
  value: string;
  min: number;
  max: number;
};
const validateRange = ({ value, min, max }: validateRange) => {
  return Number(value) <= max && Number(value) >= min;
};

export default validateRange;
