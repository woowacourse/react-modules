import { useState } from "react";
import { CardIdentifier, identifyCard } from "../util/cardIdentifier";

export const useCardIdentifier = () => {
  const [cardIdentifier, setCardIdentifier] = useState<CardIdentifier | undefined>(undefined);
  const [isTouched, setIsTouched] = useState(false);

  const handleCardIdentifierChange = (value: string) => {
    if (!isTouched) setIsTouched(true);
    setCardIdentifier(identifyCard(value));
  };

  return { cardIdentifier, handleCardIdentifierChange };
};
