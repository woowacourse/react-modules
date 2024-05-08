import { getObjectKeys } from "../../utils/getObjectKeys";
import { VALID_CARD_BRAND, ValidCardBrand } from "../constants/cardBrand";
import { cardBrandRule } from "./cardBrandRule";

export function hasCardBrand(cardNumber: string): boolean {
  const cardBrands = getObjectKeys(VALID_CARD_BRAND);

  const exactlyMatchesWithGivenNumber = (cardBrand: ValidCardBrand) => {
    const { testPrefix, length } = cardBrandRule[cardBrand];
    return testPrefix(cardNumber) && cardNumber.length === length;
  };

  return cardBrands.some(exactlyMatchesWithGivenNumber);
}
