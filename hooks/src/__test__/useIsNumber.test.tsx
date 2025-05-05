import { renderHook } from "@testing-library/react";
import isNumber from "../lib/isNumber";

describe("isNumber 테스트", () => {
  it.each(["mingo", "3.4"])(
    "들어온 값이 숫자가 아닌 경우를 확인한다.",
    (value) => {
      const { result } = renderHook(() => isNumber(value));

      expect(result.current).toBe(false);
    }
  );

  it("들어온 값이 숫자인 경우를 확인한다.", () => {
    const { result } = renderHook(() => isNumber("1234"));

    expect(result.current).toBe(true);
  });
});
