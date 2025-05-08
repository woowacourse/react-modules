import { useState } from "react";
import { validateCardNumber } from "./utils";

const useCardNumber = (initialState: string = "") => {
  const [cardNumber, setCardNumber] = useState<string>(initialState);

  const handleCardNumberChange = (value: string) => {
    const numbersOnly = value.replace(/[^0-9]/g, "");
    if (numbersOnly.length > 16) {
      return;
    }
    setCardNumber(numbersOnly);
  };

  const getCardType = () => {
    const firstTwoDigits = cardNumber.substring(0, 2);
    const firstFourDigits = cardNumber.substring(0, 4);
    const firstSixDigits = cardNumber.substring(0, 6);

    // Diners: 36으로 시작하는 14자리
    if (firstTwoDigits === "36") {
      return "diners";
    }

    // AMEX: 34, 37로 시작하는 15자리
    if (firstTwoDigits === "34" || firstTwoDigits === "37") {
      return "amex";
    }

    // UnionPay: 16자리
    // 622126~622925로 시작
    if (firstSixDigits >= "622126" && firstSixDigits <= "622925") {
      return "unionpay";
    }

    // 624~626로 시작
    if (firstFourDigits >= "6240" && firstFourDigits <= "6269") {
      return "unionpay";
    }

    // 6282~6288로 시작
    if (firstFourDigits >= "6282" && firstFourDigits <= "6288") {
      return "unionpay";
    }

    return "unknown";
  };

  const { isValid, errorMessage } = validateCardNumber(
    cardNumber,
    getCardType()
  );

  const getFormattedCardNumber = () => {
    const cardType = getCardType();
    if (cardType === "unknown") {
      return cardNumber;
    } else if (cardType === "diners") {
      // 3612 345678 9012
      return cardNumber.replace(/(\d{4})(\d{6})(\d{4})/, "$1 $2 $3");
    } else if (cardType === "amex") {
      // 3412 345678 90123
      return cardNumber.replace(/(\d{4})(\d{6})(\d{5})/, "$1 $2 $3");
    } else if (cardType === "unionpay") {
      // 6221 2612 3456 7890
      return cardNumber.replace(/(\d{4})(\d{4})(\d{4})(\d{4})/, "$1 $2 $3 $4");
    }
  };

  return {
    cardNumber,
    handleCardNumberChange,
    cardType: getCardType(),
    isValid,
    errorMessage,
    getFormattedCardNumber,
  };
};

export default useCardNumber;
