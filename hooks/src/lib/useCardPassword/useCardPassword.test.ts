import { renderHook } from "@testing-library/react";

import React from "react";

import useCardPassword from "./useCardPassword";

describe("useCardPassword 커스텀 훅 동작 테스트", () => {
  it("초기값이 정확히 설정되어야 한다.", () => {
    const EXPECTED_INITIAL_VALUE = "";

    const { result } = renderHook(() => useCardPassword());
    const { cardPassword } = result.current;

    expect(cardPassword).toEqual(EXPECTED_INITIAL_VALUE);
  });

  it("해당 필드에 정확히 입력되어야 한다", () => {
    const VALID_INPUT_TEST_CASE = "12";
    const EXPECTED_RESULT = "12";

    const { result } = renderHook(() => useCardPassword());

    React.act(() => {
      result.current.handleCardPasswordChange({
        target: {
          value: VALID_INPUT_TEST_CASE,
        },
      } as React.ChangeEvent<HTMLInputElement>);
    });

    expect(result.current.cardPassword).toBe(EXPECTED_RESULT);
    expect(result.current.errorState).toBe(false);
  });

  it("필드에 입력하는 입력값이 2자리가 아닌 경우, 해당 입력 필드에 예외가 발생해야한다.", () => {
    const { result } = renderHook(() => useCardPassword());
    const INVALID_INPUT_LENGTH = "1";

    React.act(() => {
      result.current.handleCardPasswordChange({
        target: {
          value: INVALID_INPUT_LENGTH,
        },
      } as React.ChangeEvent<HTMLInputElement>);
    });

    expect(result.current.cardPassword).toBe(INVALID_INPUT_LENGTH);
    expect(result.current.errorState).toBe(true);
  });

  const INVALID_CHARACTER_INPUT_TEST_CASE = [
    [["1", "1a"], "1"],
    [["1", "12", "12a"], "12"],
  ];

  it.each(INVALID_CHARACTER_INPUT_TEST_CASE)(
    "필드 입력값에 숫자 이외의 문자가 있을 경우, 상태 업데이트가 발생하지 않고 해당 입력 필드에 예외가 발생해야한다.",
    (inputScenario, expectedResult) => {
      const { result } = renderHook(() => useCardPassword());

      React.act(() => {
        if (inputScenario instanceof Array) {
          inputScenario.forEach((inputValue) => {
            result.current.handleCardPasswordChange({
              target: {
                value: inputValue,
              },
            } as React.ChangeEvent<HTMLInputElement>);
          });
        }
      });

      expect(result.current.cardPassword).toBe(expectedResult);
      expect(result.current.errorState).toBe(true);
    }
  );
});
