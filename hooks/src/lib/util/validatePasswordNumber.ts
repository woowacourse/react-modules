import { PASSWORD_LENGTH, ERROR_MESSAGE } from "../constants";
import { isNumeric } from "./index";
export default function validatePasswordNumber(passwordNumber: string) {
  const trimPasswordNumber = passwordNumber.trim();
  if (!isNumeric(trimPasswordNumber)) return ERROR_MESSAGE.NOT_NUMERIC;

  if (trimPasswordNumber.length !== PASSWORD_LENGTH)
    return ERROR_MESSAGE.INVALID_LENGTH(PASSWORD_LENGTH);
  return "";
}
