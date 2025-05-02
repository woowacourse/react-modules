export type ValidateField = "cvc" | "password" | "cardNumber" | "expiryDate";

export type FieldValueType = {
  cvc: string;
  password: string;
  cardNumber: string;
  expiryDate: string;
};
