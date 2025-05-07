import { EXPIRY_DATE_LENGTH, ERROR_MESSAGE } from "../constants";
import { isNumeric } from "./index";

function getExpiryDateGroupError(expiryDate: string, index: string) {
  if (!isNumeric(expiryDate)) return ERROR_MESSAGE.NOT_NUMERIC;

  if (expiryDate.length !== EXPIRY_DATE_LENGTH)
    return ERROR_MESSAGE.INVALID_LENGTH(EXPIRY_DATE_LENGTH);

  if (index === "month" && (Number(expiryDate) < 1 || Number(expiryDate) > 12))
    return ERROR_MESSAGE.INVALID_MONTH;

  return "";
}

export default function validateExpiryDateNumber(expiryDate: string[]) {
  const expiryDateErrors = ["", ""];

  expiryDate.forEach((date, index) => {
    const trimExpiryDate = date.trim();
    const dateIndex = index === 0 ? "month" : "year";

    expiryDateErrors[index] = getExpiryDateGroupError(
      trimExpiryDate,
      dateIndex
    );
  });

  return expiryDateErrors;
}
