import { CARD_TYPES, CardType } from '../constants/cardTypes';
import { CARD_NUMBER, CARD_FORMAT } from '../constants/cardConstants';

export const formatCardNumber = (input: string): string => {
  const digitsOnly = input.replace(/\D/g, '');
  const cardType = detectCardType(digitsOnly);
  if (!cardType) return digitsOnly;

  const format = CARD_FORMAT[cardType];
  const groups = [];
  let currentIndex = 0;

  for (const groupSize of format.GROUPS) {
    if (currentIndex >= digitsOnly.length) break;
    groups.push(digitsOnly.substring(currentIndex, currentIndex + groupSize));
    currentIndex += groupSize;
  }

  return groups.join(format.SEPARATOR);
};

export const isVisaCard = (cardNumber: string): boolean => {
  return cardNumber.startsWith(CARD_NUMBER.VISA_START);
};

export const isMasterCard = (cardNumber: string): boolean => {
  return CARD_NUMBER.MASTERCARD_START.some((start) =>
    cardNumber.startsWith(start)
  );
};

export const isAmexCard = (cardNumber: string): boolean => {
  return CARD_NUMBER.AMEX_START.some((start) => cardNumber.startsWith(start));
};

export const isDinersCard = (cardNumber: string): boolean => {
  return cardNumber.startsWith(CARD_NUMBER.DINERS_START);
};

export const isUnionPayCard = (cardNumber: string): boolean => {
  const unionPayRanges = [
    CARD_NUMBER.UNIONPAY_START.RANGE_1,
    CARD_NUMBER.UNIONPAY_START.RANGE_2,
    CARD_NUMBER.UNIONPAY_START.RANGE_3,
  ];

  for (const range of unionPayRanges) {
    const start = parseInt(range.START);
    const end = parseInt(range.END);
    const prefix = parseInt(cardNumber.substring(0, range.START.length));

    if (prefix >= start && prefix <= end) {
      return true;
    }
  }

  return false;
};

export const detectCardType = (input: string): CardType | null => {
  const cardNumber = input.replace(/\D/g, '');

  if (isVisaCard(cardNumber)) {
    return CARD_TYPES.VISA;
  }

  if (isMasterCard(cardNumber)) {
    return CARD_TYPES.MASTERCARD;
  }

  if (isAmexCard(cardNumber)) {
    return CARD_TYPES.AMEX;
  }

  if (isDinersCard(cardNumber)) {
    return CARD_TYPES.DINERS;
  }

  if (isUnionPayCard(cardNumber)) {
    return CARD_TYPES.UNIONPAY;
  }

  return null;
};
