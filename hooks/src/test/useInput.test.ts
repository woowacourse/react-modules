import { renderHook } from "@testing-library/react";
import useInput from "@/lib/common/useInput";
import React, { ChangeEvent } from "react";
import { ErrorStatus } from "@/types/errorStatus";
import { validateNumber } from "@/validate/validate";

describe("useInput 훅 테스트", () => {
  const validates = [(value: string) => validateNumber(value)];

  it("초기값이 정확히 설정되어야 한다.", () => {
    const initialValue = "Initial Value";
    const { result } = renderHook(() => useInput({ initialValue, validates }));

    expect(result.current.value).toBe(initialValue);
  });

  it("입력값이 정확히 업데이트 되어야 한다.", () => {
    const userInput = "Hello";
    const { result } = renderHook(() =>
      useInput({ initialValue: "Hello", validates })
    );

    React.act(() => {
      result.current.onChange({
        target: { value: userInput },
      } as ChangeEvent<HTMLInputElement>);
    });

    expect(result.current.value).toBe(userInput);
  });

  it("숫자아닌 값이 입력됐을 때 에러를 낸다.", () => {
    const userInput = "abcd";
    const { result } = renderHook(() =>
      useInput({ initialValue: userInput, validates })
    );

    React.act(() => {
      result.current.onChange({
        target: { value: userInput },
      } as ChangeEvent<HTMLInputElement>);
    });

    expect(result.current.errorStatus).toBe(ErrorStatus.IS_NOT_NUMBER);
  });
});
