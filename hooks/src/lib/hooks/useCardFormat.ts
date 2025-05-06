// hooks/useCardFormat.ts
import { useState, useCallback } from "react";
import { checkCardBrand } from "../utils/card-brand-checker";
import { createFormatRulesFromLengths } from "../utils/format-helper";

const FORMAT_RULES = createFormatRulesFromLengths();

export interface UseCardFormatReturn {
  formatted: string;
  raw: string;
  totalLength: number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
}
export interface UseCardValidationOptions {
  format?: {
    splitter?: string;
  };
}

export default function useCardFormat(
  splitter: string = " "
): UseCardFormatReturn {
  const [formatted, setFormatted] = useState("");
  const [raw, setRaw] = useState("");

  const onChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const digits = e.target.value.replace(/\D/g, "");
      setRaw(digits);

      const ruleOrFn = FORMAT_RULES[checkCardBrand(digits)];
      const lengths =
        typeof ruleOrFn === "function" ? ruleOrFn(digits.length) : ruleOrFn;

      const parts: string[] = [];
      let idx = 0;
      lengths.forEach((len) => {
        if (idx >= digits.length) return;
        parts.push(digits.substr(idx, len));
        idx += len;
      });

      setFormatted(parts.join(splitter));
    },
    [splitter]
  );

  const ruleForTotal = FORMAT_RULES[checkCardBrand(raw)];
  const lengthsForTotal =
    typeof ruleForTotal === "function"
      ? ruleForTotal(raw.length)
      : ruleForTotal;
  const digitCount = lengthsForTotal.reduce((sum, n) => sum + n, 0);
  const separatorCount =
    lengthsForTotal.length > 0 ? lengthsForTotal.length - 1 : 0;
  const totalLength = digitCount + separatorCount;
  const placeholder = lengthsForTotal
    .map((len, idx) => {
      if (idx === lengthsForTotal.length - 1) {
        return "X".repeat(len);
      }
      return "X".repeat(len) + splitter;
    })
    .join("")
    .trim();

  return { formatted, raw, totalLength, placeholder, onChange };
}
