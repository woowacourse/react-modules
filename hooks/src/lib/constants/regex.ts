export const INPUT_REGEX = {
  numberRegex: /^[0-9]*$/,
  upperCaseRegex: /^[A-Z\s]*$/,

  period: {
    month: /^(0?[1-9]|1[0-2])$/,
    year: /^[0-9]{2}$/,
  },
};

export const INPUT_REGEX_PARAMS = {
  cardNumber: (maxLength: number) => new RegExp(`^\\d{${maxLength}}$`),
  cardHolder: (maxLength: number) =>
    new RegExp(`^[a-zA-Z\\s]{1,${maxLength}}$`),
  CVCNumber: (maxLength: number) => new RegExp(`^\\d{${maxLength}}$`),
  password: (maxLength: number) => new RegExp(`^\\d{${maxLength}}$`),
};
