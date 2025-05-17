export const CARD_BRAND = {
  Visa: {
    length: 16,
    format: [4, 4, 4, 4],
    condition: (value: string) => value.startsWith("4"),
  },
  MasterCard: {
    length: 16,
    format: [4, 4, 4, 4],
    condition: (value: string) => {
      const number = Number(value.slice(0, 2));
      return number >= 51 && number <= 55;
    },
  },
  Diners: {
    length: 14,
    format: [4, 6, 4],
    condition: (value: string) => value.startsWith("36"),
  },
  Amex: {
    length: 15,
    format: [4, 6, 5],
    condition: (value: string) =>
      value.startsWith("34") || value.startsWith("37"),
  },
  UnionPay: {
    length: 16,
    format: [4, 4, 4, 4],
    condition: (value: string) => {
      const six = Number(value.slice(0, 6));
      const three = Number(value.slice(0, 3));
      const four = Number(value.slice(0, 4));
      return (
        (six >= 622126 && six <= 622925) ||
        (three >= 624 && three <= 626) ||
        (four >= 6282 && four <= 6288)
      );
    },
  },
  none: { length: null, format: [], condition: null },
};
