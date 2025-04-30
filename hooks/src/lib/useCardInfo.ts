import { useState } from "react";
import { CardInfo, CardNumber, Expiration } from "../types/Card";

export function useCardInfo() {
  const [cardInfo, setCardInfo] = useState<CardInfo>({
    number: {
      first: "",
      second: "",
      third: "",
      fourth: "",
    },
    expiration: {
      month: "",
      year: "",
    },
    company: "",
    cvc: "",
    passwordFront: "",
  });

  function handleCardInfo(
    field: keyof CardInfo,
    value: string,
    subfield?: keyof CardNumber | keyof Expiration
  ) {
    if ((field === "number" || field === "expiration") && subfield) {
      setCardInfo({
        ...cardInfo,
        [field]: {
          ...cardInfo[field],
          [subfield]: value,
        },
      });
    }

    if (field === "company" || field === "cvc" || field === "passwordFront") {
      setCardInfo({
        ...cardInfo,
        [field]: value,
      });
    }
  }

  return { cardInfo, handleCardInfo };
}

export default useCardInfo;
