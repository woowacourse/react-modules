import validator from "./utils/validate";
import ERROR_MESSAGE from "./constants/errorMessage";

type Props = {
  month: string;
  year: string;
};

const MIN_MONTH = 1;
const MAX_MONTH = 12;
const MAX_DATE_LENGTH = 2;

const useExpiryDateValidation = ({ month, year }: Props) => {
  let error = { isValid: true, errorMessage: "" };

  if (!validator.isValidEmptyValue(month)) {
    error = { isValid: false, errorMessage: ERROR_MESSAGE.EMPTY_VALUE };
  } else if (!validator.isValidDigit(month)) {
    error = { isValid: false, errorMessage: ERROR_MESSAGE.ONLY_NUMBER };
  } else if (!validator.isValidLength({ value: month, matchedLength: MAX_DATE_LENGTH })) {
    error = { isValid: false, errorMessage: ERROR_MESSAGE.INVALID_MONTH_LENGTH };
  } else if (!validator.isNumberInRange({ min: MIN_MONTH, max: MAX_MONTH, compareNumber: Number(month) })) {
    error = { isValid: false, errorMessage: ERROR_MESSAGE.OUT_OF_RANGE_MONTH };
  } else if (!validator.isValidEmptyValue(year)) {
    error = { isValid: false, errorMessage: ERROR_MESSAGE.EMPTY_VALUE };
  } else if (!validator.isValidDigit(year)) {
    error = { isValid: false, errorMessage: ERROR_MESSAGE.ONLY_NUMBER };
  } else if (!validator.isValidLength({ value: year, matchedLength: 2 })) {
    error = { isValid: false, errorMessage: ERROR_MESSAGE.INVALID_YEAR_LENGTH };
  }

  return { validationResult: error };
};

export default useExpiryDateValidation;
