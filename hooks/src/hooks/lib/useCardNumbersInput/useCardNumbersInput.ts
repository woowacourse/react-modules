import { useEffect, useState } from "react";
import validator from "../utils/validate";
import ERROR_MESSAGE from "../constants/errorMessage";
import useCardBrand from "../useCardBrand/useCardBrand";
import CARD_BRAND from "../constants/cardBrand";

type CardBrand = "VISA" | "MASTER_CARD" | "DINERS" | "AMEX" | "UNION_PAY" | "UNDEFINED";

interface CardNumbersState {
  value: string;
  isValid: boolean;
  errorMessage: string;
}

interface Props {
  CardNumbersState: CardNumbersState;
  handleCardNumbersChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  CardBrand: CardBrand;
}

const useCardNumbersInput = (): Props => {
  const [cardNumbersState, setCardNumbersState] = useState<CardNumbersState>({
    value: "",
    isValid: false,
    errorMessage: "",
  });
  const { cardBrand, detectCardBrand } = useCardBrand();
  const [rawValue, setRawValue] = useState("");

  const handleCardNumbersChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\s+/g, "");
    setRawValue(value);
    detectCardBrand(value);
  };

  useEffect(() => {
    let isValid = true;
    let errorMessage = "";
    const slicedValue = rawValue.slice(0, CARD_BRAND[cardBrand].matchedLength);

    if (!validator.isValidEmptyValue(slicedValue)) {
      isValid = false;
      errorMessage = ERROR_MESSAGE.EMPTY_VALUE;
    } else if (!validator.isValidDigit(slicedValue)) {
      isValid = false;
      errorMessage = ERROR_MESSAGE.ONLY_NUMBER;
    } else if (!validator.isValidLength({ value: slicedValue, matchedLength: CARD_BRAND[cardBrand].matchedLength })) {
      isValid = false;
      errorMessage = ERROR_MESSAGE.INVALID_CARD_NUMBER_LENGTH(CARD_BRAND[cardBrand].name, CARD_BRAND[cardBrand].matchedLength);
    }

    setCardNumbersState({
      value: rawValue,
      isValid,
      errorMessage,
    });
  }, [rawValue, cardBrand]);

  return { CardNumbersState: cardNumbersState, handleCardNumbersChange, CardBrand: cardBrand };
};

export default useCardNumbersInput;
