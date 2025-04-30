import { ERROR_MESSAGE } from "../constants/error";
import isLengthEqual from "../utils/isLengthEqual";
import isPositiveInteger from "../utils/isPositiveInteger";

interface PasswordValidationType {
  isError: boolean;
  errorMessage: string | null;
}

const MAX_LENGTH = 2;

const usePasswordValidation = (value: string): PasswordValidationType => {
  if (!isPositiveInteger(value)) {
    return {
      isError: true,
      errorMessage: ERROR_MESSAGE.INVALID_NUMBER,
    };
  }

  if (!isLengthEqual(value, MAX_LENGTH)) {
    return {
      isError: true,
      errorMessage: `${MAX_LENGTH}${ERROR_MESSAGE.INVALID_LENGTH}`,
    };
  }

  return {
    isError: false,
    errorMessage: null,
  };
};

export default usePasswordValidation;
