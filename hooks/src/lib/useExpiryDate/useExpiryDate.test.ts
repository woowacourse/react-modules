import { renderHook } from "@testing-library/react";

import React from "react";

import useExpiryDate from "./useExpiryDate";

import { ExpiryDateKeys } from "../types/card-custom-hook";

describe("useExpiryDate 커스텀 훅 동작 테스트", () => {
  it("초기값이 정확히 설정되어야 한다.", () => {
    const EXPECTED_INITIAL_VALUE = {
      month: "",
      year: "",
    };

    const { result } = renderHook(() => useExpiryDate());
    const { expiryDate } = result.current;

    expect(expiryDate).toEqual(EXPECTED_INITIAL_VALUE);
  });

  const VALID_INPUT_TEST_CASE = [
    ["month", "11"],
    ["year", "25"],
  ];

  it.each(VALID_INPUT_TEST_CASE)(
    "%s 필드에 입력하는 %s가 해당 필드에 정확히 입력되어야 한다",
    (field, value) => {
      const { result } = renderHook(() => useExpiryDate());

      React.act(() => {
        result.current.handleExpiryDateChange({
          target: {
            name: field,
            value: value,
          },
        } as React.ChangeEvent<HTMLInputElement>);
      });

      expect(result.current.expiryDate[field as ExpiryDateKeys]).toBe(value);
      expect(result.current.errorState[field as ExpiryDateKeys]).toBe(false);
    }
  );

  const INVALID_INPUT_LENGTH_TEST_CASE = [
    ["month", "1"],
    ["year", "1"],
  ];

  it.each(INVALID_INPUT_LENGTH_TEST_CASE)(
    "%s 필드에 입력하는 입력값이 2글자이지 않을 경우, 해당 입력 필드에 예외가 발생해야한다.",
    (field, invalidValue) => {
      const { result } = renderHook(() => useExpiryDate());

      React.act(() => {
        result.current.handleExpiryDateChange({
          target: {
            name: field,
            value: invalidValue,
          },
        } as React.ChangeEvent<HTMLInputElement>);
      });

      expect(result.current.expiryDate[field as ExpiryDateKeys]).toBe(
        invalidValue
      );
      expect(result.current.errorState[field as ExpiryDateKeys]).toBe(true);
    }
  );

  const INVALID_CHARACTER_INPUT_TEST_CASE = [
    ["month", ["1", "1a"], "1"],
    ["month", ["1", "12", "12a"], "12"],
    ["month", ["1", "12", "123"], "12"],
    ["year", ["3", "3a"], "3"],
    ["year", ["3", "32", "32a"], "32"],
    ["year", ["1", "12", "123"], "12"],
  ];

  it.each(INVALID_CHARACTER_INPUT_TEST_CASE)(
    "%s 필드 입력값에 문자가 있을 경우, 상태 업데이트가 발생하지 않고 해당 입력 필드에 예외가 발생해야한다.",
    (field, inputScenario, expectedResult) => {
      const { result } = renderHook(() => useExpiryDate());

      React.act(() => {
        if (inputScenario instanceof Array) {
          inputScenario.forEach((inputValue) => {
            result.current.handleExpiryDateChange({
              target: {
                name: field,
                value: inputValue,
              },
            } as React.ChangeEvent<HTMLInputElement>);
          });
        }
      });

      expect(result.current.expiryDate[field as ExpiryDateKeys]).toBe(
        expectedResult
      );
      expect(result.current.errorState[field as ExpiryDateKeys]).toBe(true);
    }
  );
});
