import { ChangeEvent, useState, KeyboardEvent, FocusEvent } from "react";
import { useInput } from "../common";
import Validator from "../utils/validator";
import { ERROR_MESSAGE } from "../constants";

const useCardHolder = (initialValue: { cardHolder: string }) => {
  const { inputValue, handleInputChange, updateByNameAndValue } = useInput(initialValue);
  const [validationResult, setValidationResult] = useState<ValidationResult>({
    isValid: true,
    errorMessage: "",
  });

  const handleCardHolderChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target !== e.currentTarget) return;

    const { value } = e.target;
    if (!Validator.checkEnglish(value)) {
      return setValidationResult({
        isValid: false,
        errorMessage: ERROR_MESSAGE.onlyEnglish,
      });
    }

    handleInputChange(e);
    setValidationResult({
      isValid: true,
      errorMessage: "",
    });
  };

  const handleCardHolderValidator = (e: EventType) => {
    if (e.target !== e.currentTarget) return;

    const { name, value } = e.target;
    if (!Validator.checkExist(value))
      return setValidationResult({
        isValid: false,
        errorMessage: ERROR_MESSAGE.notExistCardHolder,
      });

    updateByNameAndValue({ name, value });
    setValidationResult({
      isValid: true,
      errorMessage: "",
    });
  };

  const handleCardHolderBlur = (e: FocusEvent<HTMLInputElement>) => {
    handleCardHolderValidator(e);
  };

  const handleCardHolderEnter = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key !== "Enter") return;
    handleCardHolderValidator(e);
  };

  return {
    inputValue,
    validationResult,
    handleCardHolderChange,
    handleCardHolderBlur,
    handleCardHolderEnter,
  };
};

export default useCardHolder;
