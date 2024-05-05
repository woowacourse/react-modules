import { renderHook } from "@testing-library/react";

import React from "react";

import useCardNumber from "./useCardNumber";

describe("useCardNumber 커스텀 훅 동작 테스트", () => {
  it("초기값이 정확히 설정되어야 한다.", () => {
    const EXPECTED_INITIAL_VALUE = "";

    const { result } = renderHook(() => useCardNumber());
    const { cardNumber } = result.current;

    expect(cardNumber).toEqual(EXPECTED_INITIAL_VALUE);
  });

  it("필드에 입력하는  해당 필드에 정확히 입력되어야 한다", () => {
    const { result } = renderHook(() => useCardNumber());
    const VALID_INPUT = "1234";

    React.act(() => {
      result.current.handleCardNumberChange({
        target: {
          value: VALID_INPUT,
        },
      } as React.ChangeEvent<HTMLInputElement>);
    });

    expect(result.current.cardNumber).toBe(VALID_INPUT);
    expect(result.current.errorState).toBe(false);
  });

  const INVALID_INPUT_LENGTH_TEST_CASE = [["1"], ["12"], ["123"]];

  it.each(INVALID_INPUT_LENGTH_TEST_CASE)(
    "필드에 입력하는 입력값이 4글자이지 않을 경우, 해당 입력 필드에 예외가 발생해야한다.",
    (invalidValue) => {
      const { result } = renderHook(() => useCardNumber());

      React.act(() => {
        result.current.handleCardNumberChange({
          target: {
            value: invalidValue,
          },
        } as React.ChangeEvent<HTMLInputElement>);
      });

      expect(result.current.cardNumber).toBe(invalidValue);
      expect(result.current.errorState).toBe(true);
    }
  );

  const INVALID_CHARACTER_INPUT_TEST_CASE = [
    [["1", "1a"], "1"],
    [["1", "12", "12a"], "12"],
    [["1", "12", "123", "123a"], "123"],
    [["1", "12", "123", "1234", "1234a"], "1234"],
  ];

  it.each(INVALID_CHARACTER_INPUT_TEST_CASE)(
    "필드 입력값에 문자가 있을 경우, 상태 업데이트가 발생하지 않고 해당 입력 필드에 예외가 발생해야한다.",
    (inputScenario, expectedResult) => {
      const { result } = renderHook(() => useCardNumber());

      React.act(() => {
        if (inputScenario instanceof Array) {
          inputScenario.forEach((inputValue) => {
            result.current.handleCardNumberChange({
              target: {
                value: inputValue,
              },
            } as React.ChangeEvent<HTMLInputElement>);
          });
        }
      });

      expect(result.current.cardNumber).toBe(expectedResult);
      expect(result.current.errorState).toBe(true);
    }
  );
});
