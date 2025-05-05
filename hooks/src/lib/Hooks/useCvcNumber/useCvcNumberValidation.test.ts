import { renderHook, act } from "@testing-library/react";
import useCvcNumber from ".";

describe("useCvcNumber", () => {
  it("useCvcNumber 초기 상태가 반환된다.", () => {
    const initialState = "";
    const { result } = renderHook(() => useCvcNumber());

    expect(result.current.state).toEqual(initialState);
  });

  it("useCvcNumber 상태를 변경할 수 있다.", () => {
    const initialState = "123";
    const userInput = "123";

    const { result } = renderHook(() => useCvcNumber());

    act(() => {
      result.current.onChange(userInput);
    });

    expect(result.current.state).toEqual(initialState);
  });

  it("useCvcNumber 초기 에러 상태가 반환된다.", () => {
    const initialErrors = false;
    const { result } = renderHook(() => useCvcNumber());

    expect(result.current.errors).toEqual(initialErrors);
  });

  it("숫자가 아닌 값이 들어오면 에러메시지를 반환한다.", () => {
    const userInput = "hi";
    const { result } = renderHook(() => useCvcNumber());

    act(() => {
      (result.current.validateInput as (value: string) => void)(userInput);
    });

    expect(result.current.errorMessage).toBe("숫자만 입력 가능합니다.");
  });

  it("현재 에러 상태에 에러가 없다면 isErrorComplete가 true를 반환한다.", () => {
    const userInput = "124";
    const { result } = renderHook(() => useCvcNumber());

    act(() => {
      (result.current.validateInput as (value: string) => void)(userInput);
    });

    expect(result.current.isErrorComplete).toBeTruthy();
  });

  it("현재 입력이 모두 다 채워져 있다면 isLengthComplete가 true를 반환한다.", () => {
    const userInput = "124";
    const { result } = renderHook(() => useCvcNumber());

    act(() => {
      result.current.onChange(userInput);
    });

    expect(result.current.isLengthComplete).toBeTruthy();
  });
});
