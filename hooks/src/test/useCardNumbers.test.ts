import { useCardNumbers } from "../lib/hooks";
import { renderHook, act } from "@testing-library/react";

describe("useCardNumbers Test", () => {
  it("firstNumbers에 오류 대한 검사", () => {
    const { result } = renderHook(() => useCardNumbers());

    act(() => {
      result.current.firstState[1]("1234");
    });
    expect(result.current.firstState[0]).toBe("1234");
    expect(result.current.error.isError).toBe(true);
  });

  it("firstNumbers에 51로 시작하는 숫자 입력시 통과", () => {
    const { result } = renderHook(() => useCardNumbers());

    act(() => {
      result.current.firstState[1]("5123");
    });
    expect(result.current.firstState[0]).toBe("5123");
    expect(result.current.error.isError).toBe(false);
  });

  it("firstNumber제외한 검사", () => {
    const { result } = renderHook(() => useCardNumbers());

    act(() => {
      result.current.secondState[1]("1234");
    });
    expect(result.current.secondState[0]).toBe("1234");
  });
});
