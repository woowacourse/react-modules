import useInput from "./common/useInput";
import { validateLength, validateNumber } from "@/validate/validate";
import { ChangeEvent } from "react";
import { CVCErrorType } from "@/types/cvc";
import { CVCErrorMessages } from "@/constants/error";
import { VALID_LENGTH } from "@/constants/system";

const CVC_Validates = (value: string) => {
  validateNumber(value);
  validateLength(value, VALID_LENGTH.CVC);
};

const useCVC = (initialValue: string) => {
  const { value, onChange, errorStatus, onBlurValidLength } =
    useInput<CVCErrorType>({
      initialValue,
      validate: CVC_Validates,
      validLength: VALID_LENGTH.CVC,
    });

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
