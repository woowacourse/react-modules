import useInput from "./common/useInput";
import {
  validateNumber,
  validateYear,
  validateMonth,
  validateOverLength,
} from "@/validate/validate";
import { ChangeEvent, FocusEvent } from "react";
import { ExpiryDateType, ExpiryDateErrorType } from "@/types/expiryDate";
import { ExpiryDateErrorMessages } from "@/constants/error";
import { VALID_LENGTH } from "@/constants/system";

const expiryDateValidates = (value: string) => {
  validateNumber(value);
  validateOverLength(value, VALID_LENGTH.EXPIRY_DATE);
};

const monthValidates = (value: string) => {
  validateNumber(value);
  validateOverLength(value, VALID_LENGTH.EXPIRY_DATE);
  validateMonth(value);
};

const yearValidates = (value: string) => {
  expiryDateValidates(value);
  validateYear(value);
};

const useExpiryDate = (initialValue: ExpiryDateType) => {
  const {
    value: monthValue,
    onChange: onChangeMonth,
    onBlurValidLength: onBlurMonth,
    errorStatus: errorStatusMonth,
  } = useInput<ExpiryDateErrorType>({
    initialValue: initialValue.month,
    validate: monthValidates,
    validLength: VALID_LENGTH.EXPIRY_DATE,
  });

  const {
    value: yearValue,
    onChange: onChangeYear,
    onBlurValidLength: onBlurYear,
    errorStatus: errorStatusYear,
  } = useInput<ExpiryDateErrorType>({
    initialValue: initialValue.year,
    validate: yearValidates,
    validLength: VALID_LENGTH.EXPIRY_DATE,
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name } = e.target;
    name === "month" ? onChangeMonth(e) : onChangeYear(e);
  };

  const onBlurValidLength = (e: FocusEvent<HTMLInputElement>) => {
    const { name } = e.target;
    name === "month" ? onBlurMonth(e) : onBlurYear(e);
  };

  const errorMessages = {
    month: errorStatusMonth && ExpiryDateErrorMessages[errorStatusMonth],
    year: errorStatusYear && ExpiryDateErrorMessages[errorStatusYear],
  };

  return {
    values: {
      month: monthValue,
      year: yearValue,
    },
    onChange: handleChange,
    onBlurValidLength,
    errorMessages,
  };
};

export default useExpiryDate;
