import { renderHook } from "@testing-library/react";
import useCardPassword from "../lib/useCardPassword";
import { act } from "react";

describe("usePasswordValidation 테스트", () => {
  it("password가 유효한 형태인지 확인한다.", () => {
    const { result } = renderHook(() => useCardPassword());
    act(() => {
      result.current.handlePassword("12");
    });
    expect(result.current.isPasswordError).toBe(false);
  });

  it("password가 유효하지 않은 형태가 있는 지 확인한다.", () => {
    const { result } = renderHook(() => useCardPassword());
    act(() => {
      result.current.handlePassword("as");
    });
    expect(result.current.isPasswordError).toBe(true);
  });
});
