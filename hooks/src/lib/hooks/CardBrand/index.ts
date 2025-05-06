import { useEffect, useMemo, useState } from "react";
import { formatCardNumber, getCardBrand } from "./utils";
import { CardBrand } from "./types";

const useCardBrand = (cardNumber: string) => {
  const [cardBrand, setCardBrand] = useState<CardBrand | null>(null);

  useEffect(
    function checkCardBrand() {
      const cleanCardNumber = cardNumber.replaceAll("-", "");
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

    const cleanCardNumber = cardNumber.replaceAll("-", "");
    return formatCardNumber(cleanCardNumber, cardBrand);
  }, [cardNumber, cardBrand]);

  return {
    cardBrand,
    formattedCardNumber,
  };
};

export default useCardBrand;
