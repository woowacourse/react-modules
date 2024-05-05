import { useEffect, useState } from "react";
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
  const [validationResult, setValidationResult] = useState({
    isValid: true,
    errorMessage: "",
  });

  useEffect(() => {
    if (!validator.isValidEmptyValue(month)) {
      setValidationResult({
        isValid: false,
        errorMessage: ERROR_MESSAGE.EMPTY_VALUE,
      });
      return;
    }

    if (!validator.isValidDigit(month)) {
      setValidationResult({
        isValid: false,
        errorMessage: ERROR_MESSAGE.ONLY_NUMBER,
      });
      return;
    }

    if (
      !validator.isValidLength({ value: month, matchedLength: MAX_DATE_LENGTH })
    ) {
      setValidationResult({
        isValid: false,
        errorMessage: ERROR_MESSAGE.INVALID_MONTH_LENGTH,
      });
      return;
    }

    if (
      !validator.isNumberInRange({
        min: MIN_MONTH,
        max: MAX_MONTH,
        compareNumber: Number(month),
      })
    ) {
      setValidationResult({
        isValid: false,
        errorMessage: ERROR_MESSAGE.OUT_OF_RANGE_MONTH,
      });
      return;
    }

    if (!validator.isValidEmptyValue(year)) {
      setValidationResult({
        isValid: false,
        errorMessage: ERROR_MESSAGE.EMPTY_VALUE,
      });
      return;
    }

    if (!validator.isValidDigit(year)) {
      setValidationResult({
        isValid: false,
        errorMessage: ERROR_MESSAGE.ONLY_NUMBER,
      });
      return;
    }

    if (!validator.isValidLength({ value: year, matchedLength: 2 })) {
      setValidationResult({
        isValid: false,
        errorMessage: ERROR_MESSAGE.INVALID_YEAR_LENGTH,
      });
      return;
    }

    setValidationResult({
      isValid: true,
      errorMessage: "",
    });
  }, [month, year]);

  return { validationResult };
};

export default useExpiryDateValidation;
