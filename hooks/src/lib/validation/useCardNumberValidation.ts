import { hasBlank, isNumber, isRightLength } from "./validate";
import ERROR_MESSAGES from "../constants/error";
import { CARD_NUMBER } from "../constants/cardInputInformation";

const useCardNumberValidation = () => {
  const getCardNumberErrorState = (value: string) => {
    if (hasBlank(value)) {
      return {
        errorMessage: {
          cardNumber: ERROR_MESSAGES.INVALID_TRIM_BLANK,
        },
        isError: {
          cardNumber: true,
        },
      };
    }
    if (!isNumber(value)) {
      return {
        errorMessage: {
          cardNumber: ERROR_MESSAGES.INVALID_ONLY_NUMBER,
        },
        isError: {
          cardNumber: true,
        },
      };
    }
    if (!isRightLength(value, CARD_NUMBER.FIELD_LENGTH)) {
      return {
        errorMessage: {
          cardNumber: `${CARD_NUMBER.FIELD_LENGTH}${ERROR_MESSAGES.INVALID_MAX_LENGTH}`,
        },
        isError: {
          cardNumber: true,
        },
      };
    }
    return;
  };

  return { getCardNumberErrorState };
};

export default useCardNumberValidation;
