import { useRef } from "react";
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
  const ref = useRef({ isValid: false, errorMessage: "" });

  if (!validator.isValidEmptyValue(month)) {
    ref.current = {
      isValid: false,
      errorMessage: ERROR_MESSAGE.EMPTY_VALUE,
    };
    return { validationResult: ref.current };
  }

  if (!validator.isValidDigit(month)) {
    ref.current = {
      isValid: false,
      errorMessage: ERROR_MESSAGE.ONLY_NUMBER,
    };
    return { validationResult: ref.current };
  }

  if (!validator.isValidLength({ value: month, matchedLength: MAX_DATE_LENGTH })) {
    ref.current = {
      isValid: false,
      errorMessage: ERROR_MESSAGE.INVALID_MONTH_LENGTH,
    };
    return { validationResult: ref.current };
  }

  if (!validator.isNumberInRange({ min: MIN_MONTH, max: MAX_MONTH, compareNumber: Number(month) })) {
    ref.current = {
      isValid: false,
      errorMessage: ERROR_MESSAGE.OUT_OF_RANGE_MONTH,
    };
    return { validationResult: ref.current };
  }

  if (!validator.isValidEmptyValue(year)) {
    ref.current = {
      isValid: false,
      errorMessage: ERROR_MESSAGE.EMPTY_VALUE,
    };
    return { validationResult: ref.current };
  }

  if (!validator.isValidDigit(year)) {
    ref.current = {
      isValid: false,
      errorMessage: ERROR_MESSAGE.ONLY_NUMBER,
    };
    return { validationResult: ref.current };
  }

  if (!validator.isValidLength({ value: year, matchedLength: 2 })) {
    ref.current = {
      isValid: false,
      errorMessage: ERROR_MESSAGE.INVALID_YEAR_LENGTH,
    };
    return { validationResult: ref.current };
  }

  ref.current = {
    isValid: true,
    errorMessage: "",
  };

  return { validationResult: ref.current };
};

export default useExpiryDateValidation;
