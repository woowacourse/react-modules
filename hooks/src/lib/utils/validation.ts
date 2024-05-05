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

  isExpired: (month: number, year: number, inputLength = 2) => {
    const date = new Date();
    const currentYear = date.getFullYear() % 10 ** inputLength;
    const currentMonth = date.getMonth() + 1;
    const isExactLength = Validation.isExactLength(inputLength, String(month)) && Validation.isExactLength(inputLength, String(year));

    if (isExactLength) {
      if (currentYear > year) return true;
      else if (currentYear === year && currentMonth > month) return true;
      else return false;
    }
  },

  isVisa: (cardNumber: string) => {
    return cardNumber.startsWith('4');
  },

  isMasterCard: (cardNumber: string) => {
    const firstTwoDigits = Number(cardNumber[0].slice(0, 2));

    return firstTwoDigits >= 51 && firstTwoDigits <= 55;
  },
};

export default Validation;
