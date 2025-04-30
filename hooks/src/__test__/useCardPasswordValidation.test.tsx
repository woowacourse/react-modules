import { renderHook } from "@testing-library/react";
import useCardPasswordValidation from "../lib/useCardPasswordValidation";

describe("usePasswordValidation 테스트", () => {
  it("password가 유효한 형태인지 확인한다.", () => {
    const password = "12";

    const { result } = renderHook(() => useCardPasswordValidation(password));
    expect(result.current.isPasswordError).toBe(false);
  });

  it("password가 유효하지 않은 형태가 있는 지 확인한다.", () => {
    const password = "as";

    const { result } = renderHook(() => useCardPasswordValidation(password));
    expect(result.current.isPasswordError).toBe(true);
  });
});
