import { act, renderHook } from "@testing-library/react";
import { ERROR_MESSAGE } from "../src/lib/constants/errorMessage";
import { usePassword } from "../src/lib/hooks/usePassword";

describe("usePassword", () => {
  test("사용자가 유효한 비밀번호를 입력하면 유효성 검사를 통과한다", () => {
    const { result } = renderHook(() => usePassword());

    act(() => {
      result.current.handlePasswordChange("12");
    });

    expect(result.current.validatePassword(result.current.password).isValid).toBe(true);
  });

  test("사용자가 숫자가 아닌 문자를 입력하면 유효성 검사에 실패한다", () => {
    const { result } = renderHook(() => usePassword());

    act(() => {
      result.current.handlePasswordChange("1a");
    });

    expect(result.current.validatePassword(result.current.password).isValid).toBe(false);
    expect(result.current.validatePassword(result.current.password).errorMessage).toBe(
      ERROR_MESSAGE.CARD_PASSWORD.INVALID_CHARACTERS
    );
  });

  test("사용자가 2자리가 아닌 비밀번호를 입력하면 유효성 검사에 실패한다", () => {
    const { result } = renderHook(() => usePassword());

    act(() => {
      result.current.handlePasswordChange("123");
    });

    expect(result.current.validatePassword(result.current.password).isValid).toBe(false);
    expect(result.current.validatePassword(result.current.password).errorMessage).toBe(
      ERROR_MESSAGE.CARD_PASSWORD.MAX_LENGTH_EXCEEDED
    );
  });

  test("사용자가 아무런 입력을 하지 않으면 유효성 검사에 실패한다", () => {
    const { result } = renderHook(() => usePassword());

    act(() => {
      result.current.handlePasswordChange("");
    });

    expect(result.current.validatePassword(result.current.password).isValid).toBe(false);
    expect(result.current.validatePassword(result.current.password).errorMessage).toBe(
      ERROR_MESSAGE.NO_INPUT
    );
  });
});
