import { ERROR_MESSAGE } from "../../errorMessages";
import { isNumeric } from "./common";

export const isValidInput = (value: string): [boolean, string] => {
  if (!isNumeric(value)) {
    console.log(value, "false");
    return [false, ERROR_MESSAGE.cvcNumber.isNotNumeric];
  }

  console.log(value, "true");
  return [true, ""];
};
