import { isValidNumber } from "../../util";
import { useState, useMemo, useCallback } from "react";

function validateCardNumberLength({
  cardNumber,
  maxLength,
  brand,
}: {
  cardNumber: string;
  maxLength: number;
  brand: string;
}) {
  const cardLength = cardNumber.length;
  if (cardLength < maxLength) {
    return `${brand} 카드 번호는 ${maxLength}자리여야 합니다.`;
  }
}

const cardBranRule = {
  Visa: {
    inputCount: 4,
    length: 16,
    ranges: [[4]],
    format: (cardNumber: string) =>
      cardNumber
        .replace(/(\d{4})(\d{4})(\d{4})(\d{0,4})/, "$1 $2 $3 $4")
        .split(" "),
    validateLength: (cardNumber: string) =>
      validateCardNumberLength({
        cardNumber,
        maxLength: 16,
        brand: "Visa",
      }),
  },
  MasterCard: {
    inputCount: 4,
    length: 16,
    ranges: [[51, 55]],
    format: (cardNumber: string) =>
      cardNumber
        .replace(/(\d{4})(\d{4})(\d{4})(\d{0,4})/, "$1 $2 $3 $4")
        .split(" "),
    validateLength: (cardNumber: string) =>
      validateCardNumberLength({
        cardNumber,
        maxLength: 16,
        brand: "MasterCard",
      }),
  },
  Diners: {
    inputCount: 3,
    length: 14,
    ranges: [[36]],
    format: (cardNumber: string) =>
      cardNumber.replace(/(\d{4})(\d{6})(\d{0,4})/, "$1 $2 $3").split(" "),
    validateLength: (cardNumber: string) =>
      validateCardNumberLength({
        cardNumber,
        maxLength: 14,
        brand: "Diners",
      }),
  },
  AMEX: {
    inputCount: 3,
    length: 15,
    ranges: [[34], [37]],
    format: (cardNumber: string) =>
      cardNumber.replace(/(\d{4})(\d{6})(\d{0,5})/, "$1 $2 $3").split(" "),
    validateLength: (cardNumber: string) =>
      validateCardNumberLength({
        cardNumber,
        maxLength: 15,
        brand: "AMEX",
      }),
  },
  UnionPay: {
    inputCount: 4,
    length: 16,
    ranges: [
      [622126, 622925],
      [624, 626],
      [6282, 6288],
    ],
    format: (cardNumber: string) =>
      cardNumber
        .replace(/(\d{4})(\d{4})(\d{4})(\d{0,4})/, "$1 $2 $3 $4")
        .split(" "),
    validateLength: (cardNumber: string) =>
      validateCardNumberLength({
        cardNumber,
        maxLength: 16,
        brand: "UnionPay",
      }),
  },
  Unknown: {
    inputCount: 1,
    length: 16,
    ranges: [[0]],
    format: (cardNumber: string) => [cardNumber],
    validateLength: (cardNumber: string) =>
      validateCardNumberLength({
        cardNumber,
        maxLength: 16,
        brand: "Unknown",
      }),
  },
};

type CardType = keyof typeof cardBranRule;

export default function useCardNumber() {
  const [cardNumber, setCardNumber] = useState("");
  const [cardNumberError, setCardNumberError] = useState("");

  function changeCardNumber(value: string) {
    setCardNumber(value);
  }

  const cardBrand: CardType = useMemo(() => {
    const matched = Object.entries(cardBranRule).find(([_, rule]) => {
      return rule.ranges.some((range) => isInRange(cardNumber, range));
    });

    return (matched?.[0] as CardType) ?? "Unknown";
  }, [cardNumber]);

  const validateCardNumber = useCallback(() => {
    const cardNumberError = cardBranRule[cardBrand].validateLength(cardNumber);
    if (!isValidNumber(cardNumber)) {
      setCardNumberError("카드 번호는 숫자만 입력 가능합니다.");
      return "카드 번호는 숫자만 입력 가능합니다.";
    }
    if (cardNumberError) {
      setCardNumberError(cardNumberError);
      return cardNumberError;
    }
    setCardNumberError("");
  }, [cardNumber, cardBrand]);

  return {
    cardNumber,
    cardBrand,
    formattedCardNumber: cardBranRule[cardBrand].format(cardNumber),
    inputCount: cardBranRule[cardBrand].inputCount,
    changeCardNumber,
    cardNumberError,
    validateCardNumber,
  };
}

function isInRange(card: string, range: number[]): boolean {
  const prefixLength = range[0].toString().length;
  const prefix = parseInt(card.slice(0, prefixLength));

  if (range.length === 1) {
    return prefix === range[0];
  }

  const [start, end] = range;
  return prefix >= start && prefix <= end;
}

/*
Visa : 4로 시작하는 16자리 숫자
- 예시: 4123 4567 8912 3456
MasterCard : 51~55로 시작하는 16자리 숫자
- 예시: 5123 4567 8912 3456
Diners : 36으로 시작하는 14자리 숫자
 - 예시: 3612 345678 9012
AMEX : 34, 37로 시작하는 15자리 숫자 
- 예시 (34로 시작): 3412 345678 90123
유니온페이 : 카드의 앞 번호가 아래 3가지 조건을 만족하는 16자리 숫자
- 622126~622925로 시작하는 경우: 6221 2612 3456 7890
- 624~626로 시작하는 경우: 6240 1234 5678 9012
- 6282~6288로 시작하는 경우: 6282 1234 5678 9012
*/
