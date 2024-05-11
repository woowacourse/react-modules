import { useState } from "react";
import { CARD_BRAND_REGEX } from "../constants/regex";

function useCardBrand() {
  const [cardBrand, setCardBrand] = useState("unknown");

  const detectCardBrand = (value: string) => {
    for (const [brand, regex] of Object.entries(CARD_BRAND_REGEX)) {
      if (regex.test(value)) {
        return brand;
      }
    }

    return "unknown";
  };

  const handleCardBrandChange = (value: string) => {
    setCardBrand(detectCardBrand(value));
  };

  return { cardBrand, handleCardBrandChange };
}

export default useCardBrand;
