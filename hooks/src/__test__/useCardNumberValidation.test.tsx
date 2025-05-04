import { renderHook } from "@testing-library/react";
import cardNumberValidation from "../lib/cardNumberValidation";

describe("cardNumberValidation 테스트", () => {
  it("CardNumber가 유효한 형태인지 확인한다.", () => {
    const cardNumbers = {
      first: "1234",
      second: "1234",
      third: "1234",
      fourth: "1234",
    };

    const { result } = renderHook(() => cardNumberValidation(cardNumbers));
    expect(result.current.isCardNumberError).toEqual([
      false,
      false,
      false,
      false,
    ]);
  });

  it("CardNumber중 유효하지 않은 형태가 있는 지 확인한다.", () => {
    const cardNumbers = {
      first: "1234",
      second: "asdf",
      third: "1234",
      fourth: "1234",
    };

    const { result } = renderHook(() => cardNumberValidation(cardNumbers));
    expect(result.current.isCardNumberError).toEqual([
      false,
      true,
      false,
      false,
    ]);
    expect(result.current.errorText).toBe("입력값은 숫자여야합니다.");
  });
});
