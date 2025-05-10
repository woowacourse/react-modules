import calculateNetwork from "./calculateNetwork";
import getCardPrefixNumber from "./getCardPrefixNumber";

import validateCardNumbersType from "../types/validateCardNumbersType";
import CardNextWork from "../types/CardNextWork";

const getCardNetwork = ({
  key,
  value,
  cardNumbers,
}: validateCardNumbersType): { name: CardNextWork; length: number } => {
  const cardPrefixNumber = getCardPrefixNumber({
    key,
    value,
    firstNumber: cardNumbers.numbers["first"],
    secondNumber: cardNumbers.numbers["second"],
  });
  return calculateNetwork(cardPrefixNumber);
};
export default getCardNetwork;
