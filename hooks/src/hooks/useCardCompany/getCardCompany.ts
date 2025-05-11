import { CARD_TYPE } from "./type";

const CARD_NUMBER_RULE = {
  VISA_TYPE_MAX_LENGTH: 1,
  MASTER_TYPE_MAX_LENGTH: 2,
  DINERS_TYPE_MAX_LENGTH: 2,
  AMEX_TYPE_MAX_LENGTH: 2,
  UNION_TYPE_MAX_LENGTH: 6,
} as const;

type CardType = keyof typeof CARD_TYPE;

export function getCardCompany(digits: string): CardType {
  const visaPrefix = digits.slice(0, CARD_NUMBER_RULE.VISA_TYPE_MAX_LENGTH);
  const masterPrefix = digits.slice(0, CARD_NUMBER_RULE.MASTER_TYPE_MAX_LENGTH);
  const dinersPrefix = digits.slice(0, CARD_NUMBER_RULE.DINERS_TYPE_MAX_LENGTH);
  const amexPrefix = digits.slice(0, CARD_NUMBER_RULE.AMEX_TYPE_MAX_LENGTH);

  const visaNum = Number(visaPrefix);
  const masterNum = Number(masterPrefix);
  const dinersNum = Number(dinersPrefix);
  const amexNum = Number(amexPrefix);

  if (
    visaPrefix.length === CARD_NUMBER_RULE.VISA_TYPE_MAX_LENGTH &&
    visaNum === CARD_TYPE.visa.START_NUMBER &&
    digits.length === CARD_TYPE.visa.LENGTH
  ) {
    return "visa";
  } else if (
    masterPrefix.length === CARD_NUMBER_RULE.MASTER_TYPE_MAX_LENGTH &&
    masterNum >= CARD_TYPE.master.START_NUMBER &&
    masterNum <= CARD_TYPE.master.END_NUMBER &&
    digits.length === CARD_TYPE.master.LENGTH
  ) {
    return "master";
  } else if (
    dinersPrefix.length === CARD_NUMBER_RULE.DINERS_TYPE_MAX_LENGTH &&
    dinersNum === CARD_TYPE.diners.START_NUMBER &&
    digits.length === CARD_TYPE.diners.LENGTH
  ) {
    return "diners";
  } else if (
    amexPrefix.length === CARD_NUMBER_RULE.AMEX_TYPE_MAX_LENGTH &&
    CARD_TYPE.amex.IIN_PREFIXES.includes(amexNum) &&
    digits.length === CARD_TYPE.amex.LENGTH
  ) {
    return "amex";
  } else if (
    digits.length === CARD_TYPE.unionPay.LENGTH &&
    CARD_TYPE.unionPay.IIN_RANGES.some(([start, end]) => {
      const prefixLen = String(start).length;
      const pref = Number(digits.slice(0, prefixLen));
      return pref >= start && pref <= end;
    })
  ) {
    return "unionPay";
  } else {
    return "default";
  }
}
