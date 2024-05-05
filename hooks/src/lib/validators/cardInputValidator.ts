import { INPUT_RULES } from "../constants/cardCustomHook";

const cardInputValidator = {
  validateNumericInput(value: string) {
    return /^(\d*)$/.test(value); // 입력값이 숫자로만 이루어졌는지 확인하는 validator
  },

  validateAlphabetInput(value: string) {
    return /^[a-zA-Z ]*$/.test(value); // 입력값이 알파벳 대소문자로만 이루어졌는지 확인하는 validator
  },

  validateInputLength(value: string, length: number) {
    return value.length === length;
  },

  validateNumberInRange(number: number, min: number, max: number) {
    return number >= min && number <= max;
  },

  validateCardNumberLength(value: string) {
    return value.length === INPUT_RULES.validCardNumberLength;
  },

  validatePastYear(year: string) {
    const currentYear = new Date().getFullYear() % 100;

    return parseInt(year, 10) <= currentYear;
  },

  validateMonth(month: string) {
    if (month.length !== INPUT_RULES.validExpiryDateLength) return false;

    return this.validateNumberInRange(parseInt(month, 10), 1, 12);
  },

  validateYear(year: string) {
    if (year.length !== INPUT_RULES.validExpiryDateLength) return false;

    return !this.validatePastYear(year);
  },

  validateFutureDate(month: number, year: number) {
    const currentTime = new Date().getTime();

    const enteredDate = new Date(2000 + year, month, 0).getTime();

    return enteredDate > currentTime;
  },

  validateExpiration(month: string, year: string, name: string) {
    if (name === "month" && !this.validateMonth(month)) return false;

    if (name === "year" && !this.validateYear(year)) return false;

    if (
      month.length !== INPUT_RULES.validExpiryDateLength ||
      year.length !== INPUT_RULES.validExpiryDateLength
    )
      return true;

    return this.validateFutureDate(parseInt(month), parseInt(year));
  },
};

export default cardInputValidator;
