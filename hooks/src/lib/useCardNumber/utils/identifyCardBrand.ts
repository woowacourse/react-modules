import { getObjectKeys } from "../../utils/getObjectKeys";
import { CARD_BRAND, CardBrand, VALID_CARD_BRAND, ValidCardBrand } from "../constants/cardBrand";
import { cardBrandRule } from "./cardBrandRule";

export function identifyCardBrand(cardNumber: string): CardBrand {
  const cardBrands = getObjectKeys(VALID_CARD_BRAND);

  const matchesWithGivenNumber = (cardBrand: ValidCardBrand) => {
    const { testPrefix, length } = cardBrandRule[cardBrand];
    return testPrefix(cardNumber) && cardNumber.length <= length;
  };

  const foundCardBrand = cardBrands.find(matchesWithGivenNumber);

  return foundCardBrand || CARD_BRAND.UNKNOWN;
}
