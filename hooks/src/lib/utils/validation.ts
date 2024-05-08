const Validation = {
  isNumericPattern: (value: string) => {
    return /^\d*$/.test(value);
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
    const VISA_LENGTH = 16;

    return Validation.isExactLength(VISA_LENGTH, cardNumber) && cardNumber.startsWith('4');
  },

  isMasterCard: (cardNumber: string) => {
    const MASTERCARD_LENGTH = 16;
    const firstTwoDigits = Number(cardNumber.slice(0, 2));

    return Validation.isExactLength(MASTERCARD_LENGTH, cardNumber) && firstTwoDigits >= 51 && firstTwoDigits <= 55;
  },
};

export default Validation;
