export const validateCardNumber = (
  value: string,
  cardNumbersLength: number
): boolean => {
  if (value !== "" && Number.isNaN(Number(value))) {
    return true;
  }

  if (value !== "" && value.length < cardNumbersLength) {
    return true;
  }

  return false;
};

export const validateCardCompany = (
  value: string,
  defaultValue: string
): boolean => {
  if (value === defaultValue) return true;

  return false;
};

export const validateCardExpiration = (
  value: string,
  type: string
): boolean => {
  if (value !== "" && Number.isNaN(Number(value))) {
    return true;
  }

  if (value !== "" && value.length != 2) {
    return true;
  }

  if (
    value !== "" &&
    type === "MM" &&
    !(Number(value) >= 1 && Number(value) <= 12)
  ) {
    return true;
  }

  return false;
};

export const validateUserName = (
  value: string,
  cardUserNameLength: number
): boolean => {
  if (
    value !== "" &&
    !new RegExp(`^[a-zA-Z\\s]{0,${cardUserNameLength}}$`).test(value)
  ) {
    return true;
  }

  return false;
};

export const validateCVC = (value: string, cardCVCLength: number): boolean => {
  if (value !== "" && Number.isNaN(Number(value))) {
    return true;
  }

  if (value !== "" && value.length !== cardCVCLength) {
    return true;
  }

  return false;
};

export const validatePassword = (
  value: string,
  passwordLength: number
): boolean => {
  if (value !== "" && Number.isNaN(Number(value))) {
    return true;
  }

  if (value !== "" && value.length !== passwordLength) {
    return true;
  }

  return false;
};
