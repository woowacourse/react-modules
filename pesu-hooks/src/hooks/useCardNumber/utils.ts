// 카드 브랜드 식별 함수
export function getCardBrand(cardNumber: string) {
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

export function getCardNumberMaxLength(cardBrand: string) {
  switch (cardBrand) {
    case 'diners':
      return 14;
    case 'amex':
      return 15;
    default:
      return 16;
  }
}
