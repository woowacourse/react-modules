export function determineCardBrand(cardNumber: string) {
  if (cardNumber.startsWith('4')) {
    return 'visa';
  }

  if (51 <= Number(cardNumber.slice(0, 2)) && Number(cardNumber.slice(0, 2)) <= 55) {
    return 'master';
  }

  if (cardNumber.startsWith('36')) {
    return 'diners';
  }

  if (cardNumber.startsWith('34') || cardNumber.startsWith('37')) {
    return 'amex';
  }

  if (
    (622126 <= Number(cardNumber.slice(0, 6)) && Number(cardNumber.slice(0, 6)) <= 622925) ||
    (624 <= Number(cardNumber.slice(0, 3)) && Number(cardNumber.slice(0, 3)) <= 626) ||
    (6282 <= Number(cardNumber.slice(0, 4)) && Number(cardNumber.slice(0, 4)) <= 6288)
  ) {
    return 'unionpay';
  }

  return '';
}
