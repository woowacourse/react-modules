export const CARD_TYPE = {
  VISA: {
    start: 4,
    length: 16,
  },

  MASTER: {
    start: 51,
    end: 55,
    length: 16,
  },

  DINERS: {
    start: 36,
    length: 14,
  },

  AMEX: {
    start: [34, 37],
    length: 15,
  },
  UNION_PAY: {
    condition1: {
      start: 622126,
      end: 622925,
    },
    condition2: {
      start: 624,
      end: 626,
    },
    condition3: {
      start: 6282,
      end: 6288,
    },

    length: 16,
  },
  EMPTY: {
    length: 16,
  },
};
