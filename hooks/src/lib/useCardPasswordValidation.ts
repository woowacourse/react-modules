import useIsNumber from "./useIsNumber";
import useIsValidLength from "./useIsValidLength";

function useCardPasswordValidation(passwordFront: string) {
  const isPasswordError =
    !useIsNumber(passwordFront) || !useIsValidLength(passwordFront, 0, 2);
  return { isPasswordError };
}
export default useCardPasswordValidation;
