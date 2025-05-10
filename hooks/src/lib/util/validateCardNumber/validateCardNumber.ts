import { isNumeric } from "..";
import {
  CARD_INPUT_LENGTH,
  CardNetwork,
  ERROR_MESSAGE,
} from "../../constants/index";

function getCardNumberGroupError(
  cardNumber: string,
  cardNetwork: CardNetwork,
  index: number
) {
  if (cardNumber.length === 0) return "";

  if (!isNumeric(cardNumber)) {
    return ERROR_MESSAGE.NOT_NUMERIC;
  }

  if (
    !CARD_INPUT_LENGTH.hasOwnProperty(cardNetwork) ||
    cardNetwork === "DEFAULT"
  ) {
    return ERROR_MESSAGE.INVALID_CARD_NETWORK;
  }

  const groupLengths = CARD_INPUT_LENGTH[cardNetwork];
  if (index >= groupLengths.length) {
    return ERROR_MESSAGE.INVALID_GROUP_INDEX;
  }

  const expectedLength = groupLengths[index];
  if (cardNumber.length !== expectedLength) {
    return ERROR_MESSAGE.INVALID_LENGTH(expectedLength);
  }

  return "";
}

export function validateCardNumber(
  cardNumbers: string[],
  cardNetwork: CardNetwork
) {
  const cardNumberErrors = ["", "", "", ""];

  cardNumbers.forEach((cardNumber, index) => {
    const trimCardNumber = cardNumber.trim();
    cardNumberErrors[index] = getCardNumberGroupError(
      trimCardNumber,
      cardNetwork,
      index
    );
  });

  return cardNumberErrors;
}
