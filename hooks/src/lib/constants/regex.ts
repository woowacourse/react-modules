export const INPUT_REGEX = {
  numberRegex: /^[0-9]*$/,
  upperCaseRegex: /^[A-Z\s]*$/,

  cardNumber: (maxLength: number) => new RegExp(`^\\d{${maxLength}}$`),
  period: {
    month: /^(0?[1-9]|1[0-2])$/,
    year: /^[0-9]{2}$/,
  },
  cardHolder: /^[a-zA-Z\s]*$/,
  CVCNumber: (maxLength: number) => new RegExp(`^\\d{${maxLength}}$`),
  password: (maxLength: number) => new RegExp(`^\\d{${maxLength}}$`),
};
