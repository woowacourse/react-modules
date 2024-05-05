import { useState } from "react";
import useValidation, { IErrorStatus } from "../useValidation";

export default function useCVC() {
  const [value, setValue] = useState("");
  const { errorStatus, validateValue } = useValidation(validateCVC);

  const setCVC = (string: string) => {
    setValue(string);
    validateValue(string);
  };

  return { cvc: value, setCVC, errorStatus };
}

function validateCVC(value: string): IErrorStatus {
  if (value.length !== 3) {
    return { isError: true, errorMessage: "CVC는 3자리여야 합니다." };
  }
  if (!/^\d+$/.test(value)) {
    return { isError: true, errorMessage: "CVC 값은 숫자만 포함해야 합니다." };
  }
  return { isError: false, errorMessage: null };
}
