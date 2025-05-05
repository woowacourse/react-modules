import isNumber from "./isNumber";
import isPositiveNumber from "./isPositiveNumber";
import isValidLength from "./isValidLength";

function cardCvcValidation(cvc: string) {
  const isCvcError =
    !isNumber(cvc) || !isValidLength(cvc, 0, 3) || !isPositiveNumber(cvc);

  const errorText = (() => {
    if (!isNumber(cvc)) {
      return "입력값은 숫자여야합니다.";
    }
    if (!isPositiveNumber(cvc)) {
      return "입력값은 양수여야합니다.";
    }
    if (!isValidLength(cvc, 0, 3)) {
      return "입력값은 3자리이어야합니다.";
    }
    return "";
  })();
  return { isCvcError, errorText };
}
export default cardCvcValidation;
