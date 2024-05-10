const Validation = {
  isNumericPattern: (value: string) => {
    return /^[\d-]*$/.test(value);
  },

  isEnglishPattern: (value: string) => {
    return /^[a-zA-Z ]*$/.test(value);
  },

  isExactLength: (standardLength: number, value: string) => {
    return value.length === standardLength;
  },

  isMonthInRange: (value: number) => {
    return value >= 1 && value <= 12;
  },

  isExpired: ([month, year]: number[]) => {
    const date = new Date();
    const currentYear = date.getFullYear() % 100;
    const currentMonth = date.getMonth() + 1;

    if (currentYear > year) return true;
    if (currentYear === year && currentMonth > month) return true;

    return false;
  },

  isVisa: (cardNumber: string) => {
    return cardNumber.startsWith('4');
  },

  isMastercard: (cardNumber: string) => {
    const firstTwoDigits = Number(cardNumber.slice(0, 2));

    return firstTwoDigits >= 51 && firstTwoDigits <= 55;
  },

  isDiners: (cardNumber: string) => {
    return cardNumber.startsWith('36');
  },

  isAmex: (cardNumber: string) => {
    return cardNumber.startsWith('34') || cardNumber.startsWith('37');
  },

  isUnionpay: (cardNumber: string) => {
    const firstThreeDigits = Number(cardNumber.slice(0, 3));
    const firstFourDigits = Number(cardNumber.slice(0, 4));
    const firstSixDigits = Number(cardNumber.slice(0, 6));

    return (
      (firstSixDigits >= 622126 && firstSixDigits <= 622925) ||
      (firstThreeDigits >= 624 && firstThreeDigits <= 626) ||
      (firstFourDigits >= 6282 && firstFourDigits <= 6288)
    );
  },
};

export default Validation;
