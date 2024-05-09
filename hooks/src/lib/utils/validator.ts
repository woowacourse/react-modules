import { CARD, REGEX } from "../constants";

const Validator = {
  checkCreditExpirationPeriod(value: string, name: string): boolean {
    const isValidMonth = name === "month" ? REGEX.month.test(value) : true;
    if (!isValidMonth) return false;

    return true;
  },

  checkDateExpiration(month: string, year: string): boolean {
    const inputExpirationDate = new Date(`20${year}-${month}-01`);
    const currentDate = new Date();
    if (inputExpirationDate < currentDate) return false;
    return true;
  },

  checkEnglish(value: string): boolean {
    return REGEX.english.test(value);
  },

  checkFillNumber(value: string, maxDigit: number) {
    return value.length === maxDigit;
  },

  checkExist(value: string) {
    return value.length !== 0;
  },

  checkCardType(value: string) {
    if (Object.values(CARD).includes(value)) return true;

    return false;
  },

  checkOverMaxDigit(value: string, maxDigit: number) {
    return value.length > maxDigit;
  },

  checkDigit(value: string) {
    return REGEX.numbers.test(value);
  },
};

export default Validator;
