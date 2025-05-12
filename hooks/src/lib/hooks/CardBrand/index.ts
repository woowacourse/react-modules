import { useMemo } from "react";
import { getCardBrand, getCardBrandError } from "./utils";

const useCardBrand = (cardNumber: string) => {
  const cardBrand = useMemo(() => getCardBrand(cardNumber), [cardNumber]);
  const errorState = useMemo(() => getCardBrandError(cardBrand), [cardBrand]);

  return {
    value: cardBrand,
    errorState,
  };
};

export default useCardBrand;
