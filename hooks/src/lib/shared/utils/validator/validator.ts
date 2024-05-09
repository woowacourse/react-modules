import { isValidInput as isValidInputCardNumber } from "./cardNumberValidator";
import { isValidInput as isValidInputCVCNumber } from "./cvcNumberValidator";
import { isValidInput as isValidInputExpiryDate, isValidDate } from "./expiryDateValidator";
import { isValidInput as isValidInputOwnerName } from "./ownerNameValidator";
import { isValidInput as isValidInputPasswordPrefix } from "./passwordPrefixValidator";

const validator = {
  cardNumber: { isValidInput: isValidInputCardNumber },
  cvcNumber: { isValidInput: isValidInputCVCNumber },
  expiryDate: { isValidInput: isValidInputExpiryDate, isValidDate },
  ownerName: { isValidInput: isValidInputOwnerName },
  passwordPrefix: { isValidInput: isValidInputPasswordPrefix },
};

export default validator;
