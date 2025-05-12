import { useState } from "react";
import { checkNumber, checkValidLength } from "../validator/inputValidator";
import getCardType from "./utils/getCardType";
import { formatCardNumber } from "./utils/formatCardNumber";

const CARDNUMBER_VALID_LENGTH = 4;

const ERROR_MESSAGE = {
  INVALID_NUMBER: "숫자만 입력 가능합니다.",
  INPUT_LENGTH_LIMIT: `${CARDNUMBER_VALID_LENGTH}자리를 입력해주세요.`,
};

const CARD_TYPE_LENGTH_RULES: Record<CardType, number[]> = {
  UnionPay: [4, 4, 4, 4],
  Visa: [4, 4, 4, 4],
  MasterCard: [4, 4, 4, 4],
  Diners: [4, 6, 4],
  AMEX: [4, 6, 5],
  Default: [4, 4, 4, 4],
};

interface SingleCardNumberError {
  errorState: boolean;
  message: string;
}

interface CardNumberError {
  first: SingleCardNumberError;
  second: SingleCardNumberError;
  third: SingleCardNumberError;
  fourth: SingleCardNumberError;
}

export type CardNumberLabel = "first" | "second" | "third" | "fourth";

type CardType =
  | "UnionPay"
  | "Visa"
  | "MasterCard"
  | "Diners"
  | "AMEX"
  | "Default";

const useCardNumber = () => {
  const [cardNumber, setCardNumber] = useState({
    first: "",
    second: "",
    third: "",
    fourth: "",
  });
  const [validationResult, setValidationResult] = useState<CardNumberError>({
    first: { errorState: false, message: "" },
    second: { errorState: false, message: "" },
    third: { errorState: false, message: "" },
    fourth: { errorState: false, message: "" },
  });

  const [cardType, setCardType] = useState<CardType>("Default");
  const [formattedCardNumber, setFormattedCardNumber] = useState("");

  const validate = (
    label: CardNumberLabel,
    inputValue: string,
    type?: CardType
  ) => {
    let isError = false;
    let message = "";

    const labelIndexMap: Record<CardNumberLabel, number> = {
      first: 0,
      second: 1,
      third: 2,
      fourth: 3,
    };

    const index = labelIndexMap[label];
    const typeLengthRule = CARD_TYPE_LENGTH_RULES[type ?? "Default"];

    if (index >= typeLengthRule.length) {
      const result = { errorState: false, message: "" };
      setValidationResult((prev) => ({
        ...prev,
        [label]: result,
      }));
      return result;
    }

    if (!checkNumber(inputValue)) {
      message = ERROR_MESSAGE.INVALID_NUMBER;
      isError = true;
    } else {
      const expectedLength =
        CARD_TYPE_LENGTH_RULES[type!]?.[labelIndexMap[label]] ??
        CARDNUMBER_VALID_LENGTH;

      if (!checkValidLength(inputValue, expectedLength)) {
        message = `${expectedLength}자리를 입력해주세요.`;
        isError = true;
      }
    }
    const result = { errorState: isError, message };

    setValidationResult((prev) => ({
      ...prev,
      [label]: result,
    }));

    return result;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (!["first", "second", "third", "fourth"].includes(name)) return;

    const newCardNumber = { ...cardNumber, [name]: value };

    let currentCardType: CardType = cardType;

    if (newCardNumber.first.length + newCardNumber.second.length >= 6) {
      const cardBIN = newCardNumber.first + newCardNumber.second;
      currentCardType = getCardType(cardBIN) as CardType;
      setCardType(currentCardType);
    }

    setCardNumber(newCardNumber);

    validate(name as CardNumberLabel, value, currentCardType);

    const formatted = formatCardNumber(newCardNumber, currentCardType);
    setFormattedCardNumber(formatted);
  };

  return {
    cardNumber,
    handleChange,
    validationResult,
    formattedCardNumber,
    cardType,
  };
};
export default useCardNumber;
