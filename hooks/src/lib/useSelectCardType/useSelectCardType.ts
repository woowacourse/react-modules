import { ChangeEvent, useState } from "react";
import { CARD } from "../constants/option";
import Validator from "../utils/validator";

type CardType = keyof typeof CARD;

const useSelectCardType = (initialSelected?: CardType) => {
  const [selectedCardType, setSelectedCardType] = useState<CardType | null>(
    initialSelected || null
  );

  const handleSelectCardTypeChange = (e: ChangeEvent<HTMLButtonElement | HTMLSelectElement>) => {
    if (e.target !== e.currentTarget) return;

    const { value } = e.target;
    if (!Validator.checkCardType(value)) return;

    setSelectedCardType(value as CardType);
  };

  return { selectedCardType, handleSelectCardTypeChange } as const;
};

export default useSelectCardType;
