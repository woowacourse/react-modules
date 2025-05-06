// 카드 브랜드 식별 함수
export function getCardBrand(cardNumber: string): 'visa' | 'master' | 'amex' | 'diners' | 'unionpay' | 'unknown' {
  if (/^4\d{12,15}$/.test(cardNumber)) return 'visa';
  if (/^5[1-5]\d{14}$/.test(cardNumber)) return 'master';
  if (/^3[47]\d{13}$/.test(cardNumber)) return 'amex';
  if (/^36\d{12}$/.test(cardNumber)) return 'diners';
  if (
    /^6221(2[6-9]|[3-9]\d)\d{10}$/.test(cardNumber) || // 622126~622925
    /^62[4-6]\d{13}$/.test(cardNumber) || // 624~626
    /^628[2-8]\d{12}$/.test(cardNumber) // 6282~6288
  )
    return 'unionpay';
  return 'unknown';
}

// 카드 번호 유효성 검사 함수
export function isValidCardNumber(cardNumber: string): boolean {
  const brand = getCardBrand(cardNumber);
  switch (brand) {
    case 'amex':
      return /^3[47]\d{13}$/.test(cardNumber); // 15자리, 34/37
    case 'diners':
      return /^36\d{12}$/.test(cardNumber); // 14자리, 36
    case 'unionpay':
      return (
        /^6221(2[6-9]|[3-9]\d)\d{10}$/.test(cardNumber) ||
        /^62[4-6]\d{13}$/.test(cardNumber) ||
        /^628[2-8]\d{12}$/.test(cardNumber)
      );
    case 'visa':
      return /^4\d{12,15}$/.test(cardNumber); // 13~16자리
    case 'master':
      return /^5[1-5]\d{14}$/.test(cardNumber); // 16자리
    default:
      return false;
  }
}
