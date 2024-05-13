import { act, renderHook } from "@testing-library/react";
import { ERROR_MESSAGE } from "../src/lib/constants/errorMessage";
import { useCardNumber } from "../src/lib/hooks/useCardNumber";

describe("useCardNumber", () => {
  test("사용자가 유효한 카드 번호를 입력하면 유효성 검사를 통과한다", () => {
    const { result } = renderHook(() => useCardNumber());

    act(() => {
      result.current.handleCardNumberChange("4111111111111111");
    });

    expect(result.current.cardNumbersValidation(result.current.cardNumbers).isValid).toBe(true);
  });

  test("사용자가 아무런 입력을 하지 않으면 유효성 검사에 실패한다", () => {
    const { result } = renderHook(() => useCardNumber());

    act(() => {
      result.current.handleCardNumberChange("");
    });

    expect(result.current.cardNumbersValidation(result.current.cardNumbers).isValid).toBe(false);
    expect(result.current.cardNumbersValidation(result.current.cardNumbers).errorMessage).toBe(
      ERROR_MESSAGE.NO_INPUT
    );
  });

  test("useNumberFormatting 옵션을 사용하면 카드 번호가 포맷팅된다", () => {
    const { result } = renderHook(() => useCardNumber({ useNumberFormatting: true }));

    act(() => {
      result.current.handleCardNumberChange("4111111111111111");
    });

    expect(result.current.cardNumbers).toBe("4111 1111 1111 1111");
  });

  test("useNumberFormatting 옵션을 사용하지 않으면 카드 번호가 포맷팅되지 않는다", () => {
    const { result } = renderHook(() => useCardNumber({ useNumberFormatting: false }));

    act(() => {
      result.current.handleCardNumberChange("4111111111111111");
    });

    expect(result.current.cardNumbers).toBe("4111111111111111");
  });

  test("useCardIdentifier 옵션을 사용하면 카드 종류가 식별된다", () => {
    const { result } = renderHook(() => useCardNumber({ useCardIdentifier: true }));

    act(() => {
      result.current.handleCardNumberChange("4111111111111111");
    });

    expect(result.current.cardIdentifier).toBe("Visa");
  });

  test("useCardIdentifier 옵션을 사용하지 않으면 카드 종류가 식별되지 않는다", () => {
    const { result } = renderHook(() => useCardNumber({ useCardIdentifier: false }));

    act(() => {
      result.current.handleCardNumberChange("4111111111111111");
    });

    expect(result.current.cardIdentifier).toBeUndefined();
  });
});
