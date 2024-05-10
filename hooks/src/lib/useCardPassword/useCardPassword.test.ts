import { renderHook } from "@testing-library/react";
import { ChangeEvent, act } from "react";
import useCardPassword from "./useCardPassword";

describe("useCardPassword 테스트", () => {
  it("입력한 값이 숫자가 아니라면 입력을 제한한다.", () => {
    const userInput = "Hello";
    const { result } = renderHook(() => useCardPassword());

    act(() => {
      result.current.cardPassword.onChange({
        target: { value: userInput },
      } as ChangeEvent<HTMLInputElement>);
    });

    expect(result.current.cardPassword.value).toBe("");
  });

  it("입력한 값이 숫자가 아니라면 에러 상태가 true가 된다.", () => {
    const userInput = "Hello";
    const { result } = renderHook(() => useCardPassword());

    act(() => {
      result.current.cardPassword.onChange({
        target: { value: userInput },
      } as ChangeEvent<HTMLInputElement>);
    });

    expect(result.current.cardPassword.error.state).toBeTruthy();
  });

  it("입력한 비밀번호가 2자리가 아니라면 에러 상태가 true가 된다.", () => {
    const userInput = "1";
    const { result } = renderHook(() => useCardPassword());

    act(() => {
      result.current.cardPassword.onChange({
        target: { value: userInput },
      } as ChangeEvent<HTMLInputElement>);
    });

    expect(result.current.cardPassword.error.state).toBeTruthy();
  });
});
