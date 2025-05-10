import { useState } from "react";

import { checkBasicValidation } from "../../../utils/checkBasicValidation";

import validateCardNumbersType from "../../types/validateCardNumbersType";
import checkCardNetworkValidation from "./utils/checkCardNetworkValidation";

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
    value,
    cardNumbers,
  }: validateCardNumbersType) => {
    const basicValidationResult = checkBasicValidation({
      value,
      maxLength: 4,
    });

    const cardNetworkValidationResult = checkCardNetworkValidation({
      key,
      value,
      cardNumbers,
    });

    setValidationState((prev) => ({
      ...prev,
      [key]:
        basicValidationResult.isValid && cardNetworkValidationResult.isValid,
    }));
    setErrorMessage(
      basicValidationResult.errorMessage ||
        cardNetworkValidationResult.errorMessage
    );

    return basicValidationResult.isValid && cardNetworkValidationResult.isValid;
  };

  return { validationState, errorMessage, validateCardNumbers };
};

export default useCardNumbersValidate;
