import { useState } from "react";
import * as P from "./checkPrefix";

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

  const handleCardNumberFormat = (cardInput: string) => {};

  return {
    cardBrand,
    justifyCardBrand,
    guessCardBrandByPrefix,
    handleCardNumberFormat,
  };
};

export default useCardBrand;
