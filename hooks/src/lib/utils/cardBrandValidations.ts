export function validateCardBrandLength(cardBrand: string, cardNumber: string) {
  if (cardBrand === 'visa' && cardNumber.length !== 16) {
    return 'VISA 카드는 16자리여야 합니다.';
  }

  if (cardBrand === 'master' && cardNumber.length !== 16) {
    return 'MASTER 카드는 16자리여야 합니다.';
  }

  if (cardBrand === 'diners' && cardNumber.length !== 14) {
    return 'DINERS 카드는 14자리여야 합니다.';
  }

  if (cardBrand === 'amex' && cardNumber.length !== 15) {
    return 'AMEX 카드는 15자리여야 합니다.';
  }

  if (cardBrand === 'unionpay' && cardNumber.length !== 16) {
    return 'UNIONPAY 카드는 16자리여야 합니다.';
  }
}
