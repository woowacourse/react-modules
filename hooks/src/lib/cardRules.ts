export const CARD_TYPE_RULES = {
  VISA: (prefix: string) => prefix.startsWith("4"),
  MasterCard: (prefix: string) => {
    const p = Number(prefix.slice(0, 2));
    return p >= 51 && p <= 55;
  },
  AMEX: (prefix: string) => {
    const p = prefix.slice(0, 2);
    return p === "34" || p === "37";
  },
  Diners: (prefix: string) => prefix.startsWith("36"),
  UnionPay: (prefix: string) => {
    const p3 = Number(prefix.slice(0, 3));
    const p4 = Number(prefix.slice(0, 4));
    const p6 = Number(prefix.slice(0, 6));
    return (
      (p6 >= 622126 && p6 <= 622925) ||
      (p3 >= 624 && p3 <= 626) ||
      (p4 >= 6282 && p4 <= 6288)
    );
  },
};
