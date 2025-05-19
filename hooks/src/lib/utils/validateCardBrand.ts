import { CardBrand } from "../types/cardTypes";

export const validateCardBrand = (digits: string): CardBrand | null => {
  if (!digits) {
    return null;
  }

  const length = digits.length;

  if (length === 14 && digits.startsWith('36')) {
    return 'diners';
  }

  if (length === 15 && (digits.startsWith('34') || digits.startsWith('37'))) {
    return 'amex';
  }

  if (length === 16) {
    const prefix2 = digits.slice(0, 2);
    const prefix3 = digits.slice(0, 3);
    const prefix4 = digits.slice(0, 4);
    const prefix6 = digits.slice(0, 6);

    const num2 = parseInt(prefix2, 10);
    const num3 = parseInt(prefix3, 10);
    const num4 = parseInt(prefix4, 10);
    const num6 = parseInt(prefix6, 10);

    if ((num6 >= 622126 && num6 <= 622925) ||
      (num3 >= 624 && num3 <= 626) ||
      (num4 >= 6282 && num4 <= 6288)) {
      return 'unionpay';
    }

    if (digits.startsWith('4')) {
      return 'visa';
    }

    if ((num2 >= 51 && num2 <= 55) || (num2 >= 22 && num2 <= 27)) {
      return 'mastercard';
    }
  }

  return null;
}
