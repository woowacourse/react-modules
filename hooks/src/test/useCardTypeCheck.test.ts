import { renderHook, act } from "@testing-library/react";
import useCardTypeCheck from "../lib/useCardTypeCheck";

describe("useCardTypeCheck 테스트", () => {
  it("아직 아무 입력도 수행되지 않았을 때 cardType이 'etc'이어야 함", () => {
    const { result } = renderHook(() => useCardTypeCheck());

    expect(result.current.cardType).toBe("etc");
  });

  it("Visa 카드 번호 입력이 들어올 때 cardType이 'visa'여야 함", () => {
    const { result } = renderHook(() => useCardTypeCheck());

    act(() => {
      result.current.handleCardTypeChange("4");
    });

    expect(result.current.cardType).toBe("visa");
  });

  it("Mastercard 카드 번호 입력이 들어올 때 cardType이 'mastercard'여야 함", () => {
    const { result } = renderHook(() => useCardTypeCheck());

    act(() => {
      result.current.handleCardTypeChange("51");
    });

    expect(result.current.cardType).toBe("mastercard");

    act(() => {
      result.current.handleCardTypeChange("55");
    });

    expect(result.current.cardType).toBe("mastercard");
  });

  it("Diners 카드 번호 입력이 들어올 때 cardType이 'diners'여야 함", () => {
    const { result } = renderHook(() => useCardTypeCheck());

    act(() => {
      result.current.handleCardTypeChange("36");
    });

    expect(result.current.cardType).toBe("diners");
  });

  it("AMEX 카드 번호 입력이 들어올 때 cardType이 'amex'여야 함", () => {
    const { result } = renderHook(() => useCardTypeCheck());
    act(() => {
      result.current.handleCardTypeChange("34");
    });

    expect(result.current.cardType).toBe("amex");
    act(() => {
      result.current.handleCardTypeChange("37");
    });

    expect(result.current.cardType).toBe("amex");
  });

  it("Unionpay 카드 번호 입력이 들어올 때 cardType이 'unionpay'여야 함", () => {
    const { result } = renderHook(() => useCardTypeCheck());

    act(() => {
      result.current.handleCardTypeChange("624");
    });
    expect(result.current.cardType).toBe("unionpay");

    act(() => {
      result.current.handleCardTypeChange("626");
    });
    expect(result.current.cardType).toBe("unionpay");
    act(() => {
      result.current.handleCardTypeChange("6282");
    });

    act(() => {
      result.current.handleCardTypeChange("6288");
    });
    expect(result.current.cardType).toBe("unionpay");
    act(() => {
      result.current.handleCardTypeChange("622126");
    });

    expect(result.current.cardType).toBe("unionpay");
    act(() => {
      result.current.handleCardTypeChange("622925");
    });
    expect(result.current.cardType).toBe("unionpay");
  });

  it("다른 카드 번호 입력이 들어올 때 cardType이 'etc'이어야 함", () => {
    const { result } = renderHook(() => useCardTypeCheck());

    act(() => {
      result.current.handleCardTypeChange("1234");
    });

    expect(result.current.cardType).toBe("etc");
  });
});
