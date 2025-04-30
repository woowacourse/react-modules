import { CVC_LENGTH, ERROR_MESSAGE } from "../constants";
import { isNumeric } from "./index";
export default function validateCVCNumber(CVCNumber: string) {
  if (!isNumeric(CVCNumber)) return ERROR_MESSAGE.NOT_NUMERIC;

  if (CVCNumber.length !== CVC_LENGTH)
    return ERROR_MESSAGE.INVALID_LENGTH(CVC_LENGTH);
}
