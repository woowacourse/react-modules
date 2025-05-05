import { renderHook, act } from "@testing-library/react";
import useCardNumber from ".";

describe("useCardNumber", () => {
  it("useCardNumber 초기 상태가 반환된다.", () => {
    const initialState = {
      first: "",
      second: "",
      third: "",
      forth: "",
    };
    const { result } = renderHook(() => useCardNumber());

    expect(result.current.state).toEqual(initialState);
  });

  it("useCardNumber 상태를 변경할 수 있다.", () => {
    const initialState = {
      first: "1234",
      second: "",
      third: "",
      forth: "",
    };
    const userInput = "1234";
    const index = 0; // input 위치

    const { result } = renderHook(() => useCardNumber());

    act(() => {
      result.current.onChange(userInput, index);
    });

    expect(result.current.state.first).toEqual(initialState.first);
  });

  it("useCardNumber 초기 에러 상태가 반환된다.", () => {
    const initialErrors = [false, false, false, false];
    const { result } = renderHook(() => useCardNumber());

    expect(result.current.errors).toEqual(initialErrors);
  });

  it("숫자가 아닌 값이 들어오면 에러메시지를 반환한다.", () => {
    const userInput = "hi";
    const index = 0; // input 위치
    const { result } = renderHook(() => useCardNumber());

    act(() => {
      result.current.validateInput(userInput, index);
    });

    expect(result.current.errorMessage).toBe("숫자만 입력 가능합니다.");
  });

  it("현재 에러 상태에 에러가 없다면 isErrorComplete가 true를 반환한다.", () => {
    const userInput = "1243";
    const index = 0; // input 위치
    const { result } = renderHook(() => useCardNumber());

    act(() => {
      result.current.validateInput(userInput, index);
    });

    expect(result.current.isErrorComplete).toBeTruthy();
  });

  it("현재 입력이 모두 다 채워져 있다면 isLengthComplete가 true를 반환한다.", () => {
    const userInput = ["1243", "1243", "1243", "1243"];
    const { result } = renderHook(() => useCardNumber());

    act(() => {
      userInput.forEach((input, index) => {
        result.current.onChange(input, index);
      });
    });

    expect(result.current.isLengthComplete).toBeTruthy();
  });

  it("현재 입력이 모두 채워졌고, 에러 상태가 없다면 isValid가 true를 반환한다.", () => {
    const userInput = ["1243", "1243", "1243", "1243"];
    const { result } = renderHook(() => useCardNumber());

    act(() => {
      userInput.forEach((input, index) => {
        result.current.onChange(input, index);
      });
    });

    expect(result.current.isValid).toBeTruthy();
  });
});
