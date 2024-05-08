import { CardBrand } from "../useCardBrand";
import CardBrandMatcher from "./CardBrandMatcher";

const generateCardBrand = (cardNumbers: string): CardBrand => {
  if (CardBrandMatcher.isVisa(cardNumbers)) {
    return "Visa";
  }

  if (CardBrandMatcher.isMasterCard(cardNumbers)) {
    return "MasterCard";
  }

  if (CardBrandMatcher.isDiners(cardNumbers)) {
    return "Diners";
  }

  if (CardBrandMatcher.isAMEX(cardNumbers)) {
    return "AMEX";
  }

  if (CardBrandMatcher.isUnionPay(cardNumbers)) {
    return "UnionPay";
  }

  return "";
};

export default generateCardBrand;
