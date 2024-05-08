import { act, renderHook } from "@testing-library/react";
import { useCardIdentifier } from "../src/lib/hooks/useCardIdentifier";

describe("useCardIdentifier", () => {
  test("유효한 카드 번호에 대해 올바른 카드 식별자를 반환해야 합니다", () => {
    const { result } = renderHook(() => useCardIdentifier());

    act(() => {
      result.current.handleCardIdentifierChange("36123456789012"); // Diners
    });

    expect(result.current.cardIdentifier).toBe("Diners");

    act(() => {
      result.current.handleCardIdentifierChange("341234567890123"); // AMEX
    });

    expect(result.current.cardIdentifier).toBe("AMEX");

    act(() => {
      result.current.handleCardIdentifierChange("6240123456789012"); // UnionPay
    });
    expect(result.current.cardIdentifier).toBe("UnionPay");

    act(() => {
      result.current.handleCardIdentifierChange("5112345678901234"); // Master
    });
    expect(result.current.cardIdentifier).toBe("Master");

    act(() => {
      result.current.handleCardIdentifierChange("4123456789012345"); // Visa
    });
    expect(result.current.cardIdentifier).toBe("Visa");
  });

  test("유효하지 않은 카드 번호에 대해 undefined를 반환해야 합니다", () => {
    const { result } = renderHook(() => useCardIdentifier());

    act(() => {
      result.current.handleCardIdentifierChange("1234567890123456"); // Invalid
    });

    expect(result.current.cardIdentifier).toBeUndefined();
  });
});
