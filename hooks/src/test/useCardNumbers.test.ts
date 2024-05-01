import { useCardNumbers } from "../lib/hooks";
import { renderHook, act } from "@testing-library/react";

describe("useCardNumbers Test", () => {
  it("firstNumbers에 대한 검사", () => {
    const { result } = renderHook(() => useCardNumbers());
    const { firstState } = result.current;

    const [firstNumber, setFirstNumber] = firstState;
    act(() => {
      setFirstNumber("1234");
    });
    expect(firstNumber).toBe("1234");
  });

  it("firstNumber제외한 검사", () => {
    const { result } = renderHook(() => useCardNumbers());
    const { secondState } = result.current;

    const [secondNumbers, setSecondNumbers] = secondState;
    act(() => {
      setSecondNumbers("1234");
    });
    expect(secondNumbers).toBe("1234");
  });
});
