import { CardNumber } from "./types/Card";
import isNumber from "./isNumber";
import isPositiveNumber from "./isPositiveNumber";
import isValidLength from "./isValidLength";

function cardNumberValidation(cardNumbers: CardNumber) {
  const isCardNumberError = Object.values(cardNumbers).map((number) => {
    return (
      !isValidLength(number, 0, 4) ||
      !isNumber(number) ||
      !isPositiveNumber(number)
    );
  });

  const errorText = (() => {
    for (const number of Object.values(cardNumbers)) {
      if (!isNumber(number)) {
        return "입력값은 숫자여야합니다.";
      }
      if (!isPositiveNumber(number)) {
        return "입력값은 양수여야합니다.";
      }
      if (!isValidLength(number, 0, 4)) {
        return "입력값은 4자리이어야합니다.";
      }
    }
    return "";
  })();

  return { isCardNumberError, errorText };
}

export default cardNumberValidation;
