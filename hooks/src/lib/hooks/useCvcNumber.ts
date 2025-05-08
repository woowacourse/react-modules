import { useState } from "react";
import { ValidationType } from "../../types/validation";
import { defaultValidationValue } from "../constants/validation";
import { validateNumberFieldWithLength } from "../utils/validation";

interface UseCvcNumberReturn {
  cvcNumber: string;
  cvcNumberValidation: ValidationType;
  handleCvcNumberChange: (value: string) => void;
}

const MAX_LENGTH = 3;

const useCvcNumber = (): UseCvcNumberReturn => {
  const [cvcNumber, setCvcNumber] = useState("");
  const [cvcNumberValidation, setCvcNumberValidation] =
    useState<ValidationType>(defaultValidationValue);

  const handleCvcNumberChange = (value: string) => {
    setCvcNumber(value);
    const validationResult = validateNumberFieldWithLength(value, MAX_LENGTH);
    setCvcNumberValidation(validationResult);
  };

  return { cvcNumber, cvcNumberValidation, handleCvcNumberChange };
};

export default useCvcNumber;
