const CARD_TYPE_RULES = [
  {
    type: "UnionPay",
    ranges: [
      [622126, 622925],
      [624000, 626999],
      [628200, 628899],
    ],
  },
  {
    type: "Visa",
    prefixes: ["4"],
  },
  {
    type: "MasterCard",
    prefixes: ["51", "52", "53", "54", "55"],
  },
  {
    type: "Diners",
    prefixes: ["36"],
  },
  {
    type: "AMEX",
    prefixes: ["34", "37"],
  },
];

const getCardType = (cardNumber: string) => {
  const cardBIN = Number(cardNumber.slice(0, 6));

  for (const cardRule of CARD_TYPE_RULES) {
    if (cardRule.ranges) {
      for (const [min, max] of cardRule.ranges) {
        if (min <= cardBIN && cardBIN <= max) {
          return cardRule.type;
        }
      }
    }

    if (cardRule.prefixes) {
      for (const prefix of cardRule.prefixes) {
        if (cardNumber.startsWith(prefix)) {
          return cardRule.type;
        }
      }
    }
  }

  return null;
};
export default getCardType;
