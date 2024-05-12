import { useEffect, useState } from "react";
import useInput, { ValidationType } from "../useInput/useInput";
import getCardBrand from "../utils/getCardBrand";
import getCardFormat, { CardBrand } from "../utils/getCardFormat";

const CARD_NUMBER_LENGTH: Record<CardBrand | "", number> = {
  visa: 16,
  mastercard: 16,
  diners: 14,
  amex: 15,
  unionpay: 16,
  "": 16,
};

const useCardNumbers = (initialValue: string = "") => {
  const [cardBrand, setCardBrand] = useState<CardBrand | "">("");

  const inputValidations: ValidationType[] = [
    {
      validate: (value: string, cardBrand?: CardBrand | "") => {
        return value.length === CARD_NUMBER_LENGTH[cardBrand!];
      },
      message: (cardBrand?: CardBrand | "") => {
        return `${CARD_NUMBER_LENGTH[cardBrand!]}자리의 카드 번호를 입력해 주세요.`;
      },
    },
  ];

  const preventInputValidations: ValidationType[] = [
    {
      validate: (value: string) => {
        return /^[\d\s]*$/.test(value);
      },
      message: "숫자를 입력해 주세요.",
    },
  ];

  const cardNumbers = useInput({
    initialValue: initialValue,
    inputValidations,
    preventInputValidations,
    cardBrand,
  });

  const isCardNumbersValid = cardNumbers.value !== "" && !cardNumbers.error.state;

  useEffect(() => {
    const currentCardNumber = cardNumbers.value.replace(/\s/g, "");
    const brand = getCardBrand(currentCardNumber) as CardBrand;

    if (brand in CARD_NUMBER_LENGTH && currentCardNumber.length <= CARD_NUMBER_LENGTH[brand]) {
      setCardBrand(brand);
      const cardFormat = getCardFormat(currentCardNumber, cardBrand);

      cardNumbers.changeValue(cardFormat);
    } else {
      setCardBrand("");
    }
  }, [cardNumbers.value]);

  return { cardNumbers, cardBrand, isCardNumbersValid };
};

export default useCardNumbers;
