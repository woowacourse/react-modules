import calculateNetwork from "./calculateNetwork";
import getCardPrefixNumber from "./getCardPrefixNumber";

import validateCardNumbersType from "../types/validateCardNumbersType";
import CardNetwork from "../types/CardNetwork";

const getCardNetwork = ({
  key,
  value,
  cardNumbers,
}: validateCardNumbersType): CardNetwork => {
  const cardPrefixNumber = getCardPrefixNumber({
    key,
    value,
    firstNumber: cardNumbers.numbers["first"],
    secondNumber: cardNumbers.numbers["second"],
  });
  return calculateNetwork(cardPrefixNumber);
};
export default getCardNetwork;
