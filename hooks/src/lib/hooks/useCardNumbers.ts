import { useState, ChangeEvent, useEffect } from "react";
import { CardBrands } from "../types/card";
import {
  isNumberString,
  createFormattingCardNumbers,
  decideCardBrand,
} from "../utils/card";

const useCardNumbers = () => {
  const [cardNumbers, setCardNumbers] = useState("");
  const [cardBrand, setCardBrand] = useState<CardBrands | null>(null);
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    setCardBrand(decideCardBrand(cardNumbers));
  }, [cardNumbers]);

  const handleCardNumbers = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value.replaceAll("-", "");

    if (!isNumberString(value)) {
      setIsError(true);
      setErrorMessage("숫자만 입력 가능합니다");
      return;
    }
    setIsError(false);

    setCardNumbers(value);
  };

  return {
    cardNumbers: createFormattingCardNumbers(cardNumbers, cardBrand),
    cardBrand,
    handleCardNumbers,
    isError,
    errorMessage,
  };
};

export default useCardNumbers;
