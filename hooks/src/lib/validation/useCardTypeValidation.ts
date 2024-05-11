import { useState } from "react";
import { CARD_TYPE } from "../constants/cardType";
import { CARD_TYPE_NAME } from "../type";

const isVisaType = (value: string) => {
  const cardBrandNumber = parseInt(value.substring(0, 1));
  return cardBrandNumber === CARD_TYPE.VISA.start;
};

const isInRange = (value: number, min: number, max: number) => {
  return value >= min && value <= max;
};

const isMasterType = (value: string) => {
  const cardBrandNumber = parseInt(value.substring(0, 2));
  return isInRange(
    cardBrandNumber,
    CARD_TYPE.MASTER.start,
    CARD_TYPE.MASTER.end
  );
};

const isDinersType = (value: string) => {
  const cardBrandNumber = parseInt(value.substring(0, 2));
  return cardBrandNumber === CARD_TYPE.DINERS.start;
};

const isAmexType = (value: string) => {
  const cardBrandNumber = parseInt(value.substring(0, 2));
  return (
    cardBrandNumber === CARD_TYPE.AMEX.start[0] ||
    cardBrandNumber === CARD_TYPE.AMEX.start[1]
  );
};

const isUnionPayType = (value: string) => {
  const cardBrandNumber1 = parseInt(value.substring(0, 6));
  const cardBrandNumber2 = parseInt(value.substring(0, 3));
  const cardBrandNumber3 = parseInt(value.substring(0, 4));

  return (
    isInRange(
      cardBrandNumber1,
      CARD_TYPE.UNION_PAY.condition1.start,
      CARD_TYPE.UNION_PAY.condition1.end
    ) ||
    isInRange(
      cardBrandNumber2,
      CARD_TYPE.UNION_PAY.condition2.start,
      CARD_TYPE.UNION_PAY.condition2.end
    ) ||
    isInRange(
      cardBrandNumber3,
      CARD_TYPE.UNION_PAY.condition3.start,
      CARD_TYPE.UNION_PAY.condition3.end
    )
  );
};

const useCardTypeValidation = () => {
  const [cardType, setCardType] = useState<CARD_TYPE_NAME>("EMPTY");

  const handleCardType = (value: string) => {
    if (isVisaType(value)) return setCardType("VISA");
    if (isMasterType(value)) return setCardType("MASTER");
    if (isDinersType(value)) return setCardType("DINERS");
    if (isAmexType(value)) return setCardType("AMEX");
    if (isUnionPayType(value)) return setCardType("UNION_PAY");

    return setCardType("EMPTY");
  };

  return { cardType, handleCardType };
};

export default useCardTypeValidation;
