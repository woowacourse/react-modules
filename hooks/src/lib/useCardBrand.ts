import { useState } from "react";
import * as P from "./utils/checkPrefix";
import { CARD_FORMAT_RULES, FORMAT_MARK } from "./constants/systemConstants";

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

const useCardBrand = () => {
  const [cardBrand, setCardBrand] = useState<CardBrandTypes>("noBrand");

  const justifyCardBrand = (cardInput: string, delimiter: string) => {
    cardInput = cardInput.replaceAll(delimiter, "");
    const matchedBrand = cardBrandRules.find(
      (rule) =>
        rule.checkPrefixFunc(cardInput) && cardInput.length === rule.length
    );
    const updatedBrand = matchedBrand ? matchedBrand.brand : "noBrand";
    setCardBrand(updatedBrand);
  };

  const guessCardBrandByPrefix = (cardInput: string, delimiter: string) => {
    cardInput = cardInput.replaceAll(delimiter, "");
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
    return result;
  };

  const handleCardNumberFormat = (cardInput: string, delimiter: string) => {
    const DEFAULT_FORMAT_LENGTH = 16;
    const brandRule = cardBrandRules.find((rule) => rule.brand === cardBrand);
    const length = brandRule ? brandRule.length : DEFAULT_FORMAT_LENGTH;

    const dividedInput = divideByFormat(cardInput, CARD_FORMAT_RULES[length]);

    return dividedInput.join(delimiter);
  };

  return {
    cardBrand,
    justifyCardBrand,
    guessCardBrandByPrefix,
    handleCardNumberFormat,
  };
};

export default useCardBrand;
