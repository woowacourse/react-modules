import { useMemo } from "react";
import { formatCardNumber, getCardBrand, getCardBrandError } from "./utils";

const useCardBrand = (cardNumber: string) => {
  const cardBrand = useMemo(() => {
    const cleanCardNumber = cardNumber.replace(/-/g, "");
    const findCardBrand = getCardBrand(cleanCardNumber);

    return findCardBrand || null;
  }, [cardNumber]);

  const formattedCardNumber = useMemo(() => {
    if (!cardBrand) {
      return cardNumber;
    }

    const cleanCardNumber = cardNumber.replace(/-/g, "");
    return formatCardNumber(cleanCardNumber, cardBrand);
  }, [cardNumber, cardBrand]);

  return {
    value: cardBrand,
    formattedValue: formattedCardNumber,
    errorState: getCardBrandError(cardBrand),
  };
};

export default useCardBrand;
