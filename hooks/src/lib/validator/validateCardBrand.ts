const validateVisa = (cardNumber: string) => {
  return cardNumber.startsWith('4');
};

const validateMaster = (cardNumber: string) => {
  return isValidPrefix(cardNumber, 51, 55);
};

const validateDiners = (cardNumber: string) => {
  return cardNumber.startsWith('36');
};

const validateAMEX = (cardNumber: string) => {
  return cardNumber.startsWith('34') || cardNumber.startsWith('37');
};

const validateUnion = (cardNumber: string) => {
  return (
    isValidPrefix(cardNumber, 622126, 622925) ||
    isValidPrefix(cardNumber, 6282, 6288) ||
    isValidPrefix(cardNumber, 624, 626)
  );
};

const isValidPrefix = (value: string, start: number, end: number) => {
  return (
    Number(value.slice(0, start.toString().length)) >= start &&
    Number(value.slice(0, end.toString().length)) <= end
  );
};

export { validateVisa, validateMaster, validateDiners, validateAMEX, validateUnion };
