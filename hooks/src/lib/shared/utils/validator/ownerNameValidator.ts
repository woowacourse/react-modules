import { ERROR_MESSAGE } from "../../errorMessages";
import { isAlphabetic } from "./common";

export const isValidInput = (value: string): [boolean, string] => {
  if (!isAlphabetic(value)) {
    return [false, ERROR_MESSAGE.ownerName.isNotAlphabetic];
  }

  return [true, ""];
};
