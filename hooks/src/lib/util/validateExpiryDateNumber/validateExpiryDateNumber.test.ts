import { EXPIRY_DATE_LENGTH } from "../../constants";
import { getErrorMessage } from "../getErrorMessage";
import validateExpiryDateNumber from "./validateExpiryDateNumber";

describe(`유효기간 유효성 검사`, () => {
  it("유효기간 번호가 정상적으로 들어왔을떄 에러메시지는 보여주지 않는다.", () => {
    const expiryDateNumber = ["01", "24"];
    expect(validateExpiryDateNumber(expiryDateNumber)).toEqual(["", ""]);
  });
  it(`유효기간 번호가 덜입력 되었을때, ${getErrorMessage(
    "INVALID_LENGTH",
    "en",
    EXPIRY_DATE_LENGTH
  )}}`, () => {
    const expiryDateNumber = ["01", ""];
    expect(validateExpiryDateNumber(expiryDateNumber)).toEqual([
      "",
      getErrorMessage("INVALID_LENGTH", "ko", EXPIRY_DATE_LENGTH),
    ]);
  });
  it(`문자가 입력 되었을떄, ${getErrorMessage("NOT_NUMERIC")}`, () => {
    const expiryDateNumber = ["aa", "24"];
    expect(validateExpiryDateNumber(expiryDateNumber)).toEqual([
      getErrorMessage("NOT_NUMERIC"),
      "",
    ]);
  });
  it(`앞 두자리가 00월을 나타내면 ${getErrorMessage(
    "INVALID_MONTH"
  )} 에러가 발생한다.`, () => {
    const expiryDateNumber = ["00", "24"];
    expect(validateExpiryDateNumber(expiryDateNumber)).toEqual([
      getErrorMessage("INVALID_MONTH"),
      "",
    ]);
  });
  it(`앞 두자리가 12월을 넘기면${getErrorMessage(
    "INVALID_MONTH"
  )} 에러가 발생한다.`, () => {
    const expiryDateNumber = ["13", "24"];
    expect(validateExpiryDateNumber(expiryDateNumber)).toEqual([
      getErrorMessage("INVALID_MONTH"),
      "",
    ]);
  });
});
