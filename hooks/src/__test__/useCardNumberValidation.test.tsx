import { renderHook } from "@testing-library/react";
import useCardNumber from "../lib/useCardNumber";
import { act } from "react";

describe("cardNumberValidation 테스트", () => {
  it("CardNumber가 유효한 형태인지 확인한다.", () => {
    const { result } = renderHook(() => useCardNumber());
    act(() => {
      result.current.handleCardNumber("1234", "first");
      result.current.handleCardNumber("1234", "second");
      result.current.handleCardNumber("1234", "third");
      result.current.handleCardNumber("1234", "fourth");
    });

    expect(result.current.isCardNumberError).toEqual([
      false,
      false,
      false,
      false,
    ]);
  });

  it("CardNumber중 유효하지 않은 형태가 있는 지 확인한다.", () => {
    const { result } = renderHook(() => useCardNumber());
    act(() => {
      result.current.handleCardNumber("1234", "first");
      result.current.handleCardNumber("asdf", "second");
      result.current.handleCardNumber("1234", "third");
      result.current.handleCardNumber("1234", "fourth");
    });
    console.log(result);

    expect(result.current.isCardNumberError).toEqual([
      false,
      true,
      false,
      false,
    ]);
    expect(result.current.errorText).toBe("입력값은 숫자여야합니다.");
  });
});
