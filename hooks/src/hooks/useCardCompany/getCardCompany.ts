import { CARD_TYPE, CardType } from "./type";

const PREFIX_LENGTH = {
  VISA: 1,
  MASTER: 2,
  DINERS: 2,
  AMEX: 2,
  UNION: 6,
} as const;

export function getCardCompany(digits: string): CardType {
  const cardDetectors: Array<[CardType, () => boolean]> = [
    [
      "visa",
      () => {
        const prefix = Number(digits.slice(0, PREFIX_LENGTH.VISA));
        return (
          prefix === CARD_TYPE.visa.START_NUMBER &&
          digits.length === CARD_TYPE.visa.LENGTH
        );
      },
    ],
    [
      "master",
      () => {
        const prefix = Number(digits.slice(0, PREFIX_LENGTH.MASTER));
        return (
          prefix >= CARD_TYPE.master.START_NUMBER &&
          prefix <= CARD_TYPE.master.END_NUMBER &&
          digits.length === CARD_TYPE.master.LENGTH
        );
      },
    ],
    [
      "diners",
      () => {
        const prefix = Number(digits.slice(0, PREFIX_LENGTH.DINERS));
        return (
          prefix === CARD_TYPE.diners.START_NUMBER &&
          digits.length === CARD_TYPE.diners.LENGTH
        );
      },
    ],
    [
      "amex",
      () => {
        const prefix = Number(digits.slice(0, PREFIX_LENGTH.AMEX));
        return (
          CARD_TYPE.amex.IIN_PREFIXES.includes(prefix) &&
          digits.length === CARD_TYPE.amex.LENGTH
        );
      },
    ],
    [
      "unionPay",
      () => {
        if (digits.length !== CARD_TYPE.unionPay.LENGTH) return false;
        return CARD_TYPE.unionPay.IIN_RANGES.some(([start, end]) => {
          const prefixLen = String(start).length;
          const prefix = Number(digits.slice(0, prefixLen));
          return prefix >= start && prefix <= end;
        });
      },
    ],
  ];
  for (const [type, detector] of cardDetectors) {
    if (detector()) return type;
  }

  return "default";
}
