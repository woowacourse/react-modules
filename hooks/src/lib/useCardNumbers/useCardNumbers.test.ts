import { renderHook, act } from "@testing-library/react";
import useCardNumbers from "./useCardNumbers";

import type { CardNumbersType } from "../types/CardNumberTypes";

describe("useCardNumbers", () => {
  const initialValues: CardNumbersType = ["1234", "5678", "9012", "3456"];

  it("올바른 초기값(initialValues)이 설정되면 그에 맞는 cardNumbers를 반환할 수 있어야 한다", () => {
    const { result } = renderHook(() => useCardNumbers(initialValues));

    expect(result.current.cardNumbers).toEqual(initialValues);
  });

  it("카드번호 입력 필드의 인덱스(inputValue)와 올바른 새 카드번호가 handleUpdateCardNumbers를 통해 들어오면, 입력값에 따라 새 카드번호가 정확히 업데이트 되어야 한다", () => {
    const { result } = renderHook(() => useCardNumbers(initialValues));

    act(() => {
      result.current.handleUpdateCardNumbers(0, "7890");
    });

    expect(result.current.cardNumbers).toEqual([
      "7890",
      "5678",
      "9012",
      "3456",
    ]);
    expect(result.current.validStates).toEqual([true, true, true, true]);
    expect(result.current.validationResult).toEqual({ isValid: true });
  });

  it("카드번호 입력 필드의 인덱스(inputValue)와 잘못된 형식의 새 카드번호가 들어오면, validationResult에 에러 여부 및 메시지가 업데이트 되어야 한다", () => {
    const { result } = renderHook(() => useCardNumbers(initialValues));

    act(() => {
      result.current.handleUpdateCardNumbers(1, "abc");
    });

    const newCardNumbers = [...initialValues];
    newCardNumbers[1] = "abc";

    expect(result.current.cardNumbers).toEqual(newCardNumbers);
    expect(result.current.validStates).toEqual([true, false, true, true]);
    expect(result.current.validationResult).toEqual({
      isValid: false,
      errorMessage:
        "카드 번호는 4자리의 숫자여야 합니다. 확인 후 다시 입력해주세요.",
    });
  });

  it("모든 카드번호 입력 필드가 올바르게 입력되면 validationResult의 isValid가 true여야 한다", () => {
    const { result } = renderHook(() => useCardNumbers(initialValues));

    act(() => {
      result.current.handleUpdateCardNumbers(0, "7890");
    });
    act(() => {
      result.current.handleUpdateCardNumbers(1, "1234");
    });
    act(() => {
      result.current.handleUpdateCardNumbers(2, "5678");
    });
    act(() => {
      result.current.handleUpdateCardNumbers(3, "9012");
    });

    expect(result.current.validationResult).toEqual({ isValid: true });
  });

  it("하나 이상의 카드번호 입력 필드가 잘못 입력되면 validationResult의 isValid가 false여야 한다", () => {
    const { result } = renderHook(() => useCardNumbers(initialValues));

    act(() => {
      result.current.handleUpdateCardNumbers(0, "7890");
    });
    act(() => {
      result.current.handleUpdateCardNumbers(1, "abcd");
    });
    act(() => {
      result.current.handleUpdateCardNumbers(2, "5678");
    });
    act(() => {
      result.current.handleUpdateCardNumbers(3, "9012");
    });

    expect(result.current.validationResult).toEqual({
      isValid: false,
      errorMessage:
        "카드 번호는 4자리의 숫자여야 합니다. 확인 후 다시 입력해주세요.",
    });
  });
});
