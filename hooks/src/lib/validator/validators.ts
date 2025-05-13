import { createValidator } from "./index";

const validateCVC = createValidator("cvc");

const validateCardNumber = createValidator("cardNumber");

const validateStrictCardNumber = createValidator("strictCardNumber");

const validatePassword = createValidator("password");

const validateExpiryDate = createValidator("expiryDate");

export {
  validateCVC,
  validateCardNumber,
  validatePassword,
  validateExpiryDate,
  validateStrictCardNumber,
};
