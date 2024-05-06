import React from "react";
import { useCardNumbers } from "../lib";
import { renderHook } from "@testing-library/react";

describe("useCardNumbers Test", () => {
  it("firstNumbers에 오류 대한 검사", () => {
    const { result } = renderHook(() => useCardNumbers());

    React.act(() => {
      const [_, setValue] = result.current.firstState;
      setValue("1234");
    });
    const [value] = result.current.firstState;
    expect(value).toBe("1234");
    expect(result.current.error.isError).toBe(true);
    const firstNumberErrorMessage = result.current.error.errorMessage[0];
    const expectedMessage = "Master,Visa카드가 아닙니다. 카드 번호를 확인해주세요.";
    expect(firstNumberErrorMessage).toBe(expectedMessage);
  });

  it("firstNumbers에 51로 시작하는 숫자 입력시 통과", () => {
    const { result } = renderHook(() => useCardNumbers());

    React.act(() => {
      const [_, setValue] = result.current.firstState;
      setValue("5123");
    });

    const [value] = result.current.firstState;
    expect(value).toBe("5123");
    expect(result.current.error.isError).toBe(false);
  });

  it("firstNumber제외한 검사", () => {
    const { result } = renderHook(() => useCardNumbers());

    React.act(() => {
      const [_value, setSecondValue] = result.current.secondState;
      setSecondValue("1234");
      const [_value2, setThirdValue] = result.current.thirdState;
      setThirdValue("4444");
      const [_value3, setFourthValue] = result.current.fourthState;
      setFourthValue("5555");
    });

    const [secondValue] = result.current.secondState;
    expect(secondValue).toBe("1234");
    const [thirdValue] = result.current.thirdState;
    expect(thirdValue).toBe("4444");
    const [fourthValue] = result.current.fourthState;
    expect(fourthValue).toBe("5555");
  });
});
