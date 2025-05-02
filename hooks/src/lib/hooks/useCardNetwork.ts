import { useState, useCallback, useMemo } from "react";

export type CardNetwork = "VISA" | "MASTERCARD" | "DEFAULT";

export const getCardNetwork = (cardNumber: string): CardNetwork => {
  const cleaned = cardNumber.replace(/\D/g, "");
  if (cleaned.startsWith("4")) return "VISA";
  if (/^5[1-5]/.test(cleaned)) return "MASTERCARD";
  if (cleaned.length >= 4) {
    const prefix = parseInt(cleaned.slice(0, 4), 10);
    if (2221 <= prefix && prefix <= 2720) return "MASTERCARD";
  }
  return "DEFAULT";
};

export default function useCardNetwork(initial = "") {
  const [cardNumber, setCardNumber] = useState(initial);

  const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setCardNumber(e.target.value.trim());
  }, []);

  const cardNetwork = useMemo(() => getCardNetwork(cardNumber), [cardNumber]);

  return { cardNumber, onChange, cardNetwork };
}
