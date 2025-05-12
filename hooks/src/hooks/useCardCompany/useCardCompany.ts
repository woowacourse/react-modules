import { useMemo } from "react";
import { getCardCompany as detect } from "../useCardCompany/getCardCompany";

const FORMAT_PATTERNS: Record<string, number[]> = {
  visa: [4, 4, 4, 4],
  master: [4, 4, 4, 4],
  diners: [4, 6, 4],
  amex: [4, 6, 5],
  unionPay: [4, 4, 4, 4],
  default: [4, 4, 4, 4],
};

export function useCardCompany(raw: string) {
  const cardType = useMemo(() => detect(raw), [raw]);
  return cardType;
}

export function useCardFormatter(raw: string, cardType: string) {
  return useMemo(() => {
    const pattern = FORMAT_PATTERNS[cardType] ?? FORMAT_PATTERNS.default;
    const parts: string[] = [];
    let idx = 0;
    for (const len of pattern) {
      parts.push(raw.slice(idx, idx + len));
      idx += len;
    }
    return parts.filter(Boolean).join(" ");
  }, [raw, cardType]);
}
