import { useCardNumbers } from "../lib/hooks";
import { renderHook, act } from "@testing-library/react";

describe("useCardNumbers Test", () => {
  it("첫 번째 카드 번호에 1234 입력시 해당 값이 입려되고 브랜드가 없는 카드이기 때문에 에러가 발생한다.", () => {
    const { result } = renderHook(() => useCardNumbers());

    act(() => {
      result.current.firstState[1]("1234");
    });
    expect(result.current.firstState[0]).toBe("1234");
    expect(result.current.error.isError).toBe(true);
  });

  it("첫 번째 카드 번호에 51로 시작하는 숫자 입력시 값이 입력되고 에러가 발생하지 않음", () => {
    const { result } = renderHook(() => useCardNumbers());

    act(() => {
      result.current.firstState[1]("5123");
    });
    expect(result.current.firstState[0]).toBe("5123");
    expect(result.current.error.isError).toBe(false);
  });

  it("두 번째 카드 번호에 1234 입력시 해당 state의 value에 1234가 입려된다", () => {
    const { result } = renderHook(() => useCardNumbers());

    act(() => {
      result.current.secondState[1]("1234");
    });
    expect(result.current.secondState[0]).toBe("1234");
  });
});
