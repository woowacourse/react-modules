import { ChangeEvent, KeyboardEvent, FocusEvent, useState, useMemo } from "react";
import { useInput } from "../common";
import Validator from "../utils/validator";
import { ERROR_MESSAGE } from "../constants";
import useCardBrand from "../useCardBrand/useCardBrand";
import formattingCardNumber from "../utils/formattingCardNumber";

const useCardNumber = (initialValue: { cardNumber: string }) => {
  const { inputValue, handleInputChange, updateByNameAndValue } = useInput(initialValue);
  const [validationResult, setValidationResult] = useState<ValidationResult>({
    isValid: true,
    errorMessage: "",
  });

  const { cardBrand, maxLength } = useCardBrand(inputValue.cardNumber);

  const handleCardNumberChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target !== e.currentTarget) return;

    const { value } = e.target;

    if (!Validator.checkNumberAndOver(value, maxLength)) {
      return setValidationResult({
        isValid: false,
        errorMessage: ERROR_MESSAGE.cardNumberOutOfRange,
      });
    }

    handleInputChange(e);
    setValidationResult({
      isValid: true,
      errorMessage: "",
    });
  };

  const handleCardNumberValidator = (e: EventType) => {
    if (e.target !== e.currentTarget) return;

    const { name, value } = e.target;
    if (!Validator.checkFillNumber(value, maxLength))
      return setValidationResult({
        isValid: false,
        errorMessage: ERROR_MESSAGE.cardNumberOutOfRange,
      });

    updateByNameAndValue({ name, value: formattingCardNumber(cardBrand, value) });
    setValidationResult({
      isValid: true,
      errorMessage: "",
    });
  };

  const handleCardNumberBlur = (e: FocusEvent<HTMLInputElement>) => {
    handleCardNumberValidator(e);
  };

  const handleCardNumberEnter = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key !== "Enter") return;
    e.currentTarget.blur();
    handleCardNumberValidator(e);
  };

  const handleCardNumberFocus = (e: FocusEvent<HTMLInputElement>) => {
    if (e.target !== e.currentTarget) return;

    const { name, value } = e.target;
    updateByNameAndValue({ name, value: value.replace(/\s/g, "") });
  };

  return useMemo(
    () => ({
      inputValue,
      validationResult,
      cardBrand,
      handleCardNumberChange,
      handleCardNumberBlur,
      handleCardNumberEnter,
      handleCardNumberFocus,
    }),
    [inputValue, validationResult, cardBrand]
  );
};

export default useCardNumber;
