import { CardBrand } from "./getCardBrand";

const CARD_FORMAT: Record<CardBrand | "", number[]> = {
  visa: [4, 4, 4, 4],
  mastercard: [4, 4, 4, 4],
  diners: [4, 6, 4],
  amex: [4, 6, 5],
  unionpay: [4, 4, 4, 4],
  "": [],
};

const getCardFormat = (cardNumber: string, cardBrand: CardBrand | ""): string => {
  const format = CARD_FORMAT[cardBrand];

  if (format.length === 0) return cardNumber;

  const formattedCardNumbers: string[] = [];
  let index = 0;

  for (const length of format) {
    const formattedCardNumber = cardNumber.slice(index, index + length);
    if (formattedCardNumber) formattedCardNumbers.push(formattedCardNumber);
    index += length;
  }

  return formattedCardNumbers.join(" ");
};

export default getCardFormat;
