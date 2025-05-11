import { useState, useMemo } from "react";
import { ValidationResult } from "./type";
import { ErrorType } from "../../types/ErrorType";
import { getCardCompany } from "../useCardCompany/getCardCompany";

const CARD_NUMBER_RULE = {
  INVALID_LENGTH_ERROR: "카드 번호는 4자리로 입력해 주세요.",
  MAX_LENGTH: 4,
} as const;

const FORMAT_PATTERNS: Record<string, number[]> = {
  visa: [4, 4, 4, 4],
  master: [4, 4, 4, 4],
  diners: [4, 6, 4],
  amex: [4, 6, 5],
  unionPay: [4, 4, 4, 4],
  default: [4, 4, 4, 4],
};

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

  const cardType = useMemo(() => getCardCompany(raw), [raw]);

  const numbers = Array.from({ length: 4 }, (_, i) =>
    raw.slice(
      i * CARD_NUMBER_RULE.MAX_LENGTH,
      i * CARD_NUMBER_RULE.MAX_LENGTH + CARD_NUMBER_RULE.MAX_LENGTH
    )
  );

  const formatted = useMemo(() => {
    const pattern = FORMAT_PATTERNS[cardType] || FORMAT_PATTERNS.default;
    const parts: string[] = [];
    let idx = 0;
    for (const len of pattern) {
      parts.push(raw.slice(idx, idx + len));
      idx += len;
    }
    return parts.filter(Boolean).join(" ");
  }, [raw, cardType]);

  return { numbers, error, cardType, handleCardNumberChange, formatted };
}
