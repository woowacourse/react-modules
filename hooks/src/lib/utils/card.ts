import { CardBrands } from "../types/card";

export const isNumberString = (numberString: string) => {
  return numberString
    .split("")
    .every((char) => Number.isInteger(Number(char)) && char !== " ");
};

export const isDiners = (numberString: string) => {
  return numberString.substring(0, 2) === "36";
};

export const isAMEX = (numberString: string) => {
  return (
    numberString.substring(0, 2) === "34" ||
    numberString.substring(0, 2) === "37"
  );
};

export const isUnionPay = (numberString: string) => {
  return (
    (622126 <= Number(numberString.substring(0, 6)) &&
      Number(numberString.substring(0, 6)) <= 622925) ||
    (624 <= Number(numberString.substring(0, 3)) &&
      Number(numberString.substring(0, 3)) <= 626) ||
    (6282 <= Number(numberString.substring(0, 4)) &&
      Number(numberString.substring(0, 4)) <= 6288)
  );
};

export const isVisa = (numberString: string) => {
  return numberString[0] === "4";
};

export const isMasterCard = (numberString: string) => {
  return (
    51 <= Number(numberString.substring(0, 2)) &&
    Number(numberString.substring(0, 2)) <= 55
  );
};

export const createFormattingCardNumbers = (
  cardNumbers: string,
  cardBrand: CardBrands | null
) => {
  if (cardBrand === "Diners" || cardBrand === "AMEX") {
    let answer = cardNumbers.substring(0, 4);
    if (cardNumbers.substring(4, 10))
      answer += "-" + cardNumbers.substring(4, 10);
    if (cardNumbers.substring(10, 16))
      answer += "-" + cardNumbers.substring(10, 16);
    return answer;
  }

  let answer = cardNumbers.substring(0, 4);
  if (cardNumbers.substring(4, 8)) answer += "-" + cardNumbers.substring(4, 8);
  if (cardNumbers.substring(8, 12))
    answer += "-" + cardNumbers.substring(8, 12);
  if (cardNumbers.substring(12, 16))
    answer += "-" + cardNumbers.substring(12, 16);
  return answer;
};

export const decideCardBrand = (cardNumbers: string) => {
  if (isDiners(cardNumbers)) return "Diners";
  else if (isAMEX(cardNumbers)) return "AMEX";
  else if (isUnionPay(cardNumbers)) return "UnionPay";
  else if (isVisa(cardNumbers)) return "Visa";
  else if (isMasterCard(cardNumbers)) return "Mastercard";
  return null;
};
