import { renderHook } from "@testing-library/react";
import { ChangeEvent, FocusEvent, act } from "react";
import useInput, { ValidationType } from "../lib/useInput";

describe("useInput 테스트", () => {
  const isNumber = (value: string) => /^\d+$/.test(value);
  const inputValidations: ValidationType[] = [];

  it("초기값이 정확히 설정되어야 한다.", () => {
    const initialValue = "initialValue";

    const { result } = renderHook(() => useInput({ initialValue, inputValidations }));

    expect(result.current.value).toBe(initialValue);
  });

  it("입력값이 정확히 업데이트 되어야 한다.", () => {
    const userInput = "Hello";
    const { result } = renderHook(() => useInput({ initialValue: "", inputValidations }));

    act(() => {
      result.current.onChange({
        target: { value: userInput },
      } as ChangeEvent<HTMLInputElement>);
    });

    expect(result.current.value).toBe(userInput);
  });

  it("포커스 아웃이 됐을 때, 빈 문자열일 시 에러 상태가 true가 된다.", () => {
    const initialValue = "";

    const inputValidations: ValidationType[] = [
      {
        validate: (value: string) => value !== "",
        message: "숫자만 입력할 수 있습니다.",
      },
    ];

    const { result } = renderHook(() => useInput({ initialValue, inputValidations }));

    act(() => {
      result.current.onBlur({
        target: { value: initialValue },
      } as FocusEvent<HTMLInputElement>);
    });

    expect(result.current.error.state).toBeTruthy();
  });

  it("입력 값이 숫자가 아닐 때 에러 상태가 true가 된다.", () => {
    const inputValidations: ValidationType[] = [
      {
        validate: isNumber,
        message: "숫자만 입력할 수 있습니다.",
      },
    ];
    const userInput = "Hello";
    const { result } = renderHook(() => useInput({ initialValue: "", inputValidations }));

    act(() => {
      result.current.onChange({
        target: { value: userInput },
      } as ChangeEvent<HTMLInputElement>);
    });

    expect(result.current.error.state).toBeTruthy();
  });

  it("[입력 제한 유효성 검사] 입력 값이 숫자가 아닐 때 입력을 제한한다.", () => {
    const preventInputValidations: ValidationType[] = [
      {
        validate: isNumber,
        message: "숫자만 입력할 수 있습니다.",
      },
    ];
    const userInput = "Hello";
    const { result } = renderHook(() =>
      useInput({ initialValue: "", inputValidations, preventInputValidations })
    );

    act(() => {
      result.current.onChange({
        target: { value: userInput },
      } as ChangeEvent<HTMLInputElement>);
    });

    expect(result.current.value).toBe("");
  });

  it("[입력 제한 유효성 검사] 입력 값이 숫자가 아닐 때 에러 상태가 true가 된다.", () => {
    const preventInputValidations: ValidationType[] = [
      {
        validate: isNumber,
        message: "숫자만 입력할 수 있습니다.",
      },
    ];
    const userInput = "Hello";
    const { result } = renderHook(() =>
      useInput({ initialValue: "", inputValidations, preventInputValidations })
    );

    act(() => {
      result.current.onChange({
        target: { value: userInput },
      } as ChangeEvent<HTMLInputElement>);
    });

    expect(result.current.error.state).toBeTruthy();
  });
});
