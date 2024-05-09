import {
  CardBrandIdentifiers,
  CardBrandInfo,
  CardBrands,
  Identifier,
} from "@/constants/cardBrand";
import { useState } from "react";

const useIdentifyCardBrand = () => {
  const [cardBrand, setCardBrand] = useState<CardBrandInfo>(CardBrands["NONE"]);

  const identifyBrand = (value: string) => {
    let newCardBrandInfo;

    if (value.length >= 1) {
      const slicedValue = value.slice(0, 2);
      newCardBrandInfo = decideCardBrandByFirstDigits(slicedValue);
    }
    if (!newCardBrandInfo && value.length >= 2) {
      newCardBrandInfo = decideCardBrandByNextTwoDigits(value);
    }
    if (!newCardBrandInfo && value.length >= 6) {
      newCardBrandInfo = decideCardBrandByNextFourDigits(value);
    }
    if (!newCardBrandInfo) {
      newCardBrandInfo = CardBrands["NONE"];
    }
    setCardBrand(newCardBrandInfo);
  };

  const decideCardBrandByFirstDigits = (
    input: string
  ): CardBrandInfo | null => {
    const slicedInput = input.slice(0, 1);
    if (checkIdentifier(slicedInput, CardBrandIdentifiers.VISA)) {
      return CardBrands.VISA;
    }
    return null;
  };

  const decideCardBrandByNextTwoDigits = (
    input: string
  ): CardBrandInfo | null => {
    const slicedInput = input.slice(0, 2);
    if (checkIdentifier(slicedInput, CardBrandIdentifiers.MASTER_CARD)) {
      return CardBrands.MASTER_CARD;
    }
    if (checkIdentifier(slicedInput, CardBrandIdentifiers.MASTER_CARD)) {
      return CardBrands.MASTER_CARD;
    }
    if (checkIdentifier(slicedInput, CardBrandIdentifiers.AMEX)) {
      return CardBrands.AMEX;
    }
    if (checkIdentifier(slicedInput, CardBrandIdentifiers.DINERS)) {
      return CardBrands.DINERS;
    }
    return null;
  };

  const decideCardBrandByNextFourDigits = (
    input: string
  ): CardBrandInfo | null => {
    const slicedInput = input.slice(0, 6);
    if (checkIdentifier(slicedInput, CardBrandIdentifiers.UNION_PAY)) {
      return CardBrands.UNION_PAY;
    }
    return null;
  };

  const checkIncludeRange = (value: number, from: number, to: number) => {
    return value >= from && value <= to;
  };

  const checkStartWith = (value: string, identifier: string) => {
    return value.startsWith(identifier);
  };

  const checkIdentifier = (input: string, identifier: Identifier) => {
    if (identifier.type === "range") {
      const answer = identifier.values.some((range) => {
        const [from, to] = range;
        return checkIncludeRange(Number(input), from, to);
      });
      return answer;
    }
    if (identifier.type === "value") {
      const answer = identifier.values.some((value) => {
        return checkStartWith(input, String(value));
      });
      return answer;
    }
  };
  return { cardBrand, identifyBrand };
};
export default useIdentifyCardBrand;
