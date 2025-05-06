import { useState, useCallback, useMemo } from "react";
import { strictCheckCardBrand } from "../utils/card-brand-checker";
import { CLIENT_CARD_NUMBER_LENGTH } from "../validator/constants/card-number-length";

export default function useCardNetwork(initial = "") {
  const [cardNumber, setCardNumber] = useState(initial);

  const onChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setCardNumber(value.replace(/\D/g, ""));
  }, []);
  const cardNetwork = useMemo(
    () => strictCheckCardBrand(cardNumber, CLIENT_CARD_NUMBER_LENGTH),
    [cardNumber]
  );

  return { cardNumber, onChange, cardNetwork };
}
