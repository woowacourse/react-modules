import { CARD_TYPE } from '../constants/cardType';
import { CardType } from '../types/cardType';

const detectCardType = (cardNumber: string): CardType => {
  if (new RegExp(CARD_TYPE.VISA.REGEX).test(cardNumber)) return 'VISA';
  if (new RegExp(CARD_TYPE.MASTER.REGEX).test(cardNumber)) return 'MASTER';
  if (new RegExp(CARD_TYPE.DINERS.REGEX).test(cardNumber)) return 'DINERS';
  if (new RegExp(CARD_TYPE.AMEX.REGEX).test(cardNumber)) return 'AMEX';
  if (new RegExp(CARD_TYPE.UNION_PAY.REGEX).test(cardNumber)) return 'UNION_PAY';
  if (new RegExp(CARD_TYPE.JCB.REGEX).test(cardNumber)) return 'JCB';
  if (new RegExp(CARD_TYPE.DISCOVER.REGEX).test(cardNumber)) return 'DISCOVER';

  return 'UNKNOWN';
};

export default detectCardType;
