import { useState } from "react";
import useValidation, { IErrorStatus } from "../useValidation";

interface UseCVCReturn {
  cvc: string;
  setCVC: (value: string) => void;
  errorStatus: IErrorStatus;
}

export default function useCVC(): UseCVCReturn {
  const [value, setValue] = useState("");
  const { errorStatus, validateValue } = useValidation(validateCVC);

  const setCVC = (value: string) => {
    setValue(value);
    validateValue(value);
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
