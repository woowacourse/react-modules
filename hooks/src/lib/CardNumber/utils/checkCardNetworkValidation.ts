import calculateNetWork from "./calculateNetwork";
import getCardPrefixNumber from "./getCardPrefixNumber";

import validateCardNumbersType from "../types/validateCardNumbersType";

import { validationMessages } from "../../../constants/validationMessages";

const checkCardNetworkValidation = ({
  key,
  value,
  cardNumbers,
}: validateCardNumbersType) => {
  const cardPrefixNumber = getCardPrefixNumber({
    key,
    value,
    firstNumber: cardNumbers.numbers["first"],
    secondNumber: cardNumbers.numbers["second"],
  });
  const network = calculateNetWork(cardPrefixNumber);

  if (cardPrefixNumber.length >= 6) {
    if (
      Object.keys(cardNumbers.numbers)
        .map((objectKey) =>
          objectKey === key ? value : cardNumbers.numbers[objectKey]
        )
        .reduce((acc, value) => acc + value, "").length > network.length
    )
      return {
        isValid: false,
        errorMessage: validationMessages.limitedCardNetworkLength(
          network.length
        ),
      };
  }

  return { isValid: true, errorMessage: null };
};

export default checkCardNetworkValidation;
