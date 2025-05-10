import { renderHook, act } from "@testing-library/react";
import useCardNumber from ".";

describe("useCardNumber", () => {
  it("useCardNumber 초기 상태가 반환된다.", () => {
    const initialState = "";
    const { result } = renderHook(() => useCardNumber());

    expect(result.current.state).toEqual(initialState);
  });

  it("useCardNumber 상태를 변경할 수 있다.", () => {
    const initialState = "1234";
    const userInput = "1234";

    const { result } = renderHook(() => useCardNumber());

    act(() => {
      result.current.onChange(userInput);
    });

    expect(result.current.state).toEqual(initialState);
  });

  it("useCardNumber 초기 에러 상태가 반환된다.", () => {
    const initialErrors = { cardNumber: false };
    const { result } = renderHook(() => useCardNumber());

    expect(result.current.errors).toEqual(initialErrors);
  });

  it("숫자가 아닌 값이 들어오면 에러메시지를 반환한다.", () => {
    const userInput = "hi";
    const { result } = renderHook(() => useCardNumber());

    act(() => {
      result.current.validateInput(userInput);
    });

    expect(result.current.errorMessage).toBe("숫자만 입력 가능합니다.");
  });

  it("현재 에러 상태에 에러가 없다면 isErrorComplete가 true를 반환한다.", () => {
    const userInput = "1243";
    const { result } = renderHook(() => useCardNumber());

    act(() => {
      result.current.validateInput(userInput);
    });

    expect(result.current.isErrorComplete).toBeTruthy();
  });

  it("현재 입력이 모두 다 채워져 있다면 isLengthComplete가 true를 반환한다.", () => {
    const userInput = "1243124312431243";
    const { result } = renderHook(() => useCardNumber());

    act(() => {
      result.current.onChange(userInput);
    });

    expect(result.current.isLengthComplete).toBeTruthy();
  });

  it("현재 입력이 모두 채워졌고, 에러 상태가 없다면 isValid가 true를 반환한다.", () => {
    const userInput = "1243124312431243";
    const { result } = renderHook(() => useCardNumber());

    act(() => {
      result.current.onChange(userInput);
    });

    expect(result.current.isValid).toBeTruthy();
  });

  it.each([
    ["", "none"],
    ["41", "visa"],
    ["52", "master"],
    ["34", "amex"],
    ["371234", "amex"],
    ["36123", "diners"],
    ["622126", "unionpay"],
    ["625000", "unionpay"],
    ["628212", "unionpay"],
  ])("현재 입력값이 '%s'면 카드 타입은 '%s'을 반환한다.", (userInput, expected) => {
    const { result } = renderHook(() => useCardNumber());

    act(() => {
      result.current.onChange(userInput);
    });

    expect(result.current.cardType).toBe(expected);
  });
});
