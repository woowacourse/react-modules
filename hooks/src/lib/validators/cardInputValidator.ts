import { INPUT_RULES } from "../constants/card-custom-hook";

const cardInputValidator = {
  validateNumericInput(value: string) {
    return /^(\d*)$/.test(value);
  },

  validateAlphabetInput(value: string) {
    return /^[a-zA-Z ]*$/.test(value);
  },

  validateInputLength(value: string, length: number) {
    return value.length === length;
  },

  validateOverInputLength(value: string, length: number) {
    return value.length > length;
  },

  validateNumberInRange(number: number, min: number, max: number) {
    return number >= min && number <= max;
  },

  validatePastYear(year: string) {
    const currentYear = new Date().getFullYear() % 100;

    return parseInt(year, 10) >= currentYear;
  },

  validateMonth(month: string) {
    if (month.length !== INPUT_RULES.maxExpirationDateLength) return false;

    return this.validateNumberInRange(parseInt(month, 10), 1, 12);
  },

  validateYear(year: string) {
    if (year.length !== INPUT_RULES.maxExpirationDateLength) return false;

    return this.validatePastYear(year);
  },

  validateFutureDate(month: number, year: number) {
    const currentTime = new Date().getTime();

    const enteredDate = new Date(2000 + year, month, 0).getTime();

    return enteredDate > currentTime;
  },
};

export default cardInputValidator;
