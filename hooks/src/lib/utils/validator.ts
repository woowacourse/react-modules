import { CARD, REGEX } from "../constants";

const ValidatorCondition = {
  checkIsOverMaxDigit(value: string, digit: number) {
    return value.length > digit;
  },

  checkEqualDigit(value: string, digit: number) {
    return value.length === digit;
  },

  checkIsDigit(value: string) {
    return REGEX.numbers.test(value);
  },

  checkValidMonth(value: string) {
    return REGEX.month.test(value);
  },
};

const Validator = {
  checkExpirationMonth(name: string, value: string) {
    const isValidMonth = name === "month" ? ValidatorCondition.checkValidMonth(value) : true;
    if (!isValidMonth) return false;

    return true;
  },

  checkDateExpiration(month: string, year: string) {
    const inputExpirationDate = new Date(`20${year}-${month}-01`);
    const currentDate = new Date();
    if (inputExpirationDate < currentDate) return false;
    return true;
  },

  checkEnglish(value: string) {
    return /^[a-zA-Z\s]*$/.test(value);
  },

  checkNumberAndOver(value: string, maxDigit: number) {
    if (!ValidatorCondition.checkIsDigit(value)) return false;
    if (ValidatorCondition.checkIsOverMaxDigit(value, maxDigit)) return false;

    return true;
  },

  checkFillNumber(value: string, maxDigit: number) {
    if (!ValidatorCondition.checkEqualDigit(value, maxDigit)) return false;

    return true;
  },

  checkExist(value: string) {
    return value.length !== 0;
  },

  checkCardType(value: string) {
    if (Object.values(CARD).includes(value)) return true;

    return false;
  },
};

export default Validator;
