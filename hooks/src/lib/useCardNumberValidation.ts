import { CardNumber } from "../types/Card";
import useIsNumber from "./useIsNumber";
import useIsValidLength from "./useIsValidLength";

function useCardNumberValidation(cardNumbers: CardNumber) {
  const isCardNumberError = Object.values(cardNumbers).map((number) => {
    return !useIsValidLength(number, 0, 4) || !useIsNumber(number);
  });

  return { isCardNumberError };
}

export default useCardNumberValidation;
