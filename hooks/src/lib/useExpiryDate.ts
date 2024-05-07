import useInput from "./common/useInput";
import {
  validateNumber,
  validateYear,
  validateMonth,
  validLength,
} from "@/validate/validate";
import { ChangeEvent } from "react";
import { ExpiryDateType, ExpiryDateErrorType } from "@/types/expiryDate";
import { ExpiryDateErrorMessages } from "@/constants/error";
import { VALID_LENGTH } from "@/constants/system";

const commonValidates = [
  (value: string) => validateNumber(value),
  (value: string) => validLength(value, VALID_LENGTH.EXPIRY_DATE),
];

const monthValidates = [
  ...commonValidates,
  (value: string) => validateMonth(value),
];

const yearValidates = [
  ...commonValidates,
  (value: string) => validateYear(value),
];

const useExpiryDate = (initialValue: ExpiryDateType) => {
  const {
    value: monthValue,
    onChange: onChangeMonth,
    errorStatus: errorStatusMonth,
  } = useInput<ExpiryDateErrorType>({
    initialValue: initialValue.month,
    validates: monthValidates,
    validLength: VALID_LENGTH.EXPIRY_DATE,
  });

  const {
    value: yearValue,
    onChange: onChangeYear,
    errorStatus: errorStatusYear,
  } = useInput<ExpiryDateErrorType>({
    initialValue: initialValue.year,
    validates: yearValidates,
    validLength: VALID_LENGTH.EXPIRY_DATE,
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name } = e.target;
    name === "month" ? onChangeMonth(e) : onChangeYear(e);
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
    errorMessages,
  };
};

export default useExpiryDate;
