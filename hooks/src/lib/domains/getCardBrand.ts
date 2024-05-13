export type CardBrand = "visa" | "mastercard" | "diners" | "amex" | "union";

const MAX_LENGTH = {
  visa: 16,
  mastercard: 16,
  diners: 14,
  amex: 15,
  union: 16,
};

const UNION = {
  startFrom: 622126,
  startTo: 622925,
};

const maxLengthValidator = (value: string, cardBrand: CardBrand) => value.length <= MAX_LENGTH[cardBrand];

const matchers: Record<CardBrand, (value: string) => boolean> = {
  visa: (value) => /^4\d*$/.test(value) && maxLengthValidator(value, "visa"),
  mastercard: (value) => /^5[1-5]\d*$/.test(value) && maxLengthValidator(value, "mastercard"),
  diners: (value) => /^36\d*$/.test(value) && maxLengthValidator(value, "diners"),
  amex: (value) => /^3[47]\d*$/.test(value) && maxLengthValidator(value, "amex"),
  union: (value) =>
    (/^62[456]\d*$/.test(value) ||
      /^628[2-8]\d*$/.test(value) ||
      (Number(value.slice(0, 6)) >= UNION.startFrom && Number(value.slice(0, 6)) <= UNION.startTo)) &&
    maxLengthValidator(value, "union"),
};

const getCardBrand = (value: string) => {
  const matched = Object.entries(matchers).find(([, validate]) => validate(value));
  if (matched) {
    return matched[0] as CardBrand;
  }
  return "none";
};

export default getCardBrand;
