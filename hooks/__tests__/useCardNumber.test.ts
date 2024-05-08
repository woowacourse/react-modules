import { act, renderHook } from "@testing-library/react";
import { ERROR_MESSAGE } from "../src/lib/constants/errorMessage";
import useCardNumber from "../src/lib/hooks/useCardNumber";

describe("useCardNumber input에 대한 테스트", () => {
  it("touched 상태인데 입력값이 비어있다면 에러 메시지를 반환해야 한다", () => {
    const { result } = renderHook(() => useCardNumber());
    act(() => {
      result.current.handleCardNumbersChange("");
    });
    expect(result.current.cardNumbersValidation.isValid).toBe(false);
    expect(result.current.cardNumbersValidation.errorMessage).toBe(ERROR_MESSAGE.NO_INPUT);
  });

  it("입력값이 14~16자리의 숫자가 아니라면 에러 메시지를 반환해야 한다", () => {
    const { result } = renderHook(() => useCardNumber());
    act(() => {
      result.current.handleCardNumbersChange("johnnn2");
    });
    expect(result.current.cardNumbersValidation.isValid).toBe(false);
    expect(result.current.cardNumbersValidation.errorMessage).toBe(
      ERROR_MESSAGE.CARD__NUMBER.INVALID_NUMBERS
    );
  });

  it("입력값이 유효하다면 isValid가 true여야 한다", () => {
    const { result } = renderHook(() => useCardNumber());
    act(() => {
      result.current.handleCardNumbersChange("123456789123456");
    });
    expect(result.current.cardNumbersValidation.isValid).toBe(true);
  });
});
