import React from "react";
import { useCardNumbers } from "../lib";
import { renderHook } from "@testing-library/react";

describe("useCardNumbers Test", () => {
  it("firstNumbers에 오류 대한 검사", () => {
    const { result } = renderHook(() => useCardNumbers());

    //Act
    React.act(() => {
      const [_, setValue] = result.current.numbers.firstState;
      setValue("1234");
    });

    //Assert
    const [value] = result.current.numbers.firstState;
    const firstNumberErrorType = result.current.errorTypeList[0];
    const expectedMessage = "noBrandError";

    expect(value).toBe("1234");
    expect(firstNumberErrorType).toBe(expectedMessage);
  });

  it("firstNumbers에 51로 시작하는 숫자 입력시 통과", () => {
    const { result } = renderHook(() => useCardNumbers());

    //Act
    React.act(() => {
      const [_, setValue] = result.current.numbers.firstState;
      setValue("5123");
    });

    const [value] = result.current.numbers.firstState;

    expect(value).toBe("5123");
    expect(result.current.errorTypeList[0]).toBe(undefined);
  });

  it("firstNumber제외한 검사", () => {
    const { result } = renderHook(() => useCardNumbers());

    //Act
    React.act(() => {
      const [_value, setSecondValue] = result.current.numbers.secondState;
      setSecondValue("1234");
      const [_value2, setThirdValue] = result.current.numbers.thirdState;
      setThirdValue("4444");
      const [_value3, setFourthValue] = result.current.numbers.fourthState;
      setFourthValue("5555");
    });

    //Assert
    const [secondValue] = result.current.numbers.secondState;
    expect(secondValue).toBe("1234");
    const [thirdValue] = result.current.numbers.thirdState;
    expect(thirdValue).toBe("4444");
    const [fourthValue] = result.current.numbers.fourthState;
    expect(fourthValue).toBe("5555");
  });
});
