import { CARD_BRAND_DIGIT_CONFIG } from '@/constants/cardBrand';

/**
 * @example isVisaCard(41) => true
 * @example isVisaCard(51) => false
 */
const isVisaCard = (cardBrandNumber: number) => {
  if (Math.floor(cardBrandNumber / 10) === CARD_BRAND_DIGIT_CONFIG.VISA)
    return true;

  return false;
};

/**
 * @example isMasterCard(51) => true
 * @example isMasterCard(41) => false
 */
const isMasterCard = (cardBrandNumber: number) => {
  if (
    CARD_BRAND_DIGIT_CONFIG.MASTER.START <= cardBrandNumber &&
    cardBrandNumber <= CARD_BRAND_DIGIT_CONFIG.MASTER.END
  )
    return true;

  return false;
};

/**
 * @example isAmexCard(34) => true
 * @example isAmexCard(37) => true
 * @example isAmexCard(36) => false
 */
const isAmexCard = (cardBrandNumber: number) => {
  if (
    cardBrandNumber === CARD_BRAND_DIGIT_CONFIG.AMEX.FIRST ||
    cardBrandNumber === CARD_BRAND_DIGIT_CONFIG.AMEX.SECOND
  )
    return true;

  return false;
};

/**
 * @example isDinersCard(36) => true
 * @example isDinersCard(37) => false
 */
const isDinersCard = (cardBrandNumber: number) => {
  if (cardBrandNumber === CARD_BRAND_DIGIT_CONFIG.DINERS) return true;
  return false;
};

/**
 * @example isUnionPayCard('622126xxxx') => true
 * @example isUnionPayCard('622925xxxx') => true
 * @example isUnionPayCard('624000xxxx') => true
 * @example isUnionPayCard('626999xxxx') => true
 * @example isUnionPayCard('628200xxxx') => true
 * @example isUnionPayCard('628899xxxx') => true
 * @example isUnionPayCard('622125xxxx') => false
 * @example isUnionPayCard('622926xxxx') => false
 */
const isUnionPayCard = (cardNumbers: string) => {
  const cardBrandNumber = parseInt(cardNumbers.substring(0, 2), 10);
  if (cardBrandNumber !== CARD_BRAND_DIGIT_CONFIG.UNIONPAY.FIRST_TWO_DIGIT)
    return false;

  const cardNumber2to6 = parseInt(cardNumbers.substring(2, 6), 10);
  if (
    (CARD_BRAND_DIGIT_CONFIG.UNIONPAY.SECOND_FOUR_DIGIT[0].START <=
      cardNumber2to6 &&
      cardNumber2to6 <=
        CARD_BRAND_DIGIT_CONFIG.UNIONPAY.SECOND_FOUR_DIGIT[0].END) ||
    (CARD_BRAND_DIGIT_CONFIG.UNIONPAY.SECOND_FOUR_DIGIT[1].START <=
      cardNumber2to6 &&
      cardNumber2to6 <=
        CARD_BRAND_DIGIT_CONFIG.UNIONPAY.SECOND_FOUR_DIGIT[1].END) ||
    (CARD_BRAND_DIGIT_CONFIG.UNIONPAY.SECOND_FOUR_DIGIT[2].START <=
      cardNumber2to6 &&
      cardNumber2to6 <=
        CARD_BRAND_DIGIT_CONFIG.UNIONPAY.SECOND_FOUR_DIGIT[2].END)
  )
    return true;

  return false;
};

const getCardBrand = (cardNumbers: string) => {
  const cardBrandNumber = parseInt(cardNumbers.substring(0, 2), 10);

  if (isVisaCard(cardBrandNumber)) return 'VISA';
  if (isMasterCard(cardBrandNumber)) return 'MASTER';
  if (isAmexCard(cardBrandNumber)) return 'AMEX';
  if (isDinersCard(cardBrandNumber)) return 'DINERS';
  if (isUnionPayCard(cardNumbers)) return 'UNIONPAY';
  return 'UNKNOWN';
};

export default getCardBrand;
