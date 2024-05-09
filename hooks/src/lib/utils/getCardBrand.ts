import { CARD_BRAND } from "../constants/option";

const getCardBrand = (cardNumber: string) => {
  if (checkIsVisa(cardNumber)) return CARD_BRAND.Visa;
  if (checkIsMaster(cardNumber)) return CARD_BRAND.Master;
  if (checkIsDiners(cardNumber)) return CARD_BRAND.Diners;
  if (checkAMEX(cardNumber)) return CARD_BRAND.AMEX;
  if (checkIsUnionPay(cardNumber)) return CARD_BRAND.UnionPay;

  return CARD_BRAND.Normal;
};

const checkIsUnionPay = (cardNumber: string) => {
  const firstThreeDigits = cardNumber.slice(0, 3);
  const firstFourDigits = cardNumber.slice(0, 4);
  const firstSixDigits = cardNumber.slice(0, 6);

  if ("624" <= firstThreeDigits && firstThreeDigits <= "626") return true;
  if ("6282" <= firstFourDigits && firstFourDigits <= "6288") return true;
  if ("622126" <= firstSixDigits && firstSixDigits <= "622925") return true;

  return false;
};

const checkIsVisa = (cardNumber: string) => {
  return cardNumber.startsWith("4");
};

const checkIsMaster = (cardNumber: string) => {
  const firstTwoDigits = cardNumber.slice(0, 2);

  return "51" <= firstTwoDigits && firstTwoDigits <= "55";
};

const checkIsDiners = (cardNumber: string) => {
  const firstTwoDigits = cardNumber.slice(0, 2);

  return firstTwoDigits === "36";
};

const checkAMEX = (cardNumber: string) => {
  const firstTwoDigits = cardNumber.slice(0, 2);

  return ["34", "37"].includes(firstTwoDigits);
};

export default getCardBrand;
