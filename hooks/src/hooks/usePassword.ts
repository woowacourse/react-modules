import { useState } from "react";
import { defaultValidationValue } from "../constants/validation";
import { validateNumberWithLength } from "../utils/validation";
import { ValidationType } from "../types/validation";

interface UsePasswordReturn {
  password: string;
  passwordValidation: ValidationType;
  handlePasswordChange: (value: string) => void;
}

const MAX_LENGTH = 2;

const usePassword = (): UsePasswordReturn => {
  const [password, setPassword] = useState("");
  const [passwordValidation, setPasswordValidation] = useState<ValidationType>(
    defaultValidationValue
  );

  const handlePasswordChange = (value: string) => {
    setPassword(value);
    const validationResult = validateNumberWithLength(value, MAX_LENGTH);
    setPasswordValidation(validationResult);
  };

  return { password, passwordValidation, handlePasswordChange };
};

export default usePassword;
