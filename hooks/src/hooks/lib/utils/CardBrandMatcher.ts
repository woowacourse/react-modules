import getCardPrefix from "./getCardPrefix";

const DINERS_CONDITION = {
  MATCHED_LENGTH: 14,
  PREFIX_LENGTH: 2,
  MATCHED_PREFIX: 36,
} as const;

const AMEX_CONDITION = {
  LENGTH: 15,
  PREFIX_LENGTH: 2,
  MIN_MATCHED_PREFIX: 34,
  MAX_MATCHED_PREFIX: 37,
} as const;

const UNION_PAY_CONDITION = {
  LENGTH: 16,
  SIX_PREFIX_LENGTH: 6,
  THREE_PREFIX_LENGTH: 3,
  FOUR_PREFIX_LENGTH: 4,
  MIN_SIX_LENGTH_PREFIX: 622126,
  MAX_SIX_LENGTH_PREFIX: 622925,
  MIN_THREE_LENGTH_PREFIX: 624,
  MAX_THREE_LENGTH_PREFIX: 626,
  MIN_FOUR_LENGTH_PREFIX: 6282,
  MAX_FOUR_LENGTH_PREFIX: 6288,
} as const;

const VISA_CONDITION = {
  LENGTH: 16,
  PREFIX_LENGTH: 1,
  MATCHED_PREFIX: 4,
} as const;

const MASTER_CARD_CONDITION = {
  LENGTH: 16,
  PREFIX_LENGTH: 2,
  MIN_MATCHED_PREFIX: 51,
  MAX_MATCHED_PREFIX: 55,
} as const;

const CardBrandMatcher = {
  isVisa: (cardNumbers: string) => {
    const cardNumberPrefix = getCardPrefix({
      cardNumbers,
      length: VISA_CONDITION.PREFIX_LENGTH,
    });

    return (
      cardNumbers.length === VISA_CONDITION.LENGTH &&
      cardNumberPrefix === VISA_CONDITION.MATCHED_PREFIX
    );
  },

  isMasterCard: (cardNumbers: string) => {
    const cardNumberPrefix = getCardPrefix({
      cardNumbers,
      length: MASTER_CARD_CONDITION.PREFIX_LENGTH,
    });

    return (
      cardNumbers.length === MASTER_CARD_CONDITION.LENGTH &&
      cardNumberPrefix >= MASTER_CARD_CONDITION.MIN_MATCHED_PREFIX &&
      cardNumberPrefix <= MASTER_CARD_CONDITION.MAX_MATCHED_PREFIX
    );
  },

  isDiners: (cardNumbers: string) => {
    const cardNumberPrefix = getCardPrefix({
      cardNumbers,
      length: DINERS_CONDITION.PREFIX_LENGTH,
    });
    return (
      cardNumbers.length === DINERS_CONDITION.MATCHED_LENGTH &&
      cardNumberPrefix === DINERS_CONDITION.MATCHED_PREFIX
    );
  },

  isAMEX: (cardNumbers: string) => {
    const cardNumberPrefix = getCardPrefix({
      cardNumbers,
      length: AMEX_CONDITION.PREFIX_LENGTH,
    });

    return (
      cardNumbers.length === AMEX_CONDITION.LENGTH &&
      (cardNumberPrefix === AMEX_CONDITION.MIN_MATCHED_PREFIX ||
        cardNumberPrefix === AMEX_CONDITION.MAX_MATCHED_PREFIX)
    );
  },

  isUnionPay: (cardNumbers: string) => {
    const sixCardNumberPrefix = getCardPrefix({
      cardNumbers,
      length: UNION_PAY_CONDITION.SIX_PREFIX_LENGTH,
    });

    const fourCardNumberPrefix = getCardPrefix({
      cardNumbers,
      length: UNION_PAY_CONDITION.FOUR_PREFIX_LENGTH,
    });

    const threeCardNumberPrefix = getCardPrefix({
      cardNumbers,
      length: UNION_PAY_CONDITION.THREE_PREFIX_LENGTH,
    });

    return (
      cardNumbers.length === UNION_PAY_CONDITION.LENGTH &&
      ((sixCardNumberPrefix >= UNION_PAY_CONDITION.MIN_SIX_LENGTH_PREFIX &&
        sixCardNumberPrefix <= UNION_PAY_CONDITION.MAX_SIX_LENGTH_PREFIX) ||
        (threeCardNumberPrefix >= UNION_PAY_CONDITION.MIN_THREE_LENGTH_PREFIX &&
          threeCardNumberPrefix <=
            UNION_PAY_CONDITION.MAX_THREE_LENGTH_PREFIX) ||
        (fourCardNumberPrefix >= UNION_PAY_CONDITION.MIN_FOUR_LENGTH_PREFIX &&
          fourCardNumberPrefix <= UNION_PAY_CONDITION.MAX_FOUR_LENGTH_PREFIX))
    );
  },
};

export default CardBrandMatcher;
