import { CardBrand } from '../types/cardBrand';

export function determineCardBrand(cardNumber: string): CardBrand {
  const cleanNumber = cardNumber.replace(/\D/g, '');

  if (isVisa(cleanNumber)) {
    return 'VISA';
  }

  if (isMasterCard(cleanNumber)) {
    return 'MASTER';
  }

  if (isDiners(cleanNumber)) {
    return 'DINERS';
  }

  if (isAmex(cleanNumber)) {
    return 'AMEX';
  }

  if (isUnionPay(cleanNumber)) {
    return 'UNIONPAY';
  }

  return 'UNKNOWN';
}

function isVisa(cardNumber: string): boolean {
  return cardNumber[0] === '4';
}

function isMasterCard(cardNumber: string): boolean {
  return cardNumber[0] === '5' && cardNumber[1] >= '1' && cardNumber[1] <= '5';
}

function isDiners(cardNumber: string): boolean {
  return cardNumber.startsWith('36');
}

function isAmex(cardNumber: string): boolean {
  return cardNumber.startsWith('34') || cardNumber.startsWith('37');
}

function isUnionPay(cardNumber: string): boolean {
  if (
    cardNumber[0] === '6' &&
    cardNumber[1] === '2' &&
    cardNumber[2] >= '4' &&
    cardNumber[2] <= '6'
  ) {
    return true;
  }

  if (cardNumber.startsWith('628') && cardNumber[3] >= '2' && cardNumber[3] <= '8') {
    return true;
  }

  if (
    cardNumber.startsWith('622') &&
    parseInt(cardNumber.slice(3, 6), 10) >= 126 &&
    parseInt(cardNumber.slice(3, 6), 10) <= 925
  ) {
    return true;
  }

  return false;
}
