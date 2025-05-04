import isNumber from "./isNumber";
import isPositiveNumber from "./isPositiveNumber";
import isValidLength from "./isValidLength";

function cardPasswordValidation(passwordFront: string) {
  const isPasswordError =
    !isNumber(passwordFront) ||
    !isValidLength(passwordFront, 0, 2) ||
    !isPositiveNumber(passwordFront);

  const errorText = (() => {
    if (!isNumber(passwordFront)) {
      return "입력값은 숫자여야합니다.";
    }
    if (!isPositiveNumber(passwordFront)) {
      return "입력값은 양수여야합니다.";
    }
    if (!isValidLength(passwordFront, 0, 2)) {
      return "입력값은 2자리이어야합니다.";
    }
    return "";
  })();
  return { isPasswordError, errorText };
}
export default cardPasswordValidation;
