import { renderHook, act } from "@testing-library/react";
import useCVCNumber from "../hooks/useCVCNumber";
import { ERROR_MESSAGES } from "../constants/messages";

const MAX_INPUT_LENGTH = 3;

describe("useCVCNumber 테스트", () => {
  test("초기 CVC 번호 상태는 빈 문자열이어야 한다.", () => {
    const { result } = renderHook(() => useCVCNumber(MAX_INPUT_LENGTH));

    expect(result.current.CVCNumber).toBe("");
    expect(result.current.CVCNumberError).toBeFalsy();
  });

  test.each([["12ab"], ["aaa"], ["!@34"], ["1234"]])(
    `입력한 CVC 번호(%s)가 '${MAX_INPUT_LENGTH}글자 숫자가 아닐 경우', 에러 메시지("${MAX_INPUT_LENGTH}${ERROR_MESSAGES.maxLengthNumber}")가 표시된다.`,
    (input) => {
      const { result } = renderHook(() => useCVCNumber(MAX_INPUT_LENGTH));

      act(() => {
        result.current.handleCVCNumberChange(input);
      });

      expect(result.current.getCVCNumberErrorMessage()).toBe(
        `${MAX_INPUT_LENGTH}${ERROR_MESSAGES.maxLengthNumber}`
      );
    }
  );
});
