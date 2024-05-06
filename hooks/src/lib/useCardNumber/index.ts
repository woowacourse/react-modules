import { useState } from "react";
import { useValidation, IErrorStatus } from "../useValidation";

interface UseCardNumberReturn {
  cardNumber: [string, string, string, string];
  setCardNumber: (value: string, index: number) => void;
  errorStatus: [IErrorStatus, IErrorStatus, IErrorStatus, IErrorStatus];
}

export function useCardNumber(): UseCardNumberReturn {
  const [firstPart, setFirstPart] = useState("");
  const [secondPart, setSecondPart] = useState("");
  const [thirdPart, setThirdPart] = useState("");
  const [fourthPart, setFourthPart] = useState("");

  const firstPartValidation = useValidation(validateCardNumber);
  const secondPartValidation = useValidation(validateCardNumber);
  const thirdPartValidation = useValidation(validateCardNumber);
  const fourthPartValidation = useValidation(validateCardNumber);

  const setCardNumber = (value: string, index: number) => {
    switch (index) {
      case 0:
        setFirstPart(value);
        firstPartValidation.validateValue(value);
        break;
      case 1:
        setSecondPart(value);
        secondPartValidation.validateValue(value);
        break;
      case 2:
        setThirdPart(value);
        thirdPartValidation.validateValue(value);
        break;
      case 3:
        setFourthPart(value);
        fourthPartValidation.validateValue(value);
        break;
    }
  };

  return {
    cardNumber: [firstPart, secondPart, thirdPart, fourthPart],
    setCardNumber,
    errorStatus: [
      firstPartValidation.errorStatus,
      secondPartValidation.errorStatus,
      thirdPartValidation.errorStatus,
      fourthPartValidation.errorStatus,
    ],
  };
}

function validateCardNumber(value: string): IErrorStatus {
  if (value.length !== 4) {
    return { isError: true, errorMessage: "카드번호 한 단위는 4자리로 입력해 주세요." };
  }

  if (!/^\d+$/.test(value)) {
    return { isError: true, errorMessage: "카드번호는 숫자만 포함해야 합니다." };
  }

  return { isError: false, errorMessage: null };
}
