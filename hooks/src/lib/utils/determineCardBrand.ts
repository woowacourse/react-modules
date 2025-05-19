import { CardBrand } from '../types/card';

export function determineCardBrand(cardNumber: string): CardBrand {
  const first2 = Number(cardNumber.slice(0, 2));
  const first3 = Number(cardNumber.slice(0, 3));
  const first4 = Number(cardNumber.slice(0, 4));
  const first6 = Number(cardNumber.slice(0, 6));

  if (cardNumber.startsWith('4')) return 'visa';
  if (first2 >= 51 && first2 <= 55) return 'master';
  if (cardNumber.startsWith('36')) return 'diners';
  if (cardNumber.startsWith('34') || cardNumber.startsWith('37')) return 'amex';
  if (
    (first6 >= 622126 && first6 <= 622925) ||
    (first3 >= 624 && first3 <= 626) ||
    (first4 >= 6282 && first4 <= 6288)
  ) {
    return 'unionpay';
  }

  return '';
}
