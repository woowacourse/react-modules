import { renderHook, act } from "@testing-library/react";
import usePassword from "../hooks/usePassword";
import { ERROR_MESSAGES } from "../constants/messages";

const MAX_INPUT_LENGTH = 2;

describe("usePassword 테스트", () => {
  test("초기 password 상태는 빈 문자열이어야 한다.", () => {
    const { result } = renderHook(() => usePassword(MAX_INPUT_LENGTH));

    expect(result.current.password).toBe("");
    expect(result.current.passwordError).toBeFalsy();
  });

  test.each([["12ab"], ["!@"], ["123"]])(
    `입력한 비밀번호(%s)가 '${MAX_INPUT_LENGTH}글자 숫자가 아닐 경우', 에러 메시지("${MAX_INPUT_LENGTH}${ERROR_MESSAGES.maxLengthNumber}")가 표시된다.`,
    (input) => {
      const { result } = renderHook(() => usePassword(MAX_INPUT_LENGTH));

      act(() => {
        result.current.handlePasswordChange(input);
      });

      expect(result.current.getPasswordErrorMessage()).toBe(
        `${MAX_INPUT_LENGTH}${ERROR_MESSAGES.maxLengthNumber}`
      );
    }
  );
});
