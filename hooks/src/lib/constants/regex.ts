const REGEX = {
  numbers: /^\d*$/,
  stringNumbers: /\d/gi,
  oneToNine: /^[1-9]$/,
  month: /^(0?[1-9]|1[0-2])$/,
  english: /^[a-zA-Z]+ ?[a-zA-Z]*$/,
  zero: /^[0]+$/,
  visa: /^[4]\d*$/,
  masterCard: /^[5][1-5]\d*$/,
  diners: /^[3][6]\d*$/,
  amex: /^[3][4|7]\d*$/,
  //TODO: 유니온페이 유효성검사 안됨
  unionPay: /^(622(1(2[6-9]|[3-9]\d)|[2-8]\d{2}|9([01]\d|2[0-5]))|62[4-6]\d{2}|628[2-8]\d)\d{10}$/,
  // unionPay의 경우 3가지 조건을 만족해야 하기 때문에, 위와 같이 3가지 조건을 모두 담은 정규표현식이 탄생함..
  cardNumberLength14: /^(\d{4})(\d{6})(\d{4})$/,
  cardNumberLength15: /^(\d{4})(\d{6})(\d{5})$/,
  cardNumberLength16: /^(\d{4})(\d{4})(\d{4})(\d{4})$/,
};

export default REGEX;
