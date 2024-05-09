import { useState } from "react";
import CARD_BRAND from "../constants/cardBrand";

type CardBrand = "VISA" | "MASTER_CARD" | "DINERS" | "AMEX" | "UNION_PAY" | "UNDEFINED";

const useCardBrand = () => {
  const [cardBrand, setCardBrand] = useState<CardBrand>("UNDEFINED");

  const detectCardBrand = (cardNumbers: string) => {
    const cleanedCardNumber = cardNumbers.replace(/\D/g, "");

    for (const [brand, brandInfo] of Object.entries(CARD_BRAND)) {
      if (brandInfo.patterns.test(cleanedCardNumber)) {
        setCardBrand(brand as CardBrand);
        return;
      }
    }
    setCardBrand("UNDEFINED");
  };

  return { cardBrand, detectCardBrand };
};

export default useCardBrand;
