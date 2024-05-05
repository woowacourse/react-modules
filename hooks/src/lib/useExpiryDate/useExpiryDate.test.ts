import { renderHook } from "@testing-library/react";

import React from "react";

import useExpiryDate from "./useExpiryDate";

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

  it("month필드에 입력하는 11값은 해당 필드에 정확히 입력되어야 한다", () => {
    const { result } = renderHook(() => useExpiryDate());
    const VALID_INPUT = "11";

    React.act(() => {
      result.current.handleExpiryDateChange.month({
        target: {
          value: VALID_INPUT,
        },
      } as React.ChangeEvent<HTMLInputElement>);
    });

    expect(result.current.expiryDate.month).toBe(VALID_INPUT);
    expect(result.current.errorState.month).toBe(false);
  });

  it("year필드에 입력하는 25값은 해당 필드에 정확히 입력되어야 한다", () => {
    const { result } = renderHook(() => useExpiryDate());
    const VALID_INPUT = "25";

    React.act(() => {
      result.current.handleExpiryDateChange.year({
        target: {
          value: VALID_INPUT,
        },
      } as React.ChangeEvent<HTMLInputElement>);
    });

    expect(result.current.expiryDate.year).toBe(VALID_INPUT);
    expect(result.current.errorState.year).toBe(false);
  });

  it("month필드에 입력하는 입력값이 2글자이지 않을 경우, 해당 입력 필드에 예외가 발생해야한다.", () => {
    const { result } = renderHook(() => useExpiryDate());
    const INVALID_INPUT_LENGTH = "1";

    React.act(() => {
      result.current.handleExpiryDateChange.month({
        target: {
          value: INVALID_INPUT_LENGTH,
        },
      } as React.ChangeEvent<HTMLInputElement>);
    });

    expect(result.current.expiryDate.month).toBe(INVALID_INPUT_LENGTH);
    expect(result.current.errorState.month).toBe(true);
  });

  it("year필드에 입력하는 입력값이 2글자이지 않을 경우, 해당 입력 필드에 예외가 발생해야한다.", () => {
    const { result } = renderHook(() => useExpiryDate());
    const INVALID_INPUT_LENGTH = "1";

    React.act(() => {
      result.current.handleExpiryDateChange.year({
        target: {
          value: INVALID_INPUT_LENGTH,
        },
      } as React.ChangeEvent<HTMLInputElement>);
    });

    expect(result.current.expiryDate.year).toBe(INVALID_INPUT_LENGTH);
    expect(result.current.errorState.year).toBe(true);
  });

  const MONTH_INVALID_CHARACTER_INPUT_TEST_CASE = [
    [["1", "1a"], "1"],
    [["1", "12", "12a"], "12"],
  ];

  it.each(MONTH_INVALID_CHARACTER_INPUT_TEST_CASE)(
    "입력값에 문자가 있을 경우, 상태 업데이트가 발생하지 않고 해당 입력 필드에 예외가 발생해야한다.",
    (inputScenario, expectedResult) => {
      const { result } = renderHook(() => useExpiryDate());

      React.act(() => {
        if (inputScenario instanceof Array) {
          inputScenario.forEach((inputValue) => {
            result.current.handleExpiryDateChange.month({
              target: {
                value: inputValue,
              },
            } as React.ChangeEvent<HTMLInputElement>);
          });
        }
      });

      expect(result.current.expiryDate.month).toBe(expectedResult);
      expect(result.current.errorState.month).toBe(true);
    }
  );

  const YEAR_INVALID_CHARACTER_INPUT_TEST_CASE = [
    [["3", "3a"], "3"],
    [["3", "32", "32a"], "32"],
  ];

  it.each(YEAR_INVALID_CHARACTER_INPUT_TEST_CASE)(
    "입력값에 문자가 있을 경우, 상태 업데이트가 발생하지 않고 해당 입력 필드에 예외가 발생해야한다.",
    (inputScenario, expectedResult) => {
      const { result } = renderHook(() => useExpiryDate());

      React.act(() => {
        if (inputScenario instanceof Array) {
          inputScenario.forEach((inputValue) => {
            result.current.handleExpiryDateChange.year({
              target: {
                value: inputValue,
              },
            } as React.ChangeEvent<HTMLInputElement>);
          });
        }
      });

      expect(result.current.expiryDate.year).toBe(expectedResult);
      expect(result.current.errorState.year).toBe(true);
    }
  );
});

it("month 필드에 입력값이 01~12가 아닌 경우, 해당 입력 필드에 예외가 발생해야한다.", () => {
  const { result } = renderHook(() => useExpiryDate());
  const INVALID_INPUT = "13";
  React.act(() => {
    result.current.handleExpiryDateChange.month({
      target: {
        value: INVALID_INPUT,
      },
    } as React.ChangeEvent<HTMLInputElement>);
  });

  expect(result.current.expiryDate.month).toBe(INVALID_INPUT);
  expect(result.current.errorState.month).toBe(true);
});

it("year 필드에 입력값이 이미 지난 년도인 경우, 해당 입력 필드에 예외가 발생해야한다.", () => {
  const { result } = renderHook(() => useExpiryDate());
  const INVALID_INPUT = "23";
  React.act(() => {
    result.current.handleExpiryDateChange.year({
      target: {
        value: INVALID_INPUT,
      },
    } as React.ChangeEvent<HTMLInputElement>);
  });

  expect(result.current.expiryDate.year).toBe(INVALID_INPUT);
  expect(result.current.errorState.year).toBe(true);
});

it("유효기간이 지난 경우, 모든 입력 필드에 예외가 발생해야한다.", () => {
  const { result } = renderHook(() => useExpiryDate());
  const MONTH_INVALID_INPUT = "01";
  const YEAR_INVALID_INPUT = "24";

  React.act(() => {
    result.current.handleExpiryDateChange.month({
      target: {
        value: MONTH_INVALID_INPUT,
      },
    } as React.ChangeEvent<HTMLInputElement>);
    result.current.handleExpiryDateChange.year({
      target: {
        value: YEAR_INVALID_INPUT,
      },
    } as React.ChangeEvent<HTMLInputElement>);
  });

  expect(result.current.expiryDate.month).toBe(MONTH_INVALID_INPUT);
  expect(result.current.expiryDate.year).toBe(YEAR_INVALID_INPUT);
  expect(result.current.errorState.month).toBe(true);
  expect(result.current.errorState.year).toBe(true);
});
