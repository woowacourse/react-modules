import { useState } from "react";
import useValidation from "./useValidation";

const cvcValidators = [
  (value: string) => {
    if (value.length !== 3) {
      return "CVC는 3자리여야 합니다.";
    }
  },
  (value: string) => {
    if (!/^\d+$/.test(value)) {
      return "CVC 값은 숫자만 포함해야 합니다.";
    }
  },
];

export default function useCVC() {
  const [value, setValue] = useState("");
  const { errorStatus, validate } = useValidation(cvcValidators);

  const setCVC = (string: string) => {
    setValue(string);
    validate(string);
  };

  return { cvc: value, setCVC, errorStatus };
}
