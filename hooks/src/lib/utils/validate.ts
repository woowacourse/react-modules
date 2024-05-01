const validator = {
  isValidEmptyValue: (value: string) => {
    return value !== "";
  },

  isValidDigit: (value: string) => {
    return /^\d+$/.test(value);
  },

  isEnglish: (value: string) => {
    return /^[a-zA-Z\s]+$/.test(value);
  },

  isValidLength: ({ value, matchedLength }: { value: string; matchedLength: number }) => {
    return value.length === matchedLength;
  },

  isNumberInRange: ({ min, max, compareNumber }: { min: number; max: number; compareNumber: number }) => {
    return compareNumber >= min && compareNumber <= max;
  },
};

export default validator;
