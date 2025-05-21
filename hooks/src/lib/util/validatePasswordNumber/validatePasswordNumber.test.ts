import { PASSWORD_LENGTH } from "../../constants";
import { getErrorMessage } from "../getErrorMessage";

import validatePasswordNumber from "./validatePasswordNumber";

describe(`Password 유효성 검사`, () => {
  it("Password 번호가 정상적으로 들어왔을떄 에러메시지는 보여주지 않는다.", () => {
    const passwordNumber = "11";
    expect(validatePasswordNumber(passwordNumber)).toBe("");
  });
  it(`Password 번호가 덜입력 되었을때, ${getErrorMessage(
    "INVALID_LENGTH",
    "ko",
    PASSWORD_LENGTH
  )}`, () => {
    const passwordNumber = "1";
    expect(validatePasswordNumber(passwordNumber)).toBe(
      getErrorMessage("INVALID_LENGTH", "ko", PASSWORD_LENGTH)
    );
  });
  it(`문자가 입력 되었을떄, ${getErrorMessage("NOT_NUMERIC")}`, () => {
    const passwordNumber = "aa";
    expect(validatePasswordNumber(passwordNumber)).toBe(
      getErrorMessage("NOT_NUMERIC")
    );
  });
});
