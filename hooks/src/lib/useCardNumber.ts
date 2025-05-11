import { useState } from "react";

const numberRegex = /^[0-9]*$/;

interface CustomErrorMessagesType {
  length?: string;
}

const CARD_BRAND = {
  Visa: {
    length: 16,
    format: [4, 4, 4, 4],
    condition: (value: string) => value.startsWith("4"),
  },
  MasterCard: {
    length: 16,
    format: [4, 4, 4, 4],
    condition: (value: string) => {
      const number = Number(value.slice(0, 2));
      return number >= 51 && number <= 55;
    },
  },
  Diners: {
    length: 14,
    format: [4, 6, 4],
    condition: (value: string) => value.startsWith("36"),
  },
  Amex: {
    length: 16,
    format: [4, 6, 5],
    condition: (value: string) =>
      value.startsWith("34") || value.startsWith("37"),
  },
  UnionPay: {
    length: 16,
    format: [4, 4, 4, 4],
    condition: (value: string) => {
      const six = Number(value.slice(0, 6));
      const three = Number(value.slice(0, 3));
      const four = Number(value.slice(0, 4));
      return (
        (six >= 622126 && six <= 622925) ||
        (three >= 624 && three <= 626) ||
        (four >= 6282 && four <= 6288)
      );
    },
  },
  none: { length: null, format: [], condition: null },
};

type CardBrandType = keyof typeof CARD_BRAND;

const getCardBrand = (value: string): CardBrandType => {
  for (const brand in CARD_BRAND) {
    const condition = CARD_BRAND[brand as CardBrandType].condition;
    if (condition && condition(value)) {
      return brand as CardBrandType;
    }
  }
  return "none";
};

export default function useCardNumber(
  customErrorMessage?: CustomErrorMessagesType
) {
  const [cardNumber, setCardNumber] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const isValid = !errorMessage;

  const validateCardNumberLength = (
    value: string,
    cardNumberLength: number | null
  ) => {
    if (cardNumberLength && value.length > cardNumberLength) {
      return;
    }

    setCardNumber(value);

    if (cardNumberLength && value.length < cardNumberLength) {
      setErrorMessage(
        customErrorMessage
          ? `${cardNumberLength}${customErrorMessage}`
          : `${cardNumberLength}자리를 입력해 주세요.`
      );
      return;
    }

    setErrorMessage("");
  };

  const handleCardNumberChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = event.target.value;

    if (!numberRegex.test(value)) return;

    const brand = getCardBrand(value);
    const brandLength = CARD_BRAND[brand].length;

    validateCardNumberLength(value, brandLength);
  };

  const formatCardNumber = () => {
    const pattern = CARD_BRAND[cardBrand()].format;
    let start = 0;

    return pattern
      .map((len) => {
        const number = cardNumber.slice(start, start + len);
        start += len;
        return number;
      })
      .join(" ")
      .trim();
  };

  const cardBrand = (): CardBrandType => {
    return getCardBrand(cardNumber);
  };

  return {
    cardNumber,
    formatCardNumber,
    errorMessage,
    isValid,
    handleCardNumberChange,
    cardBrand,
  };
}
