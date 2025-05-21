import { CVC_LENGTH } from "../../constants";
import { getErrorMessage } from "../getErrorMessage";

import validateCVCNumber from "./validateCVCNumber";

describe(`CVC 유효성 검사`, () => {
  it("CVC 번호가 정상적으로 들어왔을떄 에러메시지는 보여주지 않는다.", () => {
    const cardNumber = "111";
    expect(validateCVCNumber(cardNumber)).toBe("");
  });
  it(`CVC 번호가 덜입력 되었을때, ${getErrorMessage(
    "INVALID_LENGTH",
    "ko",
    CVC_LENGTH
  )}`, () => {
    const cardNumber = "11";
    expect(validateCVCNumber(cardNumber)).toBe(
      getErrorMessage("INVALID_LENGTH", "ko", CVC_LENGTH)
    );
  });
  it(`문자가 입력 되었을떄, ${getErrorMessage("NOT_NUMERIC")}`, () => {
    const cardNumber = "aa";
    expect(validateCVCNumber(cardNumber)).toBe(getErrorMessage("NOT_NUMERIC"));
  });
});
