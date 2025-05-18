// cardFormatUtils.ts
export const FORMAT_PATTERNS = {
  FourFourFourFour: /(\d{4})(\d{4})(\d{4})(\d{0,4})/,
  FourSixFour: /(\d{4})(\d{6})(\d{0,4})/,
  FourSixFive: /(\d{4})(\d{6})(\d{0,5})/,
};

interface FormatCardNumberParams {
  pattern: RegExp;
  cardNumber: string;
  groupCount: number;
}

export function formatCardNumber({
  pattern,
  cardNumber,
  groupCount,
}: FormatCardNumberParams): string[] {
  const formatted = cardNumber.replace(pattern, (_match, ...groups) =>
    groups.slice(0, groupCount).join(" ")
  );

  return formatted.trim().split(" ");
}
