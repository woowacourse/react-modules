export const identifyCardNumber = (inputStates: string) => {
  if (inputStates.length >= 1) {
    if (inputStates.startsWith('4'))
      return { cardBrand: 'visa', maxLength: 16 };
  }
  if (inputStates.length >= 2) {
    if (inputStates.startsWith('34') || inputStates.startsWith('37')) {
      return { cardBrand: 'amex', maxLength: 15 };
    }
    if (inputStates.startsWith('36'))
      return { cardBrand: 'diners', maxLength: 14 };
    
    const startsWith = Number(inputStates.slice(0, 2));
    if (startsWith >= 51 && startsWith <= 55)
      return { cardBrand: 'master', maxLength: 16 };
  }
  if (inputStates.length >= 3) {
    const startsWith = Number(inputStates.slice(0, 3));
    if (startsWith >= 624 && startsWith <= 626)
      return { cardBrand: 'unionpay', maxLength: 16 };
  }
  if (inputStates.length >= 4) {
    const startsWith = Number(inputStates.slice(0, 4));
    if (startsWith >= 6282 && startsWith <= 6288)
      return { cardBrand: 'unionpay', maxLength: 16 };
  }
  if (inputStates.length >= 6) {
    const startsWith = Number(inputStates.slice(0, 6));
    if (startsWith >= 622126 && startsWith <= 622925)
      return { cardBrand: 'unionpay', maxLength: 16 };
  }

  return { cardBrand: 'default', maxLength: 16 };
};
