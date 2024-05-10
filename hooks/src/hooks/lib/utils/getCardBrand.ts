import CARD_BRAND from "../constants/cardBrand";

type CardBrand = "VISA" | "MASTER_CARD" | "DINERS" | "AMEX" | "UNION_PAY" | "UNDEFINED";

const getCardBrand = (cardNumbers: string) => {
  let cardBrand: CardBrand = "UNDEFINED";

  const cleanedCardNumber = cardNumbers.replace(/\D/g, "");

  for (const [brand, brandInfo] of Object.entries(CARD_BRAND)) {
    if (brandInfo.patterns.test(cleanedCardNumber)) {
      cardBrand = brand as CardBrand;
      return cardBrand;
    }
  }
  cardBrand = "UNDEFINED";

  return cardBrand;
};

export default getCardBrand;
