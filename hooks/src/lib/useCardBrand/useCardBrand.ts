import { useMemo, useState } from "react";
import { REGEX, CARD_BRAND_MAX_LENGTH, OPTION } from "../constants";

const useCardBrand = (cardNumber: string) => {
  const [cardBrand, setCardBrand] = useState<CardBrandType>(null);

  const maxLength = useMemo(() => {
    for (const brand of Object.keys(CARD_BRAND_MAX_LENGTH)) {
      if (REGEX[brand].test(cardNumber)) {
        setCardBrand(brand as CardBrandType);
        return CARD_BRAND_MAX_LENGTH[brand];
      }
    }

    setCardBrand(null);
    return OPTION.cardNumberMaxLength;
  }, [cardNumber]);

  return { cardBrand, maxLength };
};

export default useCardBrand;
