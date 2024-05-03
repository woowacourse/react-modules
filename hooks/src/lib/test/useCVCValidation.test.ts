import { renderHook } from "@testing-library/react";
import useCVCValidate from "../useCVCValidation";
import ERROR_MESSAGES from "../constants/error";
import { act } from "react";

describe("CVC 입력 유효성 검증 커스텀 훅 테스트", () => {
  it("CVC에 공백이 입력됐을경우 isError가 true가 되고 errorMessage가 '불필요한 공백이 포함되어 있습니다.'라는 값으로 재할당 된다.", async () => {
    const errorMessage = ERROR_MESSAGES.INVALID_TRIM_BLANK;
    const CVCValue = " ";
    const CVCName = "CVC";

    const { result } = renderHook(() => useCVCValidate());

    act(() => {
      result.current.CVCValidateHandler(CVCValue, CVCName);
    });

    expect(result.current.CVCValidation.errorMessage.CVC).toBe(errorMessage);
    expect(result.current.CVCValidation.isError[CVCName]).toBe(true);
  });

  it("CVC에 숫자가 아닌 다른 값이 입력 될 경우 isError가 true가 되고 errorMessage가 '숫자만 입력해주세요.'라는 값으로 재할당 된다.", async () => {
    const errorMessage = ERROR_MESSAGES.INVALID_ONLY_NUMBER;
    const CVCValue = "a";
    const CVCName = "CVC";

    const { result } = renderHook(() => useCVCValidate());

    act(() => {
      result.current.CVCValidateHandler(CVCValue, CVCName);
    });

    expect(result.current.CVCValidation.errorMessage.CVC).toBe(errorMessage);
    expect(result.current.CVCValidation.isError[CVCName]).toBe(true);
  });

  it("카드 번호가 2자 이하로 입력될 경우 isError가 true가 되고 errorMessage가 '3자로 입력해주세요.'라는 값으로 재할당 된다.", async () => {
    const errorMessage = ERROR_MESSAGES.INVALID_MAX_LENGTH;
    const CVCValue = "41";
    const CVCName = "CVC";

    const { result } = renderHook(() => useCVCValidate());

    act(() => {
      result.current.CVCValidateHandler(CVCValue, CVCName);
    });

    expect(result.current.CVCValidation.errorMessage.CVC).toBe(
      "3" + errorMessage,
    );
    expect(result.current.CVCValidation.isError[CVCName]).toBe(true);
  });
});
