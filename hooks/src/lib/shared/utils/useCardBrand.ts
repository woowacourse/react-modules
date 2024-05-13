import { CARD_BRAND } from '../constants';

const detectCardBrand = ({ cardNumber }: { cardNumber: string }) => {
  const prefix = cardNumber.substring(0, 6);

  if (!prefix) return null;
  if (cardNumber.startsWith('4')) return CARD_BRAND.visa;
  if (/^5[1-5]/.test(cardNumber)) return CARD_BRAND.masterCard;
  if (cardNumber.startsWith('36')) return CARD_BRAND.diners;
  if (/^34|^37/.test(cardNumber)) return CARD_BRAND.amex;
  if (
    (prefix >= '622126' && prefix <= '622925') ||
    (prefix >= '624000' && prefix <= '626999') ||
    (prefix >= '628200' && prefix <= '628899')
  )
    return CARD_BRAND.unionPay;

  return null;
};

export default detectCardBrand;
