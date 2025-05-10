import { act, renderHook } from "@testing-library/react";
import useCardNumber from "../useCardNumber";

describe("useCardNumber", () => {
  it("초기 상태를 올바르게 반환한다", () => {
    const { result } = renderHook(() => useCardNumber());
    act(() => {
      result.current.setCardNumber(["1234", "1234", "1234", "1234"]);
    });
    expect(result.current.cardNumber).toEqual(["1234", "1234", "1234", "1234"]);
  });
});
