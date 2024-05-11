export const INPUT_REGEX = {
  numberRegex: /^[0-9]*$/,
  upperCaseRegex: /^[A-Z\s]*$/,

  cardNumber: (maxLength: number) => new RegExp(`^\\d{${maxLength}}$`),
  period: {
    month: /^(0?[1-9]|1[0-2])$/,
    year: /^[0-9]{2}$/,
  },
  cardHolder: /^[a-zA-Z\s]*$/,
  CVCNumber: (maxLength: number) => new RegExp(`^\\d{${maxLength}}$`),
  password: (maxLength: number) => new RegExp(`^\\d{${maxLength}}$`),
};

/**
 * <카드 브랜드 구분>
 * Visa: 숫자 4로 시작
 * Master: 숫자 51~55로 시작
 * Diners: 숫자 36으로 시작
 * AMEX: 숫자 34 또는 37로 시작
 * UnionPay: 카드의 앞 번호가 아래 3가지 조건 중 1가지를 만족
 * 숫자 624~626로 시작하는 경우
 * 숫자 6282~6288로 시작하는 경우
 * 숫자 622126~622925로 시작하는 경우
 */
export const CARD_BRAND_REGEX = {
  visa: /^4/,
  master: /^(5[1-5])/,
  diners: /^36/,
  amex: /^(34|37)/,
  unionPay: /^(62[4-6]|628[2-8]|622(?:12[6-9]|1[3-9]\d|[2-8]\d\d|92[0-5]))/,
};
