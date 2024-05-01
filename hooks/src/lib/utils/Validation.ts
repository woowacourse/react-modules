const Validation = {
  isNumeric(value: string) {
    return !Number.isNaN(Number(value));
  },

  isEnglishWithSpace(value: string) {
    return /^[a-zA-Z][a-zA-Z ]*$/.test(value);
  },

  hasLength(value: string, length: number) {
    return value.length === length;
  },

  isNumberInRange({
    min,
    max,
    value,
  }: {
    min: number;
    max: number;
    value: number;
  }) {
    return value >= min && value <= max;
  },
};

export default Validation;
