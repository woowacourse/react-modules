type CardCompany =
  | 'BC카드'
  | '신한카드'
  | '카카오뱅크'
  | '현대카드'
  | '우리카드'
  | '롯데카드'
  | '하나카드'
  | '국민카드';

interface CardExpiration {
  month: string;
  year: string;
}

interface CardNumber {
  first: string;
  second: string;
  third: string;
  fourth: string;
}

interface CardFieldHook<T extends string> {
  value: T;
  handleChange: (newValue: T) => void;
  error: string;
}

export type { CardCompany, CardExpiration, CardNumber, CardFieldHook };
