export type FieldDefinition<T extends string> = {
  name: T;
  length: number;
};

export type CardBrand =
  | 'VISA'
  | 'MASTERCARD'
  | 'AMEX'
  | 'DINERS'
  | 'UNIONPAY'
  | 'UNKNOWN';
