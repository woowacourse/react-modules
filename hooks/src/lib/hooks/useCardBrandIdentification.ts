export default function useCardBrandIdentification(value: string): string {
  // 36으로 시작하고 뒤에 12자리 숫자가 오면 Diners
  if (/^36\d{12}$/.test(value)) {
    return "Diners";
  }

  // 34 또는 37로 시작하고 뒤에 13자리 숫자가 오면 AMEX
  if (/^3[47]\d{13}$/.test(value)) {
    return "AMEX";
  }

  // 4로 시작하고 뒤에 15자리 숫자가 오면 Visa
  if (/^4\d{15}$/.test(value)) {
    return "Visa";
  }

  //  51부터 55 사이의 숫자로 시작하고 뒤에 14자리 숫자가 오면 Mastercard
  if (/^5[1-5]\d{14}$/.test(value)) {
    return "Mastercard";
  }

  // 622126~22925, 624~626, 6282~6288로 시작하는 16자리 숫자라면 UnionPay
  if (
    /^(622(1(2[6-9]|[3-9]\d)|[2-8]\d{2}|9([01]\d|2[0-5]))|62[4-6]\d{2}|628[2-8]\d)\d{10}$/.test(
      value
    )
  ) {
    return "UnionPay";
  }

  return "Unknown";
}
