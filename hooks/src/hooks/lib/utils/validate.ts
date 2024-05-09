const validator = {
  isValidEmptyValue: (value: string) => {
    return value !== "";
  },

  isValidDigit: (value: string) => {
    return /^[\d\s]+$/.test(value);
  },

  isEnglish: (value: string) => {
    return /^[a-zA-Z\s]+$/.test(value);
  },

  isValidLength: ({ value, matchedLength }: { value: string; matchedLength: number }) => {
    return value.length === matchedLength;
  },

  isValidLengthRange: ({ value, maxLength }: { value: string; maxLength: number }) => {
    return value.length <= maxLength;
  },

  isNumberInRange: ({ min, max, compareNumber }: { min: number; max: number; compareNumber: number }) => {
    return compareNumber >= min && compareNumber <= max;
  },
};

export default validator;
