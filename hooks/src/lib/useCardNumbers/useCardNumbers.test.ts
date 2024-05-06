import { renderHook } from "@testing-library/react";

import React from "react";

import useCardNumbers from "./useCardNumbers";
import { CardNumberKeys } from "../types/card-custom-hook";

describe("useCardNumbers 커스텀 훅 동작 테스트", () => {
  it("초기값이 정확히 설정되어야 한다.", () => {
    const EXPECTED_INITIAL_VALUE = {
      first: "",
      second: "",
      third: "",
      fourth: "",
    };

    const { result } = renderHook(() => useCardNumbers());
    const { cardNumbers } = result.current;

    expect(cardNumbers).toEqual(EXPECTED_INITIAL_VALUE);
  });

  const VALID_INPUT_TEST_CASE = [
    ["first", "1234"],
    ["second", "1234"],
    ["third", "1234"],
    ["fourth", "1234"],
  ];

  it.each(VALID_INPUT_TEST_CASE)("%s 필드에 입력하는 %s가 해당 필드에 정확히 입력되어야 한다", (field, value) => {
    const { result } = renderHook(() => useCardNumbers());

    React.act(() => {
      result.current.handleCardNumberChange({
        target: {
          name: field,
          value: value,
        },
      } as React.ChangeEvent<HTMLInputElement>);
    });

    expect(result.current.cardNumbers[field as CardNumberKeys]).toBe(value);
    expect(result.current.errorState[field as CardNumberKeys]).toBe(false);
  });

  const INVALID_INPUT_LENGTH_TEST_CASE = [
    ["first", "1"],
    ["second", "12"],
    ["third", "123"],
  ];

  it.each(INVALID_INPUT_LENGTH_TEST_CASE)(
    "%s 필드에 입력하는 입력값이 4글자 이하일 경우, 해당 입력 필드에 예외가 발생해야한다.",
    (field, invalidValue) => {
      const { result } = renderHook(() => useCardNumbers());

      React.act(() => {
        result.current.handleCardNumberChange({
          target: {
            name: field,
            value: invalidValue,
          },
        } as React.ChangeEvent<HTMLInputElement>);
      });

      expect(result.current.cardNumbers[field as CardNumberKeys]).toBe(invalidValue);
      expect(result.current.errorState[field as CardNumberKeys]).toBe(true);
    }
  );

  const INVALID_CHARACTER_INPUT_TEST_CASE = [
    ["second", ["1", "1a"], "1"],
    ["first", ["1", "12", "12a"], "12"],
    ["third", ["1", "12", "123", "123a"], "123"],
  ];

  it.each(INVALID_CHARACTER_INPUT_TEST_CASE)(
    "%s 필드 입력값에 문자가 있을 경우, 상태 업데이트가 발생하지 않고 해당 입력 필드에 예외가 발생해야한다.",
    (field, inputScenario, expectedResult) => {
      const { result } = renderHook(() => useCardNumbers());

      React.act(() => {
        if (inputScenario instanceof Array) {
          inputScenario.forEach((inputValue) => {
            result.current.handleCardNumberChange({
              target: {
                name: field,
                value: inputValue,
              },
            } as React.ChangeEvent<HTMLInputElement>);
          });
        }
      });

      expect(result.current.cardNumbers[field as CardNumberKeys]).toBe(expectedResult);
      expect(result.current.errorState[field as CardNumberKeys]).toBe(true);
    }
  );

  const INVALID_OVER_INPUT_LENGTH = [
    ["first", ["1", "12", "123", "1234", "12345"], "1234"],
    ["second", ["1", "12", "123", "1234", "12345"], "1234"],
    ["second", ["1", "12", "123", "1234", "12345"], "1234"],
    ["fourth", ["1", "12", "123", "1234", "12345"], "1234"],
  ];

  it.each(INVALID_OVER_INPUT_LENGTH)(
    "%s 필드에 4글자 이상의 입력을 할 경우, 상태 업데이트가 발생하지 않아야 한다.",
    (field, inputScenario, expectedResult) => {
      const { result } = renderHook(() => useCardNumbers());

      React.act(() => {
        if (inputScenario instanceof Array) {
          inputScenario.forEach((inputValue) => {
            result.current.handleCardNumberChange({
              target: {
                name: field,
                value: inputValue,
              },
            } as React.ChangeEvent<HTMLInputElement>);
          });
        }
      });

      expect(result.current.cardNumbers[field as CardNumberKeys]).toBe(expectedResult);
    }
  );
});
