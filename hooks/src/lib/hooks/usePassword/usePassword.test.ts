import { renderHook, act } from "@testing-library/react";
import usePassword from "./usePassword";
import { MAX_LENGTH_ERROR_MESSAGE } from "../../constants/errorMessage";

const INPUT_LENGTH = 2;

describe("usePassword 테스트", () => {
  test("초기 password 상태는 빈 문자열이어야 한다.", () => {
    const { result } = renderHook(() => usePassword(INPUT_LENGTH));

    expect(result.current.password).toBe("");
    expect(result.current.passwordError).toBeFalsy();
  });

  test.each([["12"], ["00"]])(
    "비밀번호가 숫자이며 지정된 길이일 경우 에러 상태가 false여야 한다.",
    (input) => {
      const { result } = renderHook(() => usePassword(INPUT_LENGTH));
      act(() => {
        result.current.handlePasswordChange(input);
      });
      expect(result.current.passwordError).toBeFalsy();
    }
  );
});

describe("usePassword 예외 테스트", () => {
  test("비밀번호 길이가 지정된 길이를 초과할 경우 에러 상태가 true여야 한다.", () => {
    const { result } = renderHook(() => usePassword(INPUT_LENGTH));
    act(() => {
      result.current.handlePasswordChange("123");
    });
    expect(result.current.passwordError).toBeTruthy();
  });

  test.each([["ab"], ["!@"]])(
    "비밀번호에 숫자가 아닌 문자 또는 특수 문자가 포함되어 있을 경우 에러 상태가 true여야 한다.",
    (input) => {
      const { result } = renderHook(() => usePassword(INPUT_LENGTH));
      act(() => {
        result.current.handlePasswordChange(input);
      });
      expect(result.current.passwordError).toBeTruthy();
    }
  );

  test("비밀번호에 에러가 있는 경우 적절한 에러 메시지를 반환해야 한다.", () => {
    const { result } = renderHook(() => usePassword(INPUT_LENGTH));

    act(() => {
      result.current.handlePasswordChange("123");
    });

    expect(result.current.getPasswordErrorMessage()).toBe(
      MAX_LENGTH_ERROR_MESSAGE(INPUT_LENGTH)
    );
  });
});
