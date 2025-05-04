import { renderHook } from "@testing-library/react";
import isValidLength from "../lib/isValidLength";

describe("isValidLength 테스트", () => {
  it("들어온 값의 길이가 유효하지 않은지 확인한다.", () => {
    const { result } = renderHook(() => isValidLength("123", 0, 4));

    expect(result.current).toBe(false);
  });

  it("들어온 값의 길이가 유효한지 확인한다.", () => {
    const { result } = renderHook(() => isValidLength("1234", 0, 4));

    expect(result.current).toBe(true);
  });
});
