import { ValidationType } from "../../types/validation";
import { ERROR_MESSAGE } from "../constants/error";
import isLengthEqual from "../utils/isLengthEqual";
import isPositiveInteger from "../utils/isPositiveInteger";

const MAX_LENGTH = 3;

const useCvcValidation = (value: string): ValidationType => {
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

export default useCvcValidation;
