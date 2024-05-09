import { ChangeEvent, FocusEvent, useState } from "react";
import Validator from "../utils/validator";
import { ERROR_MESSAGE } from "../constants";
import getCardBrand from "../utils/getCardBrand";
import useInput from "../common/useInput";
import getCardNumberMaxLength from "../utils/getCardNumberMaxLength";

const useCardNumber = (initialValue: string) => {
  const { inputValue, handleInputChange, updateByNameAndValue } = useInput(initialValue);

  const [brandType, setBrandType] = useState<BrandType>("Normal");
  const [validationResult, setValidationResult] = useState<ValidationResult>({
    isValid: true,
    errorMessage: "",
  });

  const assignCardBrandFromNumber = (cardNumber: string) => {
    const cardBrand = getCardBrand(cardNumber);
    if (brandType === cardBrand) return;

    setBrandType(cardBrand);
  };

  const handleCardNumberChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target !== e.currentTarget) return;

    const { value } = e.target;
    if (!Validator.checkDigit(value)) {
      return setValidationResult({
        isValid: false,
        errorMessage: ERROR_MESSAGE.onlyNumber,
      });
    }

    if (Validator.checkOverMaxDigit(value, getCardNumberMaxLength(brandType))) {
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
    assignCardBrandFromNumber(value);
  };

  const handleCardNumberBlur = (e: FocusEvent<HTMLInputElement>) => {
    if (e.target !== e.currentTarget) return;

    const { value } = e.target;
    if (!Validator.checkFillNumber(value, getCardNumberMaxLength(brandType)))
      return setValidationResult({
        isValid: false,
        errorMessage: ERROR_MESSAGE.cardNumberOutOfRange,
      });

    updateByNameAndValue(value);
    setValidationResult({
      isValid: true,
      errorMessage: "",
    });
  };

  return {
    inputValue,
    validationResult,
    brandType,
    handleCardNumberChange,
    handleCardNumberBlur,
  } as const;
};

export default useCardNumber;
