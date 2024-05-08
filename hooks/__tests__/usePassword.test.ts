import { renderHook, act } from "@testing-library/react";
import { usePassword } from "../src/lib/hooks/usePassword";
import { ERROR_MESSAGE } from "../src/lib/constants/errorMessage";

describe("usePassword 테스트", () => {
  it("touched 상태인데 입력값이 비어있다면 에러 메시지를 반환해야 한다", () => {
    const { result } = renderHook(() => usePassword());
    act(() => {
      result.current.handleCardPasswordChange("");
    });
    expect(result.current.cardPasswordValidation.isValid).toBe(false);
    expect(result.current.cardPasswordValidation.errorMessage).toBe(ERROR_MESSAGE.NO_INPUT);
  });

  it("입력값이 숫자가 아니라면 에러 메시지를 반환해야 한다", () => {
    const { result } = renderHook(() => usePassword());
    act(() => {
      result.current.handleCardPasswordChange("jo22222");
    });
    expect(result.current.cardPasswordValidation.isValid).toBe(false);
    expect(result.current.cardPasswordValidation.errorMessage).toBe(
      ERROR_MESSAGE.CARD_PASSWORD.INVALID_CHARACTERS
    );
  });

  it("입력값이 2자리 숫자가 아니라면 에러 메시지를 반환해야 한다", () => {
    const { result } = renderHook(() => usePassword());
    act(() => {
      result.current.handleCardPasswordChange("222");
    });
    expect(result.current.cardPasswordValidation.isValid).toBe(false);
    expect(result.current.cardPasswordValidation.errorMessage).toBe(
      ERROR_MESSAGE.CARD_PASSWORD.MAX_LENGTH_EXCEEDED
    );
  });

  it("입력값이 유효하다면 isValid가 true여야 한다", () => {
    const { result } = renderHook(() => usePassword());
    act(() => {
      result.current.handleCardPasswordChange("12");
    });
    expect(result.current.cardPasswordValidation.isValid).toBe(true);
  });
});
