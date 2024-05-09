interface ValidationResult {
  isValid: boolean;
  errorMessage: string;
}

type BrandType = "Diners" | "AMEX" | "UnionPay" | "Visa" | "Master" | "Normal";
