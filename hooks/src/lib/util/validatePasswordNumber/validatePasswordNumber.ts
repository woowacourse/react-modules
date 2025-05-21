import { PASSWORD_LENGTH } from "../../constants";
import { getErrorMessage } from "../getErrorMessage";
import { isNumeric } from "../index";
export default function validatePasswordNumber(passwordNumber: string) {
  const trimPasswordNumber = passwordNumber.trim();
  if (!isNumeric(trimPasswordNumber)) return getErrorMessage("NOT_NUMERIC");

  if (trimPasswordNumber.length !== PASSWORD_LENGTH)
    return getErrorMessage("INVALID_LENGTH", "ko", PASSWORD_LENGTH);
  return "";
}
