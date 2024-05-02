import { ERROR_MESSAGE } from "../../errorMessages";
import { isNumeric } from "./common";

export const isValidInput = (value: string): [boolean, string] => {
  if (!isNumeric(value)) {
    return [false, ERROR_MESSAGE.cvcNumber.isNotNumeric];
  }

  return [true, ""];
};
