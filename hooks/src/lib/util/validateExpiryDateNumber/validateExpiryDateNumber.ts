import { EXPIRY_DATE_LENGTH } from "../../constants";
import { getErrorMessage } from "../getErrorMessage";
import { isNumeric } from "../index";

function getExpiryDateGroupError(expiryDate: string, index: string) {
  if (!isNumeric(expiryDate)) return getErrorMessage("NOT_NUMERIC");

  if (expiryDate.length !== EXPIRY_DATE_LENGTH)
    return getErrorMessage("INVALID_LENGTH", "ko", EXPIRY_DATE_LENGTH);

  if (index === "month" && (Number(expiryDate) < 1 || Number(expiryDate) > 12))
    return getErrorMessage("INVALID_MONTH");

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
