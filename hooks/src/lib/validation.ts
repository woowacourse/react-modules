const validation = {
  isNumber: (value: string) => {
    const regex = /^[0-9]+$/;
    return regex.test(value);
  },
  isValidLength: (value: string, length: number) => {
    return value.length === length;
  },
  isValidMonth: (value: string) => {
    const numericMonth = Number(value);
    if (numericMonth < 1 || numericMonth > 12) {
      return false;
    }
    return true;
  },

  isValidYear: (value: string) => {
    const numericYear = Number(value);
    const currentYear = new Date().getFullYear() % 100;

    if (currentYear > numericYear) {
      return false;
    }

    return true;
  },
  isValidateDate: (month: string, year: string) => {
    const numericMonth = Number(month);
    const numericYear = Number(year);
    const currentYear = new Date().getFullYear() % 100;

    if (currentYear === numericYear) {
      const currentMonth = new Date().getMonth() + 1;
      if (currentMonth > numericMonth) {
        return false;
      }
    }

    return true;
  }
};

export default validation;
