//각 카드 네크워크 별 각 자리숫자자리 상수화

import { CardNumbersKeys } from '../useCardNumbers/useCardNumbers';

type CardNumberLengthByPosition = Record<CardNumbersKeys, number>;

export const VISA_CARD_NUMBER_LENGTH_BY_POSITION: CardNumberLengthByPosition = {
  FIRST: 4,
  SECOND: 4,
  THIRD: 4,
  FOURTH: 4,
};
export const MASTER_CARD_NUMBER_LENGTH_BY_POSITION: CardNumberLengthByPosition =
  {
    FIRST: 4,
    SECOND: 4,
    THIRD: 4,
    FOURTH: 4,
  };
export const AMEX_CARD_NUMBER_LENGTH_BY_POSITION: CardNumberLengthByPosition = {
  FIRST: 4,
  SECOND: 6,
  THIRD: 5,
  FOURTH: 0,
};
export const DINERS_CARD_NUMBER_LENGTH_BY_POSITION: CardNumberLengthByPosition =
  {
    FIRST: 4,
    SECOND: 6,
    THIRD: 4,
    FOURTH: 0,
  };
export const UNIONPAY_CARD_NUMBER_LENGTH_BY_POSITION: CardNumberLengthByPosition =
  {
    FIRST: 4,
    SECOND: 4,
    THIRD: 4,
    FOURTH: 4,
  };
