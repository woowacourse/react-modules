import { ERROR_MESSAGE } from "../../errorMessages";
import { ExpiryDateType } from "../../types";
import { isNumeric } from "./common";

export const isValidInput = (value: string, type: ExpiryDateType): [boolean, string] => {
  if (!isNumeric(value)) {
    return [false, ERROR_MESSAGE.expiryDate[type].isNotNumeric];
  }

  if ((type === "month" && Number(value) > 12) || Number(value) < 1) {
    return [false, ERROR_MESSAGE.expiryDate.month.isInvalidMonth];
  }

  return [true, ""];
};

export const isValidDate = (month: string, year: string): [boolean, string] => {
  const currentDate = new Date();
  const currentMonth = currentDate.getMonth() + 1;
  const currentYear = currentDate.getFullYear() % 100;

  const expirationMonth = parseInt(month);
  const expirationYear = parseInt(year);

  const isExpired =
    expirationYear < currentYear ||
    (expirationYear === currentYear && expirationMonth < currentMonth);
  const errorMessage = isExpired ? ERROR_MESSAGE.expiryDate.isExpiredDate : "";

  return [!isExpired, errorMessage];
};
