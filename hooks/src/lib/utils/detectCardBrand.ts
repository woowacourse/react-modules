import {
  isVisa,
  isMasterCard,
  isAmex,
  isDiners,
  isUnionPay,
} from '../cardNumber/validation';
import { CardBrandType } from '../config';

export function detectCardBrand(cardNumber: string): CardBrandType {
  if (isVisa(cardNumber)) return 'VISA';
  if (isMasterCard(cardNumber)) return 'MASTERCARD';
  if (isAmex(cardNumber)) return 'AMEX';
  if (isDiners(cardNumber)) return 'DINERS';
  if (isUnionPay(cardNumber)) return 'UNIONPAY';
  return 'UNKNOWN';
}
