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

  validateDinersCardNumber(value: string) {
    return value.slice(0, 2) === INPUT_RULES.validDinersCardNumber;
  },

  validateAMEXCardNumber(value: string) {
    return INPUT_RULES.validAMEXCardNumbers.includes(value.slice(0, 2));
  },

  validateUnionPayCardNumber(value: string) {
    return (
      this.validateNumberInRange(
        Number(value.slice(0, 3)),
        INPUT_RULES.validUnionPayCardNumber.lengthThree.first,
        INPUT_RULES.validUnionPayCardNumber.lengthThree.last
      ) ||
      this.validateNumberInRange(
        Number(value.slice(0, 4)),
        INPUT_RULES.validUnionPayCardNumber.lengthFour.first,
        INPUT_RULES.validUnionPayCardNumber.lengthFour.last
      ) ||
      this.validateNumberInRange(
        Number(value.slice(0, 6)),
        INPUT_RULES.validUnionPayCardNumber.lengthSix.first,
        INPUT_RULES.validUnionPayCardNumber.lengthSix.last
      )
    );
  },

  validateMasterCardNumber(value: string) {
    return this.validateNumberInRange(
      Number(value.slice(0, 2)),
      INPUT_RULES.validMasterCardNumber.first,
      INPUT_RULES.validMasterCardNumber.last
    );
  },

  validateVisaCardNumber(value: string) {
    return value.slice(0, 1) === INPUT_RULES.validVisaCardNumber;
  },

  validateCardNumberExactLength(value: string) {
    return this.validateInputLength(
      value,
      INPUT_RULES.validCardNumberLength(value)
    );
  },

  validateCardNumberLength(value: string) {
    const isOverDinersCardNumberLength =
      value.length <= INPUT_RULES.validCardNumberLength(value);

    return isOverDinersCardNumberLength;
  },

  validatePastYear(year: string) {
    const currentYear = new Date().getFullYear() % 100;

    return Number(year) <= currentYear;
  },

  validateMonth(month: string) {
    if (month.length !== INPUT_RULES.validExpiryDateLength) return false;

    return this.validateNumberInRange(Number(month), 1, 12);
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

    return this.validateFutureDate(Number(month), Number(year));
  },
};

export default cardInputValidator;
