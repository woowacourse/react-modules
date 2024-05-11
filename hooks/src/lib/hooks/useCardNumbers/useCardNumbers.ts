import { useState } from "react";

import { INPUT_REGEX_PARAMS } from "../../constants/regex";
import { MAX_LENGTH_ERROR_MESSAGE } from "../../constants/errorMessage";

function useCardNumbers() {
  const [cardNumbers, setCardNumbers] = useState("");
  const [cardNumberErrors, setCardNumberErrors] = useState(false);

  const checkCardBrand = (
    value: string
  ): { cardBrand: string; maxLength: number } => {
    const inputLength = value.length;
    const twoDigitValue = Number(value.substring(0, 2));
    const valueToNumber = Number(value.substring(0, inputLength));

    const inputValue = {
      cardBrand: "domestic",
      maxLength: 16,
    };

    if (value.startsWith("4")) {
      inputValue.cardBrand = "visa";
      inputValue.maxLength = 16;
    } else if (twoDigitValue > 50 && twoDigitValue < 56) {
      inputValue.cardBrand = "masterCard";
      inputValue.maxLength = 16;
    } else if (twoDigitValue === 36) {
      inputValue.cardBrand = "diners";
      inputValue.maxLength = 14;
    } else if (twoDigitValue === 34 || twoDigitValue === 37) {
      inputValue.cardBrand = "amex";
      inputValue.maxLength = 15;
    } else if (
      (valueToNumber >= 624 && valueToNumber <= 626) ||
      (valueToNumber >= 6282 && valueToNumber <= 6288) ||
      (valueToNumber >= 622126 && valueToNumber <= 622925)
    ) {
      inputValue.cardBrand = "unionPay";
      inputValue.maxLength = 16;
    }
    return inputValue;
  };

  const handleCardNumbersChange = (value: string) => {
    // 1. 입력 받을 때마다 카드 브랜드 검사 - 앞쪽 글자 확인
    const { cardBrand, maxLength } = checkCardBrand(value);
    console.log(value, cardBrand, maxLength);

    // 2. 카드 브랜드에 맞게 maxLength 설정

    // 3. 포맷팅

    // const isValidNumber = INPUT_REGEX_PARAMS.cardNumber(maxLength).test(value);

    //   const updatedErrors = [...cardNumberErrors];
    //   updatedErrors[inputIndex] = !isValidNumber;
    //   setCardNumberErrors(updatedErrors);

    //   const updatedNumbers = [...cardNumbers];
    //   updatedNumbers[inputIndex] = value;
    //   setCardNumbers(updatedNumbers);
  };

  // const getCardNumbersErrorMessage = () => {
  //   return cardNumberErrors.some((isError) => isError)
  //     ? MAX_LENGTH_ERROR_MESSAGE(maxLength)
  //     : undefined;
  // };

  return {
    cardNumbers,
    // cardNumberErrors,
    // getCardNumbersErrorMessage,
    handleCardNumbersChange,
  };
}

export default useCardNumbers;
