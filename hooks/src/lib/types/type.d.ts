interface ValidationResult {
  isValid: boolean;
  errorMessage: string;
}

type EventType = FocusEvent<HTMLInputElement> | KeyboardEvent<HTMLInputElement>;

type CardBrandType = "Visa" | "MasterCard" | "Diners" | "AMEX" | "UnionPay" | null;
