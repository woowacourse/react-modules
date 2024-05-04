import { renderHook, act } from "@testing-library/react";
import useInput from "./useInput";

describe("useInput 커스텀 훅 테스트", () => {
  const initialValue = {
    first: "first",
    second: "second",
    third: "third",
  };

  it("인자로 넘긴 값 그대로 초기값이 설정되어야 한다.", () => {
    const { result } = renderHook(() => useInput(initialValue));

    expect(result.current.inputValue).toEqual(initialValue);
  });

  it("유저가 input에 텍스트를 입력하면 해당 상태값이 유저가 입력한 값으로 업데이트 되어야 한다.", () => {
    const userInput = "input";
    const { result } = renderHook(() => useInput(initialValue));
    const target = { value: userInput, name: "first" };

    act(() => {
      result.current.handleInputChange({
        target,
        currentTarget: target,
      } as React.ChangeEvent<HTMLInputElement>);
    });

    expect(result.current.inputValue.first).toEqual(userInput);
  });
});
