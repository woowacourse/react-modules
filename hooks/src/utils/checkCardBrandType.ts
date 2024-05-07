import { CARD_CONFIG } from '../constants/cardBrand';

const isVisaCard = (cardBrandNumber: number) => {
  if (Math.floor(cardBrandNumber / 10) === CARD_CONFIG.VISA) return true;
};

const isMasterCard = (cardBrandNumber: number) => {
  if (
    CARD_CONFIG.MASTER.START <= cardBrandNumber &&
    cardBrandNumber <= CARD_CONFIG.MASTER.END
  )
    return true;
};

const isAmexCard = (cardBrandNumber: number) => {
  if (
    cardBrandNumber === CARD_CONFIG.AMEX.FIRST ||
    cardBrandNumber === CARD_CONFIG.AMEX.SECOND
  )
    return true;
};

const isDinersCard = (cardBrandNumber: number) => {
  if (cardBrandNumber === CARD_CONFIG.DINERS) return true;
};

const isUnionPayCard = (cardNumbers: string) => {
  const cardBrandNumber = parseInt(cardNumbers.substring(0, 2), 10);
  if (cardBrandNumber !== CARD_CONFIG.UNIONPAY.FIRST_TWO_DIGIT) return false;

  const cardNumber2to6 = parseInt(cardNumbers.substring(2, 6), 10);
  if (
    (CARD_CONFIG.UNIONPAY.SECOND_FOUR_DIGIT[0].START <= cardNumber2to6 &&
      cardNumber2to6 <= CARD_CONFIG.UNIONPAY.SECOND_FOUR_DIGIT[0].END) ||
    (CARD_CONFIG.UNIONPAY.SECOND_FOUR_DIGIT[1].START <= cardNumber2to6 &&
      cardNumber2to6 <= CARD_CONFIG.UNIONPAY.SECOND_FOUR_DIGIT[1].END) ||
    (CARD_CONFIG.UNIONPAY.SECOND_FOUR_DIGIT[2].START <= cardNumber2to6 &&
      cardNumber2to6 <= CARD_CONFIG.UNIONPAY.SECOND_FOUR_DIGIT[2].END)
  )
    return true;
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
