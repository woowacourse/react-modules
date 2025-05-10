import { cardNumberLengthRules } from "./cardNumberLengthRules";
import isNumber from "./isNumber";
import isPositiveNumber from "./isPositiveNumber";
import isValidLength from "./isValidLength";
import { CardNumber, CardType } from "./types/Card";

export function cardNumberValidation(
  cardNumbers: CardNumber,
  cardType: CardType
) {
  const lengthRules = cardNumberLengthRules[cardType];
  lengthRules;

  const isCardNumberError = (
    Object.entries(cardNumbers) as [keyof CardNumber, string][]
  ).map(([key, number]) => {
    const expectedLength = lengthRules[key];
    return (
      !isValidLength(number, expectedLength) ||
      !isNumber(number) ||
      !isPositiveNumber(number)
    );
  });

  const errorText = (() => {
    for (const [key, number] of Object.entries(cardNumbers) as [
      keyof CardNumber,
      string
    ][]) {
      const expectedLength = lengthRules[key];
      if (!isNumber(number)) {
        return "입력값은 숫자여야합니다.";
      }
      if (!isPositiveNumber(number)) {
        return "입력값은 양수여야합니다.";
      }
      if (!isValidLength(number, expectedLength)) {
        return `${key} 입력값은 ${expectedLength}자리여야 합니다.`;
      }
    }
    return "";
  })();

  return { isCardNumberError, errorText };
}
