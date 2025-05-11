import { useEffect, useState } from "react";
import { CardBrand } from "./types";
import { detectCardBrand } from "./utils/detectCardBrand";

export function useCardBrand(cardNumberParts: string[]): CardBrand | null {
  const [cardBrand, setCardBrand] = useState<CardBrand | null>(null);

  useEffect(() => {
    const detected = detectCardBrand(cardNumberParts);
    setCardBrand(detected);
  }, [cardNumberParts]);

  return cardBrand;
}
