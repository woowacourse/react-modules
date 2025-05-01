import { CVC_LENGTH, ERROR_MESSAGE } from "../constants";
import { isNumeric } from "./index";
export default function validateCVCNumber(CVCNumber: string) {
  const trimCVCNumber = CVCNumber.trim();
  if (!isNumeric(trimCVCNumber)) return ERROR_MESSAGE.NOT_NUMERIC;

  if (trimCVCNumber.length !== CVC_LENGTH)
    return ERROR_MESSAGE.INVALID_LENGTH(CVC_LENGTH);
  return "";
}
