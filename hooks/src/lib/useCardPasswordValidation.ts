import useIsNumber from "./useIsNumber";
import useIsPositiveNumber from "./useIsPositiveNumber";
import useIsValidLength from "./useIsValidLength";

function useCardPasswordValidation(passwordFront: string) {
  const isPasswordError =
    !useIsNumber(passwordFront) ||
    !useIsValidLength(passwordFront, 0, 2) ||
    !useIsPositiveNumber(passwordFront);

  const errorText = (() => {
    if (!useIsNumber(passwordFront)) {
      return "입력값은 숫자여야합니다.";
    }
    if (!useIsPositiveNumber(passwordFront)) {
      return "입력값은 양수여야합니다.";
    }
    if (!useIsValidLength(passwordFront, 0, 2)) {
      return "입력값은 2자리이어야합니다.";
    }
    return "";
  })();
  return { isPasswordError, errorText };
}
export default useCardPasswordValidation;
