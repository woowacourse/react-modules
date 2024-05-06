import { renderHook } from "@testing-library/react";
import useCVCValidate from "../validation/useCVCValidation";
import ERROR_MESSAGES from "../constants/error";
import { act } from "react";

describe("CVC 입력 유효성 검증 커스텀 훅 테스트", () => {
  it("CVC의 값이 공백일 경우 '불필요한 공백이 포함되어 있습니다.' 라는 에러 메시지를 노출한다.", async () => {
    const errorMessage = ERROR_MESSAGES.INVALID_TRIM_BLANK;
    const CVCValue = " ";
    const CVCName = "CVC";

    const { result } = renderHook(() => useCVCValidate());

    act(() => {
      result.current.isCVCValid(CVCValue, CVCName);
    });

    expect(result.current.CVCValidation.errorMessage.CVC).toBe(errorMessage);
    expect(result.current.CVCValidation.isError[CVCName]).toBe(true);
  });

  it("CVC의 값이 숫자가 아닐 경우 '숫자만 입력해주세요.'라는 에러 메시지를 노출한다.", async () => {
    const errorMessage = ERROR_MESSAGES.INVALID_ONLY_NUMBER;
    const CVCValue = "a";
    const CVCName = "CVC";

    const { result } = renderHook(() => useCVCValidate());

    act(() => {
      result.current.isCVCValid(CVCValue, CVCName);
    });

    expect(result.current.CVCValidation.errorMessage.CVC).toBe(errorMessage);
    expect(result.current.CVCValidation.isError[CVCName]).toBe(true);
  });

  it("CVC를 3자 이하로 입력할 경우 '3자로 입력해주세요.'라는 에러 메시지를 노출한다.", async () => {
    const errorMessage = ERROR_MESSAGES.INVALID_MAX_LENGTH;
    const CVCValue = "41";
    const CVCName = "CVC";

    const { result } = renderHook(() => useCVCValidate());

    act(() => {
      result.current.isCVCValid(CVCValue, CVCName);
    });

    expect(result.current.CVCValidation.errorMessage.CVC).toBe(
      "3" + errorMessage
    );
    expect(result.current.CVCValidation.isError[CVCName]).toBe(true);
  });
});
