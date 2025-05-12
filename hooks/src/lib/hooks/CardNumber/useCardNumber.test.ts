import { renderHook, act } from "@testing-library/react";
import useCardNumber from "./index";

describe("useCardNumber", () => {
  it("입력 값이 정확히 업데이트 되어야 한다.", () => {
    const { result } = renderHook(() => useCardNumber());

    const userInput = "1234";
    act(() => {
      result.current.onChange(userInput);
    });
    expect(result.current.value).toBe(userInput);
  });

  it("카드 번호에 숫자 이외의 입력 값은 입력되지 않는다.", () => {
    const { result } = renderHook(() => useCardNumber());

    const nonNumericInputs = ["ㅁ", "abc", "@#$", "123abc", " "];
    nonNumericInputs.forEach((input) => {
      act(() => {
        result.current.onChange(input);
      });
      expect(result.current.value).toBe("");
    });
  });

  it("카드 번호를 입력하지 않으면 에러가 발생한다.", () => {
    const { result } = renderHook(() => useCardNumber());

    const emptyInput = "";
    act(() => {
      result.current.onChange(emptyInput);
    });

    expect(result.current.errorState.isValid).toBe(false);
    expect(result.current.errorState.errorMessage).toBe(
      "카드 번호를 입력해주세요."
    );
  });

  it("카드 번호 13자리를 입력하면 최소 글자 수 14자리에 유효하지 않아 에러가 발생한다. ", () => {
    const validMinLengthInput = Array.from(
      { length: 13 },
      (_, index) => index + 1
    ).join("");
    const { result } = renderHook(() => useCardNumber());

    act(() => {
      result.current.onChange(validMinLengthInput);
    });

    expect(result.current.errorState.isValid).toBe(false);
    expect(result.current.errorState.errorMessage).toBe(
      "카드 번호는 14 ~ 16자리여야 합니다."
    );
  });

  it("카드 번호 17자리를 입력하면 최대 글자 수 16자리에 유효하지 않아 에러가 발생한다. ", () => {
    const validMinLengthInput = Array.from(
      { length: 17 },
      (_, index) => index + 1
    ).join("");
    const { result } = renderHook(() => useCardNumber());

    act(() => {
      result.current.onChange(validMinLengthInput);
    });

    expect(result.current.errorState.isValid).toBe(false);
    expect(result.current.errorState.errorMessage).toBe(
      "카드 번호는 14 ~ 16자리여야 합니다."
    );
  });
});
