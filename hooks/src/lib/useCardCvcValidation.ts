import useIsNumber from "./useIsNumber";
import useIsValidLength from "./useIsValidLength";

function useCardCvcValidation(cvc: string) {
  const isCvcError = !useIsNumber(cvc) || !useIsValidLength(cvc, 0, 3);
  return { isCvcError };
}
export default useCardCvcValidation;
