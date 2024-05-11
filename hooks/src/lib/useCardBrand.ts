import { useState } from "react";
import {
  CardBrandInfo,
  CardBrands,
  CARD_BRANDS_NAMES,
} from "@/constants/cardBrand";

const useCardBrands = () => {
  const [cardBrand, setCardBrand] = useState<CardBrandInfo>(CardBrands["NONE"]);

  const identifyBrand = (value: string) => {
    let newCardBrandInfo = CardBrands["NONE"];

    CARD_BRANDS_NAMES.forEach((name) => {
      const identifiers = CardBrands[name].identifier;
      if (identifiers) {
        if (
          identifiers.type === "value" &&
          checkValueMatch(value, identifiers.values)
        ) {
          newCardBrandInfo = CardBrands[name];
        } else if (
          identifiers.type === "range" &&
          checkRangeMatch(value, identifiers.values)
        ) {
          newCardBrandInfo = CardBrands[name];
        }
      }
    });

    setCardBrand(newCardBrandInfo);
    return newCardBrandInfo;
  };

  const checkValueMatch = (value: string, values: number[]) => {
    return values.some((identifier) => value.startsWith(String(identifier)));
  };

  const checkRangeMatch = (value: string, ranges: [number, number][]) => {
    return ranges.some(([from, to]) => {
      const maxLength = Math.max(String(from).length, String(to).length);
      if (value.length >= maxLength) {
        const numericValue = parseInt(value.slice(0, maxLength), 10);
        return numericValue >= from && numericValue <= to;
      }
      return false;
    });
  };

  return { cardBrand, identifyBrand };
};

export default useCardBrands;
