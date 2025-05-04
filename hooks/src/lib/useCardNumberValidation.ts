import { CardNumber } from "./types/Card";
import useIsNumber from "./useIsNumber";
import useIsPositiveNumber from "./useIsPositiveNumber";
import useIsValidLength from "./useIsValidLength";

function useCardNumberValidation(cardNumbers: CardNumber) {
  const isCardNumberError = Object.values(cardNumbers).map((number) => {
    return (
      !useIsValidLength(number, 0, 4) ||
      !useIsNumber(number) ||
      !useIsPositiveNumber(number)
    );
  });

  const errorText = (() => {
    for (const number of Object.values(cardNumbers)) {
      if (!useIsNumber(number)) {
        return "입력값은 숫자여야합니다.";
      }
      if (!useIsPositiveNumber(number)) {
        return "입력값은 양수여야합니다.";
      }
      if (!useIsValidLength(number, 0, 4)) {
        return "입력값은 4자리이어야합니다.";
      }
    }
    return "";
  })();

  return { isCardNumberError, errorText };
}

export default useCardNumberValidation;
