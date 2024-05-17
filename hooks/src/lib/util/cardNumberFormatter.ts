const cardNumberFormatter = (cardNumbers: string, cardIdentifier: string) => {
  const dehyphenatedCardNumberString = cardNumbers.replace(/\D/g, "");

  const formatPatterns: Record<string, RegExp> = {
    Diners: /(\d{4})(\d{6})(\d{4})/,
    AMEX: /(\d{4})(\d{6})(\d{5})/,
    default: /(\d{4})(?=\d)/g,
  };

  const formatPattern = formatPatterns[cardIdentifier] ?? formatPatterns.default;
  return dehyphenatedCardNumberString.replace(formatPattern, "$1 ").trim();
};

export default cardNumberFormatter;
