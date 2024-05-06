import { renderHook, act } from "@testing-library/react";
import useCardTypeCheck from "../lib/useCardTypeCheck";

describe("useCardTypeCheck 테스트", () => {
  it("아직 아무 입력도 수행되지 않았을 때 cardType이 'none'이어야 함", () => {
    const { result } = renderHook(() => useCardTypeCheck());

    expect(result.current.checkResult.cardType).toBe("none");
  });

  it("Visa 카드 번호 입력이 들어올 때 cardType이 'Visa'여야 함", () => {
    const { result } = renderHook(() => useCardTypeCheck());

    act(() => {
      result.current.handleCardTypeChange("4000");
    });

    expect(result.current.checkResult.cardType).toBe("Visa");
  });

  it("Mastercard 카드 번호 입력이 들어올 때 cardType이 'Mastercard'여야 함", () => {
    const { result } = renderHook(() => useCardTypeCheck());

    act(() => {
      result.current.handleCardTypeChange("5252");
    });

    expect(result.current.checkResult.cardType).toBe("Mastercard");
  });

  it("다른 카드 번호 입력이 들어올 때 cardType이 'none'이어야 함", () => {
    const { result } = renderHook(() => useCardTypeCheck());

    act(() => {
      result.current.handleCardTypeChange("1234");
    });

    expect(result.current.checkResult.cardType).toBe("none");
  });
});
