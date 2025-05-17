import { useEffect, useMemo, useState } from "react";
import { checkNumber, checkValidLength } from "../validator/inputValidator";
import getCardType from "./utils/getCardType";
import { formatCardNumber } from "./utils/formatCardNumber";
import {
  CardNumberLabel,
  CardType,
  isCardNumberLabel,
  isCardType,
} from "./types";
import { CardInputError } from "../types/cardErrorType";

const CARDNUMBER_VALID_LENGTH = 4;

export const ERROR_MESSAGE = {
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

interface CardNumberError {
  first: CardInputError;
  second: CardInputError;
  third: CardInputError;
  fourth: CardInputError;
}

const labelIndexMap: Record<CardNumberLabel, number> = {
  first: 0,
  second: 1,
  third: 2,
  fourth: 3,
};
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

  const cardBIN = useMemo(() => {
    return cardNumber.first + cardNumber.second;
  }, [cardNumber]);

  const cardType = useMemo(() => {
    const raw = cardBIN.length >= 6 ? getCardType(cardBIN) : "Default";
    return isCardType(raw) ? raw : "Default";
  }, [cardBIN]);

  const formattedCardNumber = useMemo(() => {
    return formatCardNumber(cardNumber, cardType);
  }, [cardNumber, cardType]);

  const validate = (label: string, inputValue: string, type?: CardType) => {
    if (!isCardNumberLabel(label)) return;

    const index = labelIndexMap[label];
    const typeLengthRule = CARD_TYPE_LENGTH_RULES[type ?? "Default"];

    if (index >= typeLengthRule.length) {
      setValidationResult((prev) => ({
        ...prev,
        [label]: { errorState: false, message: "" },
      }));
      return;
    }

    if (!checkNumber(inputValue)) {
      setValidationResult((prev) => ({
        ...prev,
        [label]: {
          errorState: true,
          message: ERROR_MESSAGE.INVALID_NUMBER,
        },
      }));
      return;
    }

    const expectedLength = typeLengthRule[index] ?? CARDNUMBER_VALID_LENGTH;

    if (!checkValidLength(inputValue, expectedLength)) {
      setValidationResult((prev) => ({
        ...prev,
        [label]: {
          errorState: true,
          message: `${expectedLength}자리를 입력해주세요.`,
        },
      }));
      return;
    }

    setValidationResult((prev) => ({
      ...prev,
      [label]: { errorState: false, message: "" },
    }));
  };

  useEffect(() => {
    Object.entries(cardNumber).forEach(([label, value]) => {
      if (isCardNumberLabel(label)) {
        validate(label, value, cardType);
      }
    });
  }, [cardNumber, cardType]);

  const handleChange = ({
    name,
    value,
  }: {
    name: CardNumberLabel;
    value: string;
  }) => {
    if (!isCardNumberLabel(name)) return;

    const newCardNumber = { ...cardNumber, [name]: value };
    setCardNumber(newCardNumber);
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
