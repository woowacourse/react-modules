import { renderHook } from "@testing-library/react";

import React from "react";

import useCardHolderName from "./useCardHolderName";

describe("useCardHolderName 커스텀 훅 동작 테스트", () => {
  it("초기값이 정확히 설정되어야 한다.", () => {
    const EXPECTED_INITIAL_VALUE = "";

    const { result } = renderHook(() => useCardHolderName());
    const { holderName } = result.current;

    expect(holderName).toEqual(EXPECTED_INITIAL_VALUE);
  });

  it("해당 필드에 정확히 입력되어야 한다", () => {
    const VALID_INPUT_TEST_CASE = "HARRY SIMO";
    const EXPECTED_RESULT = "HARRY SIMO";

    const { result } = renderHook(() => useCardHolderName());

    React.act(() => {
      result.current.handleCardHolderNameChange({
        target: {
          value: VALID_INPUT_TEST_CASE,
        },
      } as React.ChangeEvent<HTMLInputElement>);
    });

    expect(result.current.holderName).toBe(EXPECTED_RESULT);
    expect(result.current.errorState).toBe(false);
  });

  it("필드에 입력하는 입력값이 15글자 이상인 경우, 해당 입력 필드에 예외가 발생해야한다.", () => {
    const INVALID_INPUT_LENGTH_TEST_CASE = "HARRY SIMO GOOD BOYS";
    const EXPECTED_RESULT = "HARRY SIMO GOOD BOYS";

    const { result } = renderHook(() => useCardHolderName());

    React.act(() => {
      result.current.handleCardHolderNameChange({
        target: {
          value: INVALID_INPUT_LENGTH_TEST_CASE,
        },
      } as React.ChangeEvent<HTMLInputElement>);
    });

    expect(result.current.holderName).toBe(EXPECTED_RESULT);
    expect(result.current.errorState).toBe(true);
  });

  it("필드 입력값에 알파벳 이외의 문자가 있을 경우, 상태 업데이트가 발생하지 않고 해당 입력 필드에 예외가 발생해야한다.", () => {
    const INVALID_INPUT_SCENARIO_TEST_CASE = [
      "H",
      "HA",
      "HAR",
      "HARR",
      "HARRY",
      "HARRY1",
    ];
    const EXPECTED_RESULT = "HARRY";

    const { result } = renderHook(() => useCardHolderName());

    React.act(() => {
      INVALID_INPUT_SCENARIO_TEST_CASE.forEach((inputValue) => {
        result.current.handleCardHolderNameChange({
          target: {
            value: inputValue,
          },
        } as React.ChangeEvent<HTMLInputElement>);
      });
    });

    expect(result.current.holderName).toBe(EXPECTED_RESULT);
    expect(result.current.errorState).toBe(true);
  });
});
