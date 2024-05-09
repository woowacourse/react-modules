import { useState, ChangeEvent, useEffect } from "react";
import { CardBrands } from "../types/card";

const isNumberString = (numberString: string) => {
  return numberString.split("").every((char) => Number.isInteger(Number(char)));
};

const isDiners = (numberString: string) => {
  return numberString.substring(0, 2) === "36";
};

const isAMEX = (numberString: string) => {
  return (
    numberString.substring(0, 2) === "34" ||
    numberString.substring(0, 2) === "37"
  );
};

const isUnionPay = (numberString: string) => {
  return (
    (622126 <= Number(numberString.substring(0, 6)) &&
      Number(numberString.substring(0, 6)) <= 622925) ||
    (624 <= Number(numberString.substring(0, 3)) &&
      Number(numberString.substring(0, 3)) <= 626) ||
    (6282 <= Number(numberString.substring(0, 4)) &&
      Number(numberString.substring(0, 4)) <= 6288)
  );
};

const isVisa = (numberString: string) => {
  return numberString[0] === "4";
};

const isMasterCard = (numberString: string) => {
  console.log(Number(numberString.substring(0, 2)));
  return (
    51 <= Number(numberString.substring(0, 2)) &&
    Number(numberString.substring(0, 2)) <= 55
  );
};

const createFormattingCardNumbers = (
  cardNumbers: string,
  cardBrand: CardBrands | null
) => {
  if (cardBrand === "Diners" || cardBrand === "UnionPay") {
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

const useCardNumbers = () => {
  const [cardNumbers, setCardNumbers] = useState("");
  const [cardBrand, setCardBrand] = useState<CardBrands | null>(null);
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    if (isDiners(cardNumbers)) {
      setCardBrand("Diners");
    } else if (isAMEX(cardNumbers)) {
      setCardBrand("AMEX");
    } else if (isUnionPay(cardNumbers)) {
      setCardBrand("UnionPay");
    } else if (isVisa(cardNumbers)) {
      setCardBrand("Visa");
    } else if (isMasterCard(cardNumbers)) {
      setCardBrand("Mastercard");
    } else {
      setCardBrand(null);
    }
  }, [cardNumbers]);

  const handleCardNumbers = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value.replace("-", "");

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
