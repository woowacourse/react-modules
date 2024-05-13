export const OPTION = {
  cardNumberInputCount: 1,
  cardNumberMaxLength: 16,
  expirationDateInputCount: 2,
  expirationDateMaxLength: 2,
  nameInputCount: 1,
  nameMaxLength: 50,
  cvcInputCount: 1,
  cvcMaxLength: 3,
  passwordInputCount: 1,
  passwordMaxLength: 2,
  cardCompanyInputCount: 1,
  minMonth: "01",
  maxMonth: "12",
};

interface CardBrandMaxLengthType {
  [key: string]: number;
}

export const CARD_BRAND_MAX_LENGTH: CardBrandMaxLengthType = {
  Visa: 16,
  MasterCard: 16,
  Diners: 14,
  AMEX: 15,
  UnionPay: 16,
};

export const CARD = {
  BC카드: "BC카드",
  신한카드: "신한카드",
  카카오뱅크: "카카오뱅크",
  현대카드: "현대카드",
  우리카드: "우리카드",
  롯데카드: "롯데카드",
  하나카드: "하나카드",
  국민카드: "국민카드",
};
