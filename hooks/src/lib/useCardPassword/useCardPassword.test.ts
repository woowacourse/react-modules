import { renderHook, act } from "@testing-library/react";
import useCardPassword from "./useCardPassword";

describe("useCardPassword 테스트", () => {
  it("초기값이 정확히 설정돼야 한다.", () => {
    const initialValue = "12";
    const { result } = renderHook(() => useCardPassword(initialValue));

    expect(result.current.password).toBe(initialValue);
    expect(result.current.validationResult.isValid).toBe(true);
  });

  it("입력값이 정확히 업데이트 돼야 한다.", () => {
    const initialValue = "12";
    const newValue = "34";
    const { result } = renderHook(() => useCardPassword(initialValue));

    act(() => {
      result.current.handleUpdatePassword(newValue);
    });

    expect({
      password: result.current.password,
      isValid: result.current.validationResult.isValid,
    }).toEqual({ password: newValue, isValid: true });
  });

  it("유효하지 않은 값을 입력하면 에러메시지가 반환 돼야 한다.", () => {
    const initialValue = "12";
    const newValue = "345";
    const { result } = renderHook(() => useCardPassword(initialValue));

    act(() => {
      result.current.handleUpdatePassword(newValue);
    });

    expect({
      password: result.current.password,
      isValid: result.current.validationResult.isValid,
      errorMessage: result.current.validationResult.errorMessage,
    }).toEqual({
      password: newValue,
      isValid: false,
      errorMessage: "두 자리의 숫자여야 합니다. 다시 입력해주세요.",
    });
  });
});
