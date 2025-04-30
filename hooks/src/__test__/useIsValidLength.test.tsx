import { renderHook } from "@testing-library/react";
import useIsValidLength from "../lib/useIsValidLength";

describe("useIsValidLength 테스트", () => {
  it("들어온 값의 길이가 유효하지 않은지 확인한다.", () => {
    const { result } = renderHook(() => useIsValidLength("123", 0, 4));

    expect(result.current).toBe(false);
  });

  it("들어온 값의 길이가 유효한지 확인한다.", () => {
    const { result } = renderHook(() => useIsValidLength("1234", 0, 4));

    expect(result.current).toBe(true);
  });
});
