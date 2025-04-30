import { isNumeric } from ".";

function sliceCardNumber(cardNumber: string) {
  const cardNumberFirstGroup = cardNumber.slice(0, 4);
  const cardNumberSecondGroup = cardNumber.slice(4, 8);
  const cardNumberThirdGroup = cardNumber.slice(8, 12);
  const cardNumberFourthGroup = cardNumber.slice(12, 16);

  return {
    cardNumberFirstGroup,
    cardNumberSecondGroup,
    cardNumberThirdGroup,
    cardNumberFourthGroup,
  };
}

export type CardNetwork = "VISA" | "MASTER" | "DEFAULT";

export function validateCardNetwork(cardNumber: string): CardNetwork {
  const { cardNumberFirstGroup } = sliceCardNumber(cardNumber);
  const cardPrefix = Number(cardNumberFirstGroup.slice(0, 2));

  if (cardNumberFirstGroup.startsWith("4")) return "VISA";
  if (cardPrefix >= 51 && cardPrefix <= 54) return "MASTER";
  return "DEFAULT";
}

export function isCardNumberNumeric(cardNumber: string) {
  const cardNumbers = sliceCardNumber(cardNumber);
  Object.values(cardNumbers).forEach((cardNumberGroup) => {
    if (!isNumeric(cardNumberGroup)) return false;
  });
  return true;
}
