import useInput from "./common/useInput";
import {
  validateNumber,
  validateYear,
  validateMonth,
  validateOverLength,
} from "@/validate/validate";
import { ChangeEvent, FocusEvent } from "react";
import {
  ExpiryDateType,
  ExpiryDateErrorType,
  ExpiryDateKeys,
} from "@/types/expiryDate";
import { ExpiryDateErrorMessages } from "@/constants/error";

const expiryDateValidates = (value: string) => {
  validateNumber(value);
  validateOverLength(value, 2);
};

const monthValidates = (value: string) => {
  validateNumber(value);
  validateOverLength(value, 2);
  validateMonth(value);
};

const yearValidates = (value: string) => {
  expiryDateValidates(value);
  validateYear(value);
};

const useExpiryDate = (initialValue: ExpiryDateType) => {
  const validLength = 1;
  const {
    value: monthValue,
    onChange: onChangeMonth,
    onBlurValidLength: onBlurMonth,
    errorStatus: errorStatusMonth,
  } = useInput<ExpiryDateErrorType>({
    initialValue: initialValue.month,
    validate: monthValidates,
    validLength,
  });

  const {
    value: yearValue,
    onChange: onChangeYear,
    onBlurValidLength: onBlurYear,
    errorStatus: errorStatusYear,
  } = useInput<ExpiryDateErrorType>({
    initialValue: initialValue.year,
    validate: yearValidates,
    validLength,
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

  for (const key in errorMessages) {
    if (errorMessages[key as ExpiryDateKeys] === null) {
      delete errorMessages[key as ExpiryDateKeys];
    }
  }

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
