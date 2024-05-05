import useInput from "./common/useInput";
import { validateLength, validateNumber } from "@/validate/validate";
import { ChangeEvent } from "react";
import { cvcErrorType } from "@/types/cvc";
import { CVCErrorMessages } from "@/constants/error";
import { VALID_LENGTH } from "@/constants/system";

const cvcValidates = (value: string) => {
  validateNumber(value);
  validateLength(value, 3);
};

const useCVC = (initialValue: string) => {
  const { value, onChange, errorStatus, onBlurValidLength } =
    useInput<cvcErrorType>(initialValue, cvcValidates, VALID_LENGTH.CVC);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e);
  };

  return {
    value,
    onChange: handleChange,
    errorMessage: errorStatus && CVCErrorMessages[errorStatus],
    onBlurValidLength,
  };
};

export default useCVC;
