import { useMemo } from "react";
import type { CardBrand } from "@/lib/cardBrand/types";
import { formatCardNumber } from "@/lib/cardBrand/utils/formatCardNumber";

interface UseFormatCardNumberPrams {
  cardNumber: string;
  cardBrand: CardBrand;
}

const useFormatCardNumber = ({
  cardNumber,
  cardBrand,
}: UseFormatCardNumberPrams): string => {
  return useMemo(
    () => formatCardNumber(cardNumber, cardBrand),
    [cardNumber, cardBrand]
  );
};

export default useFormatCardNumber;
