import { useState } from "react";
import { useValidation, IErrorStatus } from "../useValidation";

interface UseCardholderNameReturn {
  cardholderName: string;
  setCardholderName: (value: string) => void;
  errorStatus: IErrorStatus;
}

export function useCardholderName(): UseCardholderNameReturn {
  const [value, setValue] = useState("");
  const { errorStatus, validateValue } = useValidation(validateCardholderName);

  const setCardholderName = (value: string) => {
    setValue(value);
    validateValue(value);
  };

  return { cardholderName: value, setCardholderName, errorStatus };
}

const TWO_BLANKS = "  ";
function validateCardholderName(value: string): IErrorStatus {
  if (!/^[A-Z ]+$/.test(value)) {
    return { isError: true, errorMessage: "소유자명은 영문 대문자만 포함해야 합니다." };
  }

  if (value.trim() !== value) {
    return { isError: true, errorMessage: "소유자명 양 끝에 공백이 포함될 수 없습니다." };
  }

  if (value.includes(TWO_BLANKS)) {
    return { isError: true, errorMessage: "소유자명의 사이 공백은 최대 한 칸 입력할 수 있습니다" };
  }

  return { isError: false, errorMessage: null };
}
