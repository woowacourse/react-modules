import { EXPIRATION } from "../constants/cardValidationInfo";
import ERROR_MESSAGE from "../constants/errorMessage";
import { detectCardCompany } from "../useCardBrand/useCardBrand";

const validator = {
  hasNonNumericValue(number: string) {
    return isNaN(Number(number));
  },

  hasIncorrectLength(number: string, length: number) {
    return number.length !== length;
  },

  isInValidMonth(month: string) {
    return (
      Number(month) < EXPIRATION.MONTH.MIN ||
      Number(month) > EXPIRATION.MONTH.MAX
    );
  },

  isInValidYear(year: string) {
    return Number(year) < EXPIRATION.YEAR.CURRENT;
  },

  isValidCardStartNumber(number: string) {
    const brand = detectCardCompany(number);
    return brand !== null;
  },

  validateFirstCardNumbers(number: string) {
    if (!validator.isValidCardStartNumber(number))
      return {
        isValidCardCompany: false,
        idx: 0,
        helperText: ERROR_MESSAGE.CARD_NUMBER.INVALID,
      };
    return {
      isValidCardCompany: true,
      idx: null,
      helperText: "",
    };
  },
};

export default validator;
