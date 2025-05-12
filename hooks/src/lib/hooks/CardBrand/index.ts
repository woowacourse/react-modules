import { useMemo } from "react";
import { UseCardBrandReturn } from "../types";
import { getCardBrand } from "@/lib/cardBrand/utils/getCardBrand";
import { getCardBrandError } from "@/lib/cardBrand/utils/getCardBrandError";

const useCardBrand = (cardNumber: string): UseCardBrandReturn => {
  const cardBrand = useMemo(() => getCardBrand(cardNumber), [cardNumber]);
  const errorState = useMemo(() => getCardBrandError(cardBrand), [cardBrand]);

  return {
    value: cardBrand,
    errorState,
  };
};

export default useCardBrand;
