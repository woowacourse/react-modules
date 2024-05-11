import { useEffect, useState } from "react";
import useInput, { ValidationType } from "../useInput/useInput";
import getCardBrand from "../utils/getCardBrand";

export const CARD_NUMBER_LENGTH = 4;
const CARD_LENGTH: { [key: string]: number } = {
  visa: 4,
  mastercard: 4,
  diners: 14,
  amex: 15,
  unionpay: 16,
};

type InitialValueType = [string, string, string, string];

const isValidLength = (value: string) => {
  return value.length === CARD_NUMBER_LENGTH;
};

const isNumber = (value: string) => {
  return /^\d*$/.test(value);
};

const useCardNumbers = (initialValue: InitialValueType = ["", "", "", ""]) => {
  const inputValidations: ValidationType[] = [
    {
      validate: isValidLength,
      message: `${CARD_NUMBER_LENGTH}자리의 카드 번호를 입력해주세요.`,
    },
  ];

  const preventInputValidations: ValidationType[] = [
    {
      validate: isNumber,
      message: "숫자만 입력 가능합니다.",
    },
  ];

  const cardNumber1 = useInput({
    initialValue: initialValue[0],
    inputValidations,
    preventInputValidations,
  });

  const cardNumber2 = useInput({
    initialValue: initialValue[1],
    inputValidations,
    preventInputValidations,
  });

  const cardNumber3 = useInput({
    initialValue: initialValue[2],
    inputValidations,
    preventInputValidations,
  });

  const cardNumber4 = useInput({
    initialValue: initialValue[3],
    inputValidations,
    preventInputValidations,
  });

  const cardNumbers = [cardNumber1, cardNumber2, cardNumber3, cardNumber4];

  const [cardBrand, setCardBrand] = useState("");

  const isCardNumbersValid = cardNumbers.every(({ value, error }) => value !== "" && !error.state);

  useEffect(() => {
    const currentCardNumbers = cardNumbers.map(({ value }) => value);
    const brand = getCardBrand(currentCardNumbers);

    if (brand in CARD_LENGTH && currentCardNumbers.join("").length <= CARD_LENGTH[brand]) {
      setCardBrand(brand);
    } else {
      setCardBrand("");
    }
  }, [...cardNumbers.map(({ value }) => value)]);

  return { cardNumbers, cardBrand, isCardNumbersValid };
};

export default useCardNumbers;
