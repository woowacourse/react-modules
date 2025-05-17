import useCardInfo from "./useCardInfo";
import useError from "./useError";
import { isValidLength, isValidNumber } from "../util";

export default function useCardNumber({
  initCardNumber,
  initCardNumberError,
}: {
  initCardNumber: Record<string, string>;
  initCardNumberError: Record<string, string>;
}) {
  const {
    values: cardNumber,
    changeValues: setCardNumber,
    isFullFilled,
  } = useCardInfo({
    initValues: initCardNumber,
    maxLength: 4,
  });

  const {
    error: cardNumberError,
    checkValidation: validateCardNumber,
    getErrorMessage: getCardNumberErrorMessage,
    isError: isCardNumberError,
    resetError: resetCardNumberError,
  } = useError({
    initError: initCardNumberError,
    getValidationFns: getCardNumberValidationFns,
  });

  return {
    cardNumber,
    setCardNumber,
    isFullFilled,
    cardNumberError,
    validateCardNumber,
    getCardNumberErrorMessage,
    isCardNumberError,
    resetCardNumberError,
  };
}

const ERROR_MESSAGE = {
  LENGTH: "4자리만 입력 가능합니다.",
  NUMBER: "숫자만 입력 가능합니다.",
};

function getCardNumberValidationFns(maxLength: number, cardNumber: string) {
  return [
    {
      condition: () => !isValidLength(cardNumber, maxLength),
      errorMsg: ERROR_MESSAGE.LENGTH,
    },
    {
      condition: () => !isValidNumber(cardNumber),
      errorMsg: ERROR_MESSAGE.NUMBER,
    },
  ];
}
