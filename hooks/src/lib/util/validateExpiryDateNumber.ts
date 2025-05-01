import { EXPIRY_DATE_LENGTH, ERROR_MESSAGE } from "../constants";
import { isNumeric } from "./index";
export default function validateExpiryDateNumber(expiryDate: string) {
  const trimExpiryDate = expiryDate.trim();

  if (!isNumeric(trimExpiryDate)) return ERROR_MESSAGE.NOT_NUMERIC;

  if (trimExpiryDate.length !== EXPIRY_DATE_LENGTH)
    return ERROR_MESSAGE.INVALID_LENGTH(EXPIRY_DATE_LENGTH);

  const MM = Number(trimExpiryDate.slice(0, 2));
  const YY = Number(trimExpiryDate.slice(2, 4));

  if (MM < 1 || MM > 12) return ERROR_MESSAGE.INVALID_MONTH;

  return "";
}
