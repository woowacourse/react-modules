import { useMemo } from "react";
import { CardBrand } from "../CardBrand/types";
import { formatCardNumber } from "../CardBrand/utils";

interface UseFormatCardNumberPrams {
  cardNumber: string;
  cardBrand: CardBrand | null;
}

const useFormatCardNumber = ({
  cardNumber,
  cardBrand,
}: UseFormatCardNumberPrams) => {
  return useMemo(() => {
    if (!cardBrand) {
      return cardNumber;
    }

    return formatCardNumber(cardNumber, cardBrand);
  }, [cardNumber, cardBrand]);
};

export default useFormatCardNumber;
