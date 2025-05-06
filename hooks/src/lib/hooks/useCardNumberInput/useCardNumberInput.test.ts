import { renderHook, act } from "@testing-library/react";
import useCardNumberInput from "./useCardNumberInput";
import ERROR_MESSAGE from "../constants/errorMessage";
import { CARD_INPUT } from "../constants/cardValidationInfo";

describe("useCardNumberInput", () => {
  it("초기 상태는 빈 문자열 배열이며 유효함", () => {
    const { result } = renderHook(() => useCardNumberInput());

    expect(result.current.cardNumberState).toEqual([
      { value: "", isValid: true },
      { value: "", isValid: true },
      { value: "", isValid: true },
      { value: "", isValid: true },
    ]);

    expect(result.current.errorMessage).toBe("");
  });

  it("모든 인풋이 숫자 4자리일 때 유효성 통과", async () => {
    const { result } = renderHook(() => useCardNumberInput());

    act(() => {
      result.current.handleInputChange(
        { target: { value: "1234" } } as React.ChangeEvent<HTMLInputElement>,
        0
      );
    });
    act(() => {
      result.current.handleInputChange(
        { target: { value: "5678" } } as React.ChangeEvent<HTMLInputElement>,
        1
      );
    });
    act(() => {
      result.current.handleInputChange(
        { target: { value: "9012" } } as React.ChangeEvent<HTMLInputElement>,
        2
      );
    });
    act(() => {
      result.current.handleInputChange(
        { target: { value: "3456" } } as React.ChangeEvent<HTMLInputElement>,
        3
      );
    });

    expect(result.current.cardNumberState).toEqual([
      { value: "1234", isValid: true },
      { value: "5678", isValid: true },
      { value: "9012", isValid: true },
      { value: "3456", isValid: true },
    ]);
    expect(result.current.errorMessage).toBe("");
  });
});

it("숫자가 아닌 값이 포함되면 유효하지 않음", () => {
  const { result } = renderHook(() => useCardNumberInput());

  act(() => {
    result.current.handleInputChange(
      { target: { value: "12a4" } } as React.ChangeEvent<HTMLInputElement>,
      0
    );
  });

  expect(result.current.cardNumberState[0].isValid).toBe(false);
  expect(result.current.errorMessage).toBe(ERROR_MESSAGE.REQUIRE.NUMBER);
});

it("길이가 부족한 값이 포함되면 유효하지 않음", () => {
  const { result } = renderHook(() => useCardNumberInput());

  act(() => {
    result.current.handleInputChange(
      { target: { value: "123" } } as React.ChangeEvent<HTMLInputElement>,
      0
    );
  });

  expect(result.current.cardNumberState[0].isValid).toBe(false);
  expect(result.current.errorMessage).toBe(
    `숫자 ${CARD_INPUT.MAX_LENGTH.CARD}${ERROR_MESSAGE.REQUIRE.SPECIFIC_LENGTH}`
  );
});
