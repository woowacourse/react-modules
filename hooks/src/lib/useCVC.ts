import useInput from "./common/useInput";
import { validLength, validateNumber } from "@/validate/validate";
import { ChangeEvent } from "react";
import { CVCErrorType } from "@/types/cvc";
import { CVCErrorMessages } from "@/constants/error";
import { VALID_LENGTH } from "@/constants/system";

const CVC_Validates = [
  (value: string) => validateNumber(value),
  (value: string) => validLength(value, VALID_LENGTH.CVC),
];

const useCVC = (initialValue: string) => {
  const { value, onChange, errorStatus } = useInput<CVCErrorType>({
    initialValue,
    validates: CVC_Validates,
    validLength: VALID_LENGTH.CVC,
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e);
  };

  return {
    value,
    onChange: handleChange,
    errorMessage: errorStatus && CVCErrorMessages[errorStatus],
  };
};

export default useCVC;
