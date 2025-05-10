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
  const cardNumber = useCardInfo({
    initValues: initCardNumber,
    maxLength: 4,
  });

  const cardNumberError = useError({
    initError: initCardNumberError,
    getValidationFns: getCardNumberValidationFns,
  });

  return {
    cardNumber,
    cardNumberError,
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
