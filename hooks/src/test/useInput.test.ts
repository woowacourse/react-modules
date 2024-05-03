import { renderHook } from "@testing-library/react";
import useInput from "@/lib/useInput";
import React, { ChangeEvent } from "react";
import { ErrorStatus } from "@/types/errorStatus";
import { cardNumbersValidates } from "@/lib/useCardNumbers";

describe("useInput 훅 테스트", () => {
  it("초기값이 정확히 설정되어야 한다.", () => {
    const initialValue = "Initial Value";
    const { result } = renderHook(() => useInput(initialValue, () => {}));

    expect(result.current.value).toBe(initialValue);
  });

  it("입력값이 정확히 업데이트 되어야 한다.", () => {
    const userInput = "Hello";
    const { result } = renderHook(() => useInput("Hello", () => {}));

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
      useInput(userInput, cardNumbersValidates)
    );

    React.act(() => {
      result.current.onChange({
        target: { value: userInput },
      } as ChangeEvent<HTMLInputElement>);
    });

    expect(result.current.errorStatus).toBe(ErrorStatus.IS_NOT_NUMBER);
  });
});
