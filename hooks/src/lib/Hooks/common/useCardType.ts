import { useMemo } from "react";
import { CardType } from "../../types";
import { cardPrefixRule } from "../../constants";

export const useCardType = (input: string) => {
  return useMemo(() => {
    return detectCardType(input);
  }, [input]);
};

const detectCardType = (input: string): CardType => {
  for (const { type, length, start, end } of cardPrefixRule) {
    const prefix = Number(input.slice(0, length));
    if (prefix >= start && prefix <= end) {
      return type;
    }
  }

  return "none";
};
