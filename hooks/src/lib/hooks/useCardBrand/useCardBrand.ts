export const detectCardCompany = (firstDigits: string): string | null => {
  const length = firstDigits.length;

  if (length >= 1 && /^4/.test(firstDigits)) return "VISA";

  if (length >= 2) {
    if (/^5[1-5]/.test(firstDigits)) return "MASTERCARD";
    if (/^36/.test(firstDigits)) return "DINERS";
    if (/^3[47]/.test(firstDigits)) return "AMEX";
  }

  if (length >= 3 && /^62[4-6]/.test(firstDigits)) return "UNIONPAY";
  if (length >= 4 && /^628[2-8]/.test(firstDigits)) return "UNIONPAY";
  if (
    length >= 6 &&
    /^622(12[6-9]|1[3-9][0-9]|[2-8][0-9]{2}|9[0-1][0-9]|92[0-5])/.test(
      firstDigits,
    )
  )
    return "UNIONPAY";

  return null;
};

const useCardBrand = (firstDigits: string) => {
  return detectCardCompany(firstDigits);
};

export default useCardBrand;
