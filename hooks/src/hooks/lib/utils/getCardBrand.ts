import CARD_BRAND from "../constants/cardBrand";
import { CardBrand } from "../type/cardType";

const getCardBrand = (cardNumbers: string) => {
  let cardBrand: CardBrand = "UNKNOWN";

  const cleanedCardNumber = cardNumbers.replace(/\D/g, "");

  for (const [brand, brandInfo] of Object.entries(CARD_BRAND)) {
    if (brandInfo.patterns.test(cleanedCardNumber)) {
      cardBrand = brand as CardBrand;
      return cardBrand;
    }
  }
  cardBrand = "UNKNOWN";

  return cardBrand;
};

export default getCardBrand;
