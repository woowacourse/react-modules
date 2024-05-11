import { useState } from "react";

import { INPUT_REGEX_PARAMS } from "../../constants/regex";
import { MAX_LENGTH_ERROR_MESSAGE } from "../../constants/errorMessage";

function useCardNumbers() {
  const [cardNumbers, setCardNumbers] = useState("");
  const [cardNumberError, setCardNumberError] = useState(false);
  const [cardBrand, setCardBrand] = useState("domestic");
  const [cardNumberMaxLength, setCardNumberMaxLength] = useState(16);
  const [formattedCardNumbers, setFormattedCardNumbers] = useState("");

  const checkCardBrand = (value: string) => {
    const twoDigitValue = Number(value.substring(0, 2));
    const valueToNumber = Number(value.substring(0, 3));

    const inputValue = {
      cardBrand: "domestic",
    };

    if (value.startsWith("4")) {
      inputValue.cardBrand = "visa";
      setCardNumberMaxLength(16);
    } else if (twoDigitValue > 50 && twoDigitValue < 56) {
      inputValue.cardBrand = "masterCard";
      setCardNumberMaxLength(16);
    } else if (twoDigitValue === 36) {
      inputValue.cardBrand = "diners";
      setCardNumberMaxLength(14);
    } else if (twoDigitValue === 34 || twoDigitValue === 37) {
      inputValue.cardBrand = "amex";
      setCardNumberMaxLength(15);
    } else if (
      (valueToNumber >= 624 && valueToNumber <= 626) ||
      (valueToNumber >= 6282 && valueToNumber <= 6288) ||
      (valueToNumber >= 622126 && valueToNumber <= 622925)
    ) {
      inputValue.cardBrand = "unionPay";
      setCardNumberMaxLength(16);
    }
    return inputValue;
  };

  const handleCardNumbersChange = (value: string) => {
    const { cardBrand } = checkCardBrand(value);
    setCardBrand(cardBrand);

    const isValidNumber =
      INPUT_REGEX_PARAMS.cardNumber(cardNumberMaxLength).test(value);
    setCardNumberError(!isValidNumber);
    setCardNumbers(value);

    handleCardNumbersFormat(value);
  };

  const handleCardNumbersFormat = (value: string) => {
    const formattedValue = {
      first: "",
      second: "",
      third: "",
      last: "",
    };
    if (cardBrand === "diners" || cardBrand === "amex") {
      formattedValue.first = value.substring(0, 4);
      formattedValue.second = value.substring(4, 10);
      formattedValue.third = value.substring(10, value.length);
    } else {
      formattedValue.first = value.substring(0, 4);
      formattedValue.second = value.substring(4, 8);
      formattedValue.third = value.substring(8, 12);
      formattedValue.last = value.substring(12, value.length);
    }

    const formattedValueToString = Object.values(formattedValue).join(" ");
    setFormattedCardNumbers(formattedValueToString);
  };

  const getCardNumbersErrorMessage = () => {
    return cardNumberError
      ? MAX_LENGTH_ERROR_MESSAGE(cardNumberMaxLength)
      : null;
  };

  return {
    cardNumbers,
    formattedCardNumbers,
    cardNumberMaxLength,
    cardBrand,
    cardNumberError,
    getCardNumbersErrorMessage,
    handleCardNumbersChange,
  };
}

export default useCardNumbers;
