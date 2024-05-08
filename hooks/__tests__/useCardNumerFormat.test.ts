import { renderHook } from "@testing-library/react";
import useCardNumberFormat from "../src/lib/hooks/useCardNumberFormat";

describe("useCardNumberFormat 테스트", () => {
  it("14자리 카드 번호는 [4,6,4]의 형식으로 포맷팅한다.", () => {
    const { result } = renderHook(() => useCardNumberFormat("12345678901234"));
    expect(result.current).toBe("1234 567890 1234");
  });

  it("15자리 카드 번호는 [4,6,5]의 형식으로 포맷팅한다.", () => {
    const { result } = renderHook(() => useCardNumberFormat("123456789012345"));
    expect(result.current).toBe("1234 567890 12345");
  });

  it("16자리 카드 번호는 [4,4,4,4]의 형식으로 포맷팅한다.", () => {
    const { result } = renderHook(() => useCardNumberFormat("1234567890123456"));
    expect(result.current).toBe("1234 5678 9012 3456");
  });

  it("유효하지 않은 길이의 카드 번호는 포맷팅하지 않고 그대로 반환한다.", () => {
    const { result } = renderHook(() => useCardNumberFormat("1234567890"));
    expect(result.current).toBe("1234567890");
  });
});
