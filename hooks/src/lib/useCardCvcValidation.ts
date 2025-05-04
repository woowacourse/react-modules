import useIsNumber from "./useIsNumber";
import useIsPositiveNumber from "./useIsPositiveNumber";
import useIsValidLength from "./useIsValidLength";

function useCardCvcValidation(cvc: string) {
  const isCvcError =
    !useIsNumber(cvc) ||
    !useIsValidLength(cvc, 0, 3) ||
    !useIsPositiveNumber(cvc);

  const errorText = (() => {
    if (!useIsNumber(cvc)) {
      return "입력값은 숫자여야합니다.";
    }
    if (!useIsPositiveNumber(cvc)) {
      return "입력값은 양수여야합니다.";
    }
    if (!useIsValidLength(cvc, 0, 3)) {
      return "입력값은 3자리이어야합니다.";
    }
    return "";
  })();
  return { isCvcError, errorText };
}
export default useCardCvcValidation;
