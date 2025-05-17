import CARD_BRAND_INFO from '../constants/CARD_BRAND_INFO';

const checkCardBrand = (cardNumber: string): string => {
  for (const [brand, { PREFIX, LENGTH }] of Object.entries(CARD_BRAND_INFO)) {
    if (cardNumber.length === LENGTH && PREFIX.some((prefix) => cardNumber.startsWith(prefix))) {
      return brand;
    }
  }
  return '';
};

export default checkCardBrand;
