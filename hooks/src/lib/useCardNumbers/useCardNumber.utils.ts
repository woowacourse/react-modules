import { CARD_BRAND, CARD_INPUT_RULES } from "../constants/card-custom-hook";
import { CardBrand, FormattedCardNumber } from "../types/card-custom-hook";

const isVisaCard = (value: string) => value.startsWith("4");

const isMasterCard = (value: string) => {
  if (value.length < 2) return false;

  const prefixNumber = value.substring(0, 2);
  return ["51", "52", "53", "54", "55"].includes(prefixNumber);
};

const isDinersCard = (value: string) => {
  if (value.length < 2) return false;

  return value.startsWith("36");
};

const isAmexCard = (value: string) => {
  if (value.length < 2) return false;

  return value.startsWith("34") || value.startsWith("37");
};

const isUnionPayCard = (value: string) => {
  const prefixThree = value.substring(0, 3);
  const prefixFour = value.substring(0, 4);
  const prefixSix = parseInt(value.substring(0, 6));

  return (
    ["624", "625", "626"].includes(prefixThree) ||
    ["6282", "6283", "6284", "6285", "6286", "6287", "6288"].includes(prefixFour) ||
    (prefixSix >= 622126 && prefixSix <= 622925)
  );
};

export const decideCardBrand = (value: string): CardBrand => {
  if (isVisaCard(value)) return CARD_BRAND.visa;

  if (isMasterCard(value)) return CARD_BRAND.master;

  if (isDinersCard(value)) return CARD_BRAND.diners;

  if (isAmexCard(value)) return CARD_BRAND.amex;

  if (isUnionPayCard(value)) return CARD_BRAND.unionPay;

  return CARD_BRAND.none;
};

export const getCardNumberInputRules = (value: string) => {
  const cardBrand = decideCardBrand(value);

  return CARD_INPUT_RULES[cardBrand];
};

export const formattingCardNumber = (value: string, formattingRule: number[]) => {
  const formattedCardNumber = formattingRule.reduce(
    (acc: FormattedCardNumber, length: number) => {
      const start = acc.totalLength;
      const additionalSection = value.substring(start, start + length);

      if (additionalSection) {
        acc.formattedResult.push(value.substring(start, start + length));
        acc.totalLength += length;
      }

      return acc;
    },
    { formattedResult: [], totalLength: 0 }
  ).formattedResult;

  return formattedCardNumber;
};
