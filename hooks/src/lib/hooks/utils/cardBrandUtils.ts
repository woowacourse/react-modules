export const getCardNumberMaxLength = (brand: string | null): number => {
  switch (brand) {
    case "AMEX":
      return 15;
    case "DINERS":
      return 14;
    case "UNIONPAY":
    case "VISA":
    case "MASTERCARD":
      return 16;
    default:
      return 19;
  }
};

export const validateCardNumberForBrand = (
  number: string,
  brand: string,
): boolean => {
  const length = number.length;
  switch (brand) {
    case "VISA":
    case "MASTERCARD":
    case "UNIONPAY":
      return length === 16;
    case "AMEX":
      return length === 15;
    case "DINERS":
      return length === 14;
    default:
      return false;
  }
};
