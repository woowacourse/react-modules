import { useState, useCallback, useMemo } from "react";
import { strictCardBrandChecker } from "../utils/card-brand-checker";

export default function useCardNetwork(initial = "") {
  const [cardNumber, setCardNumber] = useState(initial);

  const onChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setCardNumber(value.replace(/\D/g, ""));
  }, []);
  const cardNetwork = useMemo(
    () => strictCardBrandChecker(cardNumber),
    [cardNumber]
  );

  return { cardNumber, onChange, cardNetwork };
}
