import { isNumeric } from ".";
import { CARD_NUMBER_LENGTH, ERROR_MESSAGE } from "../constants/index";

function sliceCardNumber(cardNumber: string[]) {
  const cardNumberFirstGroup = cardNumber[0];
  const cardNumberSecondGroup = cardNumber[1];
  const cardNumberThirdGroup = cardNumber[2];
  const cardNumberFourthGroup = cardNumber[3];

  return {
    cardNumberFirstGroup,
    cardNumberSecondGroup,
    cardNumberThirdGroup,
    cardNumberFourthGroup,
  };
}

function getCardNumberGroupError(cardNumber: string) {
  if (!isNumeric(cardNumber)) return ERROR_MESSAGE.NOT_NUMERIC;
  if (cardNumber.length !== CARD_NUMBER_LENGTH) {
    return ERROR_MESSAGE.INVALID_LENGTH(CARD_NUMBER_LENGTH);
  }
  return "";
}

export type CardNetwork = "VISA" | "MASTER" | "DEFAULT";

export function validateCardNetwork(cardNumbers: string[]): CardNetwork {
  const { cardNumberFirstGroup } = sliceCardNumber(cardNumbers);
  const cardPrefix = Number(cardNumberFirstGroup.slice(0, 2));

  if (cardNumberFirstGroup.startsWith("4")) return "VISA";
  if (cardPrefix >= 51 && cardPrefix <= 54) return "MASTER";
  return "DEFAULT";
}

export function validateCardNumber(cardNumbers: string[]) {
  const cardNumberErrors = ["", "", "", ""];

  cardNumbers.forEach((cardNumber, index) => {
    const trimCardNumber = cardNumber.trim();
    cardNumberErrors[index] = getCardNumberGroupError(trimCardNumber);
  });

  return cardNumberErrors;
}
