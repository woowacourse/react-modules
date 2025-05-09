import { CardBrandOrUnknown } from './type';

export function getCardBrand(cardNumber: string): CardBrandOrUnknown {
  if (cardNumber.startsWith('36')) return 'diners';
  if (cardNumber.startsWith('34') || cardNumber.startsWith('37')) return 'amex';

  const prefix6 = Number(cardNumber.slice(0, 6));

  if (
    (prefix6 >= 622126 && prefix6 <= 622925) ||
    (prefix6 >= 624 && prefix6 <= 626) ||
    (prefix6 >= 6282 && prefix6 <= 6288)
  )
    return 'unionpay';

  if (cardNumber.startsWith('4')) return 'visa';

  const prefix4 = Number(cardNumber.slice(0, 2));
  if (prefix4 >= 51 && prefix4 <= 55) return 'master';
  return 'unknown';
}

export function getCardNumberMaxLength(cardBrand: CardBrandOrUnknown) {
  switch (cardBrand) {
    case 'diners':
      return 14;
    case 'amex':
      return 15;
    default:
      return 16;
  }
}

export function formatCardNumber(cardNumber: string, cardBrand: CardBrandOrUnknown) {
  switch (cardBrand) {
    case 'diners':
      return cardNumber.replace(/(\d{4})(\d{6})(\d{0,4})/, '$1 $2 $3').split(' ');
    case 'amex':
      return cardNumber.replace(/(\d{4})(\d{6})(\d{5})/, '$1 $2 $3').split(' ');
    default:
      return cardNumber.replace(/(\d{4})(\d{4})(\d{4})(\d{4})/, '$1 $2 $3 $4').split(' ');
  }
}
