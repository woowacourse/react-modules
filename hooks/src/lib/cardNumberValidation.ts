import { cardRules } from "./cardRules";
import isNumber from "./isNumber";
import isPositiveNumber from "./isPositiveNumber";
import isValidLength from "./isValidLength";
import { CardType } from "./types/Card";
export function cardNumberValidation(cardNumber: string, cardType: CardType) {
  const matchedRule = cardRules.find((cardRule) => cardType === cardRule.type);

  if (!matchedRule) {
    return {
      isCardNumberError: true,
      errorText: "해당 카드 타입에 대한 길이 규칙이 없습니다.",
    };
  }

  const expectedLength = Object.values(matchedRule.numberLengths).reduce(
    (acc, len) => acc + len,
    0
  );

  const isCardNumberError =
    !isValidLength(cardNumber, expectedLength) ||
    !isNumber(cardNumber) ||
    !isPositiveNumber(cardNumber);

  const errorText = (() => {
    if (!isNumber(cardNumber)) {
      return "입력값은 숫자여야합니다.";
    }
    if (!isPositiveNumber(cardNumber)) {
      return "입력값은 양수여야합니다.";
    }
    if (!isValidLength(cardNumber, expectedLength)) {
      return `입력값은 ${expectedLength}자리여야 합니다.`;
    }
    return "";
  })();

  return { isCardNumberError, errorText };
}
