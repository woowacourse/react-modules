import { renderHook, act } from "@testing-library/react";
import useCardNumber from "./useCardNumber";
import { ERROR_MESSAGE } from "../constants";

describe("신용카드 번호 입력 테스트", () => {
  const initialValue = {
    first: "first",
    second: "second",
    third: "third",
  };

  it("초기값이 정확히 설정되어야 한다.", () => {
    const { result } = renderHook(() => useCardNumber(initialValue));

    expect(result.current.inputValue).toEqual(initialValue);
  });

  it("입력값 숫자일 떄 정확히 업데이트 되어야 한다.", () => {
    const userInput = "1234";
    const { result } = renderHook(() => useCardNumber(initialValue));
    const target = { value: userInput, name: "first" };
    const expectedValidationResult = {
      isValid: true,
      errorMessage: "",
    };

    act(() => {
      result.current.handleCardNumberChange({
        target,
        currentTarget: target,
      } as React.ChangeEvent<HTMLInputElement>);
    });

    expect(result.current.inputValue.first).toEqual(userInput);
    expect(result.current.validationResult).toEqual(expectedValidationResult);
  });

  it("입력값이 숫자가 아닐 때 업데이트가 안된다", () => {
    const userInput = "notUpdate";
    const { result } = renderHook(() => useCardNumber(initialValue));
    const target = { value: userInput, name: "first" };
    const expectedValidationResult = {
      isValid: false,
      errorMessage: ERROR_MESSAGE.onlyNumber,
    };

    act(() => {
      result.current.handleCardNumberChange({
        target,
        currentTarget: target,
      } as React.ChangeEvent<HTMLInputElement>);
    });

    expect(result.current.inputValue.first).not.toEqual(userInput);
    expect(result.current.validationResult).toEqual(expectedValidationResult);
  });

  it("입력값이 4자리 이상일 때 업데이트가 안된다", () => {
    const userInput = "12345";
    const { result } = renderHook(() => useCardNumber(initialValue));
    const target = { value: userInput, name: "first" };
    const expectedValidationResult = {
      isValid: false,
      errorMessage: ERROR_MESSAGE.onlyNumber,
    };

    act(() => {
      result.current.handleCardNumberChange({
        target,
        currentTarget: target,
      } as React.ChangeEvent<HTMLInputElement>);
    });

    expect(result.current.inputValue.first).not.toEqual(userInput);
    expect(result.current.validationResult).toEqual(expectedValidationResult);
  });

  it("입력 값이 모두 채워지고 블러/엔터 이벤트 발생 시 에러가 발생하지 않는다", () => {
    const userInput = "1234";
    const { result } = renderHook(() => useCardNumber(initialValue));
    const target = { value: userInput, name: "first" };
    const expectedValidationResult = {
      isValid: true,
      errorMessage: "",
    };

    act(() => {
      result.current.handleCardNumberBlur({
        target,
        currentTarget: target,
      } as React.FocusEvent<HTMLInputElement>);
    });

    expect(result.current.inputValue.first).toEqual(userInput);
    expect(result.current.validationResult).toEqual(expectedValidationResult);
  });

  it("입력 값이 모두 채워지지 않고 블러/엔터 이벤트 발생 시 에러가 발생한다", () => {
    const userInput = "125";
    const { result } = renderHook(() => useCardNumber(initialValue));
    const target = { value: userInput, name: "first" };
    const expectedValidationResult = {
      isValid: false,
      errorMessage: ERROR_MESSAGE.cardNumberOutOfRange,
    };

    act(() => {
      result.current.handleCardNumberBlur({
        target,
        currentTarget: target,
      } as React.FocusEvent<HTMLInputElement>);
    });

    expect(result.current.inputValue.first).not.toEqual(userInput);
    expect(result.current.validationResult).toEqual(expectedValidationResult);
  });
});
