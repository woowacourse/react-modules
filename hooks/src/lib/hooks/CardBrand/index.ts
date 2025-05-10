import { useEffect, useMemo, useState } from "react";
import { formatCardNumber, getCardBrand, getCardBrandError } from "./utils";
import { CardBrand } from "./types";

const useCardBrand = (cardNumber: string) => {
  const [cardBrand, setCardBrand] = useState<CardBrand | null>(null);

  useEffect(
    function checkCardBrand() {
      const cleanCardNumber = cardNumber.replace(/-/g, "");
      const findCardBrand = getCardBrand(cleanCardNumber);

      if (findCardBrand) {
        setCardBrand(findCardBrand);
        return;
      }

      setCardBrand(null);
    },
    [cardNumber]
  );

  const formattedCardNumber = useMemo(() => {
    if (!cardBrand) {
      return cardNumber;
    }

    const cleanCardNumber = cardNumber.replace(/-/g, "");
    return formatCardNumber(cleanCardNumber, cardBrand);
  }, [cardNumber, cardBrand]);

  return {
    cardBrand,
    formattedCardNumber,
    errorState: getCardBrandError(cardBrand),
  };
};

export default useCardBrand;
