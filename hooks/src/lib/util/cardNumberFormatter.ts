const cardNumberFormatter = (cardNumbers: string, cardIdentifier?: string) => {
  const cleanedValue = cardNumbers.replace(/\D/g, "");

  if (cardIdentifier === "Diners") {
    return cleanedValue.replace(/(\d{4})(\d{6})(\d{4})/, "$1 $2 $3").trim();
  } else if (cardIdentifier === "AMEX") {
    return cleanedValue.replace(/(\d{4})(\d{6})(\d{5})/, "$1 $2 $3").trim();
  } else {
    return cleanedValue.replace(/(\d{4})(?=\d)/g, "$1 ").trim();
  }
};

export default cardNumberFormatter;
