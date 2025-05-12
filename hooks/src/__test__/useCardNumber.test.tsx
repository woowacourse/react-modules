import { renderHook } from "@testing-library/react";
import useCardNumber from "../lib/useCardNumber";
import { act } from "react";

describe("useCardNumber 테스트", () => {
  it("CardNumber가 유효한 형태인지 확인한다.", () => {
    const { result } = renderHook(() => useCardNumber());
    act(() => {
      result.current.handleCardNumber("1234123412341234");
    });

    expect(result.current.isCardNumberError).toEqual(false);
  });

  it("CardNumber중 유효하지 않은 형태가 있는 지 확인한다.", () => {
    const { result } = renderHook(() => useCardNumber());
    act(() => {
      result.current.handleCardNumber("1234asdf12341234");
    });

    expect(result.current.isCardNumberError).toEqual(true);
    expect(result.current.errorText).toBe("입력값은 숫자여야합니다.");
  });
});
