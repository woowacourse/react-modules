import { cardRules } from './cardTypeRules';

export const getCardType = (cardNumber: string) => {
  for (const rule of cardRules) {
    const matchesPrefix = rule.prefixes.some((prefix) =>
      cardNumber.startsWith(prefix)
    );

    if (matchesPrefix) {
      if (rule.validator) {
        if (rule.validator(cardNumber)) {
          return rule.name;
        }
      } else {
        return rule.name;
      }
    }
  }

  return null;
};

export const getFormattedCardNumber = (
  cardNumbers: string,
  cardType: string
) => {
  if (!cardType) return cardNumbers;

  const formattedCardNumbers = cardNumbers.replace(/\s/g, '');
  const format = cardRules.find((rule) => rule.name === cardType)?.format;
  let result = '';
  let currentIndex = 0;

  format.forEach((length) => {
    const segment = formattedCardNumbers.slice(
      currentIndex,
      currentIndex + length
    );
    if (segment) {
      result +=
        segment +
        (currentIndex + length < formattedCardNumbers.length ? '-' : '');
    }
    currentIndex += length;
  });

  return result;
};

export const getCardNumberMaxLength = (cardType: string) => {
  return cardType
    ? cardRules.find((rule) => rule.name === cardType)?.length
    : 16;
};
