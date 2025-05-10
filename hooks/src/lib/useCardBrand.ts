import { useState } from "react";
import * as P from "./utils/checkPrefix";

type CardBrandTypes =
  | "visa"
  | "masterCard"
  | "diners"
  | "AMEX"
  | "unionPay"
  | "noBrand";

interface CardBrandConfig {
  brand: CardBrandTypes;
  checkPrefixFunc: (cardInput: string) => boolean;
  length: number;
}

const cardBrandRules: CardBrandConfig[] = [
  {
    brand: "visa",
    checkPrefixFunc: P.hasVisaPrefix,
    length: 16,
  },
  {
    brand: "masterCard",
    checkPrefixFunc: P.hasMasterCardPrefix,
    length: 16,
  },
  {
    brand: "diners",
    checkPrefixFunc: P.hasDinersPrefix,
    length: 14,
  },
  {
    brand: "AMEX",
    checkPrefixFunc: P.hasAMEXPrefix,
    length: 15,
  },
  {
    brand: "unionPay",
    checkPrefixFunc: P.hasUnionPayPrefix,
    length: 16,
  },
];

const cardFormatRules = {
  16: [4, 4, 4, 4],
  15: [4, 6, 5],
  14: [4, 6, 4],
};

const useCardBrand = () => {
  const [cardBrand, setCardBrand] = useState<CardBrandTypes>("noBrand");

  const justifyCardBrand = (cardInput: string) => {
    const matchedBrand = cardBrandRules.find(
      (rule) =>
        rule.checkPrefixFunc(cardInput) && cardInput.length === rule.length
    );
    const updatedBrand = matchedBrand ? matchedBrand.brand : "noBrand";
    setCardBrand(updatedBrand);
  };

  const guessCardBrandByPrefix = (cardInput: string) => {
    const matchedBrand = cardBrandRules.find((rule) =>
      rule.checkPrefixFunc(cardInput)
    );
    const updatedBrand = matchedBrand ? matchedBrand.brand : "noBrand";
    setCardBrand(updatedBrand);
  };

  const divideByFormat = (cardInput: string, format: number[]) => {
    const result = [];
    let offset = 0;

    for (let i = 0; i < format.length; i++) {
      const length = format[i];
      const slice = cardInput.slice(offset, offset + length);
      if (slice.length === 0) break;

      offset += length;
      result.push(slice);
    }

    return result.join("-");
  };

  const handleCardNumberFormat = (cardInput: string) => {
    const DEFAULT_FORMAT_LENGTH = 16;
    const brandRule = cardBrandRules.find((rule) => rule.brand === cardBrand);
    const length = brandRule ? brandRule.length : DEFAULT_FORMAT_LENGTH;

    return divideByFormat(cardInput, cardFormatRules[length]);
  };

  return {
    cardBrand,
    justifyCardBrand,
    guessCardBrandByPrefix,
    handleCardNumberFormat,
  };
};

export default useCardBrand;
