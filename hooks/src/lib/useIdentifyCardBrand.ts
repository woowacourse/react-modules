import {
  CardBrandIdentifiers,
  CardBrandInfo,
  CardBrands,
  Identifier,
  CardBrandNameExcludedNone,
} from "@/constants/cardBrand";
import { useState } from "react";

type BrandIdentifierLengthMapType = {
  identifierLength: number;
  brands: CardBrandNameExcludedNone[];
}[];

export const BrandIdentifierLengthMap: BrandIdentifierLengthMapType = [
  {
    identifierLength: 1,
    brands: ["VISA"],
  },
  {
    identifierLength: 2,
    brands: ["MASTER_CARD", "AMEX", "DINERS"],
  },
  {
    identifierLength: 6,
    brands: ["UNION_PAY"],
  },
];

const useIdentifyCardBrand = () => {
  const [cardBrand, setCardBrand] = useState<CardBrandInfo>(CardBrands["NONE"]);

  const identifyBrand = (value: string) => {
    let newCardBrandInfo: CardBrandInfo | null = null;

    BrandIdentifierLengthMap.forEach((map) => {
      const haveEnoughValue = value.length >= map.identifierLength;
      if (haveEnoughValue && newCardBrandInfo === null) {
        map.brands.some((brand) => {
          const identifier = CardBrandIdentifiers[brand];
          const isMatch = checkIdentifier(value, identifier);
          if (isMatch) {
            newCardBrandInfo = CardBrands[brand];
          }
          return isMatch;
        });
      }
    });
    if (!newCardBrandInfo) {
      newCardBrandInfo = CardBrands["NONE"];
    }
    setCardBrand(newCardBrandInfo);
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
