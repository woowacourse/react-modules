import { renderHook } from "@testing-library/react";
import useCardBrandIdentification from "../src/lib/hooks/useCardBrandIdentification";

describe("useCardBrandIdentification 테스트", () => {
  it("Diners 카드 번호를 정확히 식별한다.", () => {
    const { result } = renderHook(() => useCardBrandIdentification("36123456789012"));
    expect(result.current).toBe("Diners");
  });

  it("AMEX 카드 번호를 정확히 식별한다.", () => {
    const { result } = renderHook(() => useCardBrandIdentification("341234567890123"));
    expect(result.current).toBe("AMEX");
  });

  it("Visa 카드 번호를 정확히 식별한다.", () => {
    const { result } = renderHook(() => useCardBrandIdentification("4123456789012345"));
    expect(result.current).toBe("Visa");
  });

  it("Mastercard 카드 번호를 정확히 식별한다.", () => {
    const { result } = renderHook(() => useCardBrandIdentification("5112345678901234"));
    expect(result.current).toBe("Mastercard");
  });

  it("UnionPay 카드 번호를 정확히 식별한다.", () => {
    const { result } = renderHook(() => useCardBrandIdentification("6221261234567890"));
    expect(result.current).toBe("UnionPay");
  });

  it("알 수 없는 카드 번호에 대해 'Unknown'을 반환한다.", () => {
    const { result } = renderHook(() => useCardBrandIdentification("1234567890123456"));
    expect(result.current).toBe("Unknown");
  });

  it("유효하지 않은 카드 번호에 대해 'Unknown'을 반환한다.", () => {
    const { result } = renderHook(() => useCardBrandIdentification("1234"));
    expect(result.current).toBe("Unknown");
  });
});
