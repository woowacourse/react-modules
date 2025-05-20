import { CVC_LENGTH } from "../../constants";
import { getErrorMessage } from "../getErrorMessage";
import { isNumeric } from "../index";
export default function validateCVCNumber(CVCNumber: string) {
  const trimCVCNumber = CVCNumber.trim();
  if (!isNumeric(trimCVCNumber)) return getErrorMessage("NOT_NUMERIC");

  if (trimCVCNumber.length !== CVC_LENGTH)
    return getErrorMessage("INVALID_LENGTH", "ko", CVC_LENGTH);
  return "";
}
