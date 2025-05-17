import { CARD_BRANDS } from '../constants';

export const identifyCardNumber = (input: string) => {
  for (const { name, length, startNumbers } of CARD_BRANDS) {
    for (const rule of startNumbers) {
      if (typeof rule === 'number') {
        const slice = input.slice(0, rule.toString().length);
        if (slice === rule.toString()) {
          return { cardBrand: name, maxLength: length };
        }
      } else if (Array.isArray(rule)) {
        const [min, max] = rule;
        const slice = input.slice(0, min.toString().length);
        const numeric = Number(slice);
        if (numeric >= min && numeric <= max) {
          return { cardBrand: name, maxLength: length };
        }
      }
    }
  }

  return { cardBrand: 'default', maxLength: 16 };
};
