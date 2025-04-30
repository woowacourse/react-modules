import { EXPIRY_DATE_LENGTH, ERROR_MESSAGE } from "../constants";
import { isNumeric } from "./index";
export default function validateExpiryDateNumber(expiryDate: string) {
  if (!isNumeric(expiryDate)) return ERROR_MESSAGE.NOT_NUMERIC;

  if (expiryDate.length !== EXPIRY_DATE_LENGTH)
    return ERROR_MESSAGE.INVALID_LENGTH(EXPIRY_DATE_LENGTH);

  const MM = Number(expiryDate.slice(0, 2));
  const YY = Number(expiryDate.slice(2, 4));

  if (MM < 1 || MM > 12) return ERROR_MESSAGE.INVALID_MONTH;

  return "";
}
