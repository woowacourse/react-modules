export type ValidateField =
  | "cvc"
  | "password"
  | "cardNumber"
  | "expiryDate"
  | "strictCardNumber";

export type FieldValueType = {
  cvc: string;
  password: string;
  cardNumber: string;
  expiryDate: string;
  strictCardNumber: string;
};
