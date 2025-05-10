import { isNumeric } from "..";
import { CARD_NUMBER_LENGTH, ERROR_MESSAGE } from "../../constants/index";

function getCardNumberGroupError(cardNumber: string) {
  if (!isNumeric(cardNumber)) return ERROR_MESSAGE.NOT_NUMERIC;
  if (cardNumber.length !== CARD_NUMBER_LENGTH) {
    return ERROR_MESSAGE.INVALID_LENGTH(CARD_NUMBER_LENGTH);
  }
  return "";
}

export function validateCardNumber(cardNumbers: string[]) {
  const cardNumberErrors = ["", "", "", ""];

  cardNumbers.forEach((cardNumber, index) => {
    const trimCardNumber = cardNumber.trim();
    cardNumberErrors[index] = getCardNumberGroupError(trimCardNumber);
  });

  return cardNumberErrors;
}
