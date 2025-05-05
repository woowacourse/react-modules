// hooks/useCardFormat.ts
import { useState, useCallback } from "react";
import { checkCardBrand } from "../utils/card-brand-checker";
import { createFormatRulesFromLengths } from "../utils/format-helper";

const FORMAT_RULES = createFormatRulesFromLengths();

export interface UseCardValidationOptions {
  format?: {
    splitter?: string;
  };
}

export default function useCardFormat(splitter: string = " ") {
  const [formatted, setFormatted] = useState("");
  const [raw, setRaw] = useState("".replace(/\D/g, ""));

  const onChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const digits = e.target.value.replace(/\D/g, "");
      setRaw(digits);

      const brand = checkCardBrand(digits);
      const rule = FORMAT_RULES[brand];
      const pattern = typeof rule === "function" ? rule(digits.length) : rule;

      const parts: string[] = [];
      let idx = 0;
      for (const len of pattern) {
        if (idx >= digits.length) break;
        parts.push(digits.substr(idx, len));
        idx += len;
      }
      setFormatted(parts.join(splitter));
    },
    [formatted]
  );

  return { formatted, raw, onChange };
}
