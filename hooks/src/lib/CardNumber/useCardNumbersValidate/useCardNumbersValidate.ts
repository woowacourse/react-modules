import { useState } from "react";

import { checkBasicValidation } from "../../utils/checkBasicValidation";
import getCardPrefixNumber from "../hooks/useCardNumbersValidate/utils/getCardPrefixNumber";
import calculateNetWork from "../hooks/useCardNumbersValidate/utils/calculateNetwork";

import CardNumbersState from "../types/CardNumberState";
import CardNumbersKey from "../types/CardNumbersKey";

export type validateCardNumbersType = {
  key: CardNumbersKey;
  cardNumber: string;
  cardNumbers?: CardNumbersState;
};

type CardNumbersValidate = {
  first: boolean;
  second: boolean;
  third: boolean;
  fourth: boolean;
};

const initialCardNumberValidate: CardNumbersValidate = {
  first: true,
  second: true,
  third: true,
  fourth: true,
};

type CardNumberValidateResult = {
  validationState: CardNumbersValidate;
  errorMessage: string | null;
  validateCardNumbers: (params: validateCardNumbersType) => boolean;
};

const useCardNumbersValidate = (): CardNumberValidateResult => {
  const [validationState, setValidationState] = useState<CardNumbersValidate>(
    initialCardNumberValidate
  );
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const validateCardNumbers = ({
    key,
    cardNumber,
    cardNumbers,
  }: validateCardNumbersType) => {
    const result = checkBasicValidation({
      value: cardNumber,
      maxLength: 4,
    });

    const cardPrefixNumber = getCardPrefixNumber({
      key,
      value: cardNumber,
      firstNumber: cardNumbers.numbers["first"],
      secondNumber: cardNumbers.numbers["second"],
    });
    const network = calculateNetWork(cardPrefixNumber);

    if (cardPrefixNumber.length >= 6) {
      if (
        Object.keys(cardNumbers.numbers)
          .map((objectKey) =>
            objectKey === key ? cardNumber : cardNumbers.numbers[objectKey]
          )
          .reduce((acc, value) => acc + value, "").length > network.length
      )
        return;
    }

    setValidationState((prev) => ({
      ...prev,
      [key]: result.isValid,
    }));
    setErrorMessage(result.errorMessage);

    return result.isValid;
  };

  return { validationState, errorMessage, validateCardNumbers };
};

export default useCardNumbersValidate;
