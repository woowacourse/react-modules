import { useState } from "react";
import { ValidationResult } from "./type";
import { ErrorType } from "../../types/ErrorType";
import { useCardCompany } from "../useCardCompany/useCardCompany";
import { useCardFormatter } from "../useCardCompany/useCardCompany";

const CARD_NUMBER_RULE = {
  INVALID_LENGTH_ERROR: "카드 번호는 4자리로 입력해 주세요.",
  MAX_LENGTH: 4,
} as const;

export default function useCardNumbers(): ValidationResult & {
  formatted: string;
} {
  const [raw, setRaw] = useState<string>("");
  const [error, setError] = useState<ErrorType[]>(
    Array.from({ length: 4 }, () => ({ isValid: false, errorMessage: "" }))
  );

  const MAX_TOTAL = CARD_NUMBER_RULE.MAX_LENGTH * 4;

  const handleCardNumberChange = (value: string) => {
    const digits = value.replace(/\D/g, "").slice(0, MAX_TOTAL);
    setRaw(digits);

    const segments = Array.from({ length: 4 }, (_, i) =>
      digits.slice(
        i * CARD_NUMBER_RULE.MAX_LENGTH,
        i * CARD_NUMBER_RULE.MAX_LENGTH + CARD_NUMBER_RULE.MAX_LENGTH
      )
    );
    const newError = segments.map((seg) =>
      seg && seg.length < CARD_NUMBER_RULE.MAX_LENGTH
        ? { isValid: true, errorMessage: CARD_NUMBER_RULE.INVALID_LENGTH_ERROR }
        : { isValid: false, errorMessage: "" }
    );
    setError(newError);
  };

  const numbers = Array.from({ length: 4 }, (_, i) =>
    raw.slice(
      i * CARD_NUMBER_RULE.MAX_LENGTH,
      i * CARD_NUMBER_RULE.MAX_LENGTH + CARD_NUMBER_RULE.MAX_LENGTH
    )
  );

  const cardType = useCardCompany(raw);

  const formatted = useCardFormatter(raw, cardType);

  return { numbers, error, cardType, handleCardNumberChange, formatted };
}
