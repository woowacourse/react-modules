import { CardGlobalBrand } from "./identifyCardGLobalBrand";

type CardFormat = Record<CardGlobalBrand, number[]>;

const cardFormat: CardFormat = {
  [CardGlobalBrand.VISA]: [4, 4, 4, 4],
  [CardGlobalBrand.MASTER]: [4, 4, 4, 4],
  [CardGlobalBrand.DINERS]: [4, 6, 4],
  [CardGlobalBrand.AMEX]: [4, 6, 5],
  [CardGlobalBrand.UNION_PAY]: [4, 4, 4, 4],
  [CardGlobalBrand.NOT_IDENTIFIED]: [4, 4, 4, 4],
};

const formatCardNumber = (
  cardNumber: string,
  cardGlobalBrand: CardGlobalBrand
) => {
  const format = cardFormat[cardGlobalBrand];

  let currentIndex = 0;
  return format.map((length) =>
    cardNumber.substring(currentIndex, (currentIndex += length))
  );
};

export default formatCardNumber;

// ---

export const calculateValidCardNumberLength = (
  cardGlobalBrand: CardGlobalBrand
) => {
  return cardFormat[cardGlobalBrand].reduce(
    (prevSum, segmentLength) => prevSum + segmentLength,
    0
  );
};
