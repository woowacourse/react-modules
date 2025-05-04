import { useState } from "react";

const CVC_RULE = {
  INVALID_LENGTH_ERROR: "CVC는 3자리로 입력해 주세요.",
  NOT_A_NUMBER: "CVC는 숫자로 입력해 주세요.",
  MAX_LENGTH: 3,
} as const;

type ValitationResult = {
  cvc: string;
  error: { isValid: boolean; errorMessage: string };
  handleCvcNumberChange: (value: string) => void;
};

export default function useCvcNumber(): ValitationResult {
  const [cvc, setCvc] = useState("");
  const [error, setError] = useState({ isValid: false, errorMessage: "" });

  const handleCvcNumberChange = (value: string) => {
    if (value.length > 3) return;

    setCvc(value);

    if (value === "") {
      setError({ isValid: false, errorMessage: "" });
      return;
    }

    if (!/^\d*$/.test(value)) {
      setError({ isValid: true, errorMessage: CVC_RULE.NOT_A_NUMBER });
      return;
    }
    if (value.length < CVC_RULE.MAX_LENGTH) {
      setError({ isValid: true, errorMessage: CVC_RULE.INVALID_LENGTH_ERROR });
      return;
    }
    setError({ isValid: false, errorMessage: "" });
  };

  return { cvc, error, handleCvcNumberChange };
}
