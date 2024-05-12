import { useState } from "react";
import { REGEX } from "./constants";

const cardRegex = {
  visa: REGEX.isVisa,
  mastercard: REGEX.isMastercard,
  diners: REGEX.isDiners,
  amex: REGEX.isAmex,
  unionpay: REGEX.isUnionpay,
};

const useCardTypeCheck = () => {
  const [cardType, setCardType] = useState("etc");

  const handleCardTypeChange = (value: string) => {
    for (const [type, regex] of Object.entries(cardRegex)) {
      if (regex.test(value)) {
        setCardType(type);
        console.log(type);
        return type;
      }
    }
    setCardType("etc");
    return "etc";
  };

  return { cardType, handleCardTypeChange };
};

export default useCardTypeCheck;
