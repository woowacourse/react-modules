const formatFunctions: Record<string, (cardNumbers: string) => string> = {
  Diners: (cardNumbers: string) =>
    cardNumbers.replace(/(\d{1,4})(\d{1,6})?(\d{1,4})?/, (_, p1, p2, p3) =>
      [p1, p2, p3].filter(Boolean).join(' ')
    ),
  AMEX: (cardNumbers: string) =>
    cardNumbers.replace(/(\d{1,4})(\d{1,6})?(\d{1,5})?/, (_, p1, p2, p3) =>
      [p1, p2, p3].filter(Boolean).join(' ')
    ),
  UnionPay: (cardNumbers: string) =>
    cardNumbers.replace(
      /(\d{1,4})(\d{1,4})?(\d{1,4})?(\d{1,4})?/,
      (_, p1, p2, p3, p4) => [p1, p2, p3, p4].filter(Boolean).join(' ')
    ),
  Visa: (cardNumbers: string) =>
    cardNumbers.replace(
      /(\d{1,4})(\d{1,4})?(\d{1,4})?(\d{1,4})?/,
      (_, p1, p2, p3, p4) => [p1, p2, p3, p4].filter(Boolean).join(' ')
    ),
  MasterCard: (cardNumbers: string) =>
    cardNumbers.replace(
      /(\d{1,4})(\d{1,4})?(\d{1,4})?(\d{1,4})?/,
      (_, p1, p2, p3, p4) => [p1, p2, p3, p4].filter(Boolean).join(' ')
    ),
  Empty: (cardNumbers: string) => cardNumbers,
} as const;

export default formatFunctions;
