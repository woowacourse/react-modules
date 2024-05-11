import { useState } from "react";

import { INPUT_REGEX_PARAMS } from "../../constants/regex";
import { MAX_LENGTH_ERROR_MESSAGE } from "../../constants/errorMessage";

function useCardNumbers() {
  const [cardNumbers, setCardNumbers] = useState("");
  const [cardNumberError, setCardNumberError] = useState(false);
  const [cardBrand, setCardBrand] = useState("domestic");
  const [cardNumberMaxLength, setCardNumberMaxLength] = useState(0);

  const checkCardBrand = (value: string) => {
    const twoDigitValue = Number(value.substring(0, 2));
    const valueToNumber = Number(value.substring(0, 3));

    const inputValue = {
      cardBrand: "domestic",
      // maxLength: 16,
    };

    if (value.startsWith("4")) {
      inputValue.cardBrand = "visa";
      setCardNumberMaxLength(16);
      // inputValue.maxLength = 16;
    } else if (twoDigitValue > 50 && twoDigitValue < 56) {
      inputValue.cardBrand = "masterCard";
      setCardNumberMaxLength(16);
      // inputValue.maxLength = 16;
    } else if (twoDigitValue === 36) {
      inputValue.cardBrand = "diners";
      setCardNumberMaxLength(14);
      // inputValue.maxLength = 14;
    } else if (twoDigitValue === 34 || twoDigitValue === 37) {
      inputValue.cardBrand = "amex";
      setCardNumberMaxLength(15);
      // inputValue.maxLength = 15;
    } else if (
      (valueToNumber >= 624 && valueToNumber <= 626) ||
      (valueToNumber >= 6282 && valueToNumber <= 6288) ||
      (valueToNumber >= 622126 && valueToNumber <= 622925)
    ) {
      inputValue.cardBrand = "unionPay";
      setCardNumberMaxLength(16);
      // inputValue.maxLength = 16;
    }
    return inputValue;
  };

  const handleCardNumbersChange = (value: string) => {
    // 1. 입력 받을 때마다 카드 브랜드 검사 - 앞쪽 글자 확인
    const { cardBrand } = checkCardBrand(value);
    setCardBrand(cardBrand);

    // 2. 카드 브랜드에 맞게 maxLength 설정
    const isValidNumber =
      INPUT_REGEX_PARAMS.cardNumber(cardNumberMaxLength).test(value);
    setCardNumberError(!isValidNumber);
    setCardNumbers(value);
    
    // 3. 포맷팅
  };

  const getCardNumbersErrorMessage = () => {
    return cardNumberError
      ? MAX_LENGTH_ERROR_MESSAGE(cardNumberMaxLength)
      : null;
  };

  return {
    cardNumbers,
    cardNumberMaxLength,
    cardBrand,
    // cardNumberError,
    getCardNumbersErrorMessage,
    handleCardNumbersChange,
  };
}

export default useCardNumbers;
