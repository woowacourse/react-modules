import { ValidCardBrand } from "./../constants/cardBrand";
import { CARD_BRAND, CARD_BRAND_REGEX, CARD_NUMBER_LENGTH } from "../constants/cardBrand";

type CardBrandRule = {
  [cardBrand in ValidCardBrand]: {
    length: number;
    testPrefix: (cardNumber: string) => boolean;
  };
};

export const cardBrandRule: CardBrandRule = {
  [CARD_BRAND.Diners]: {
    length: CARD_NUMBER_LENGTH.Diners,
    testPrefix: (cardNumber: string) => CARD_BRAND_REGEX.startWith36.test(cardNumber),
  },
  [CARD_BRAND.AMEX]: {
    length: CARD_NUMBER_LENGTH.AMEX,
    testPrefix: (cardNumber: string) => CARD_BRAND_REGEX.startWith34or37.test(cardNumber),
  },
  [CARD_BRAND.UnionPay]: {
    length: CARD_NUMBER_LENGTH.UnionPay,
    // 624~626로 시작 / 6282~6288로 시작 / 622126~622925로 시작
    testPrefix: (cardNumber: string) => {
      const meetsFirstRule = CARD_BRAND_REGEX.startWith624to626.test(cardNumber);
      const meetsSecondRule = CARD_BRAND_REGEX.startWith6282to6288.test(cardNumber);

      const firstSixDigits = parseInt(cardNumber.slice(0, 6), 10);
      const meetsThirdRule = firstSixDigits >= 622126 && firstSixDigits <= 622925;

      return meetsFirstRule || meetsSecondRule || meetsThirdRule;
    },
  },
  [CARD_BRAND.MasterCard]: {
    length: CARD_NUMBER_LENGTH.MasterCard,
    testPrefix: (cardNumber: string) => CARD_BRAND_REGEX.startWith51to55.test(cardNumber),
  },
  [CARD_BRAND.Visa]: {
    length: CARD_NUMBER_LENGTH.Visa,
    testPrefix: (cardNumber: string) => CARD_BRAND_REGEX.startWith4.test(cardNumber),
  },
};
