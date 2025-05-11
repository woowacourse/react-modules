import { renderHook, act } from "@testing-library/react";
import useCardNumber from ".";

describe("useCardNumber", () => {
  it("useCardNumber 초기 상태가 반환된다.", () => {
    const initialState = "";
    const { result } = renderHook(() => useCardNumber());

    expect(result.current.value).toEqual(initialState);
  });

  it("useCardNumber 상태를 변경할 수 있다.", () => {
    const initialState = "1234";
    const userInput = "1234";

    const { result } = renderHook(() => useCardNumber());

    act(() => {
      result.current.onChange(userInput);
    });

    expect(result.current.value).toEqual(initialState);
  });

  it("useCardNumber 초기 에러 상태가 반환된다.", () => {
    const initialError = false;
    const { result } = renderHook(() => useCardNumber());

    expect(result.current.error).toEqual(initialError);
  });

  it("숫자가 아닌 값이 들어오면 에러메시지를 반환한다.", () => {
    const userInput = "hi";
    const { result } = renderHook(() => useCardNumber());

    act(() => {
      result.current.onChange(userInput);
    });

    expect(result.current.errorMessage).toBe("숫자만 입력 가능합니다.");
  });

  it("현재 에러 상태에 에러가 없다면 isErrorComplete가 true를 반환한다.", () => {
    const userInput = "1243";
    const { result } = renderHook(() => useCardNumber());

    act(() => {
      result.current.onChange(userInput);
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

describe("현재 입력 값이 자동으로 카드사별 규칙에 맞게 카드 번호를 구분하여 화면에 표시된다.", () => {
  it.each([
    ["4112123112311231", "4112 1231 1231 1231"],
    ["5212123112311231", "5212 1231 1231 1231"],
    ["344466666655555", "3444 666666 55555"],
    ["36123456789012", "3612 345678 9012"],
    ["341234567890123", "3412 345678 90123"],
    ["371234567890123", "3712 345678 90123"],
    ["6221261234567890", "6221 2612 3456 7890"],
  ])("현재 입력값이 '%s'면 화면에 보이는 카드번호는 '%s'을 반환한다.", (userInput, expected) => {
    const { result } = renderHook(() => useCardNumber());

    act(() => {
      result.current.onChange(userInput);
    });

    expect(result.current.value).toBe(expected);
  });
});
