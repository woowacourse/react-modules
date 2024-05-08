import { renderHook, act } from "@testing-library/react";
import useCardNumber from "./useCardNumber";
import { ERROR_MESSAGE } from "../constants";

describe("신용카드 번호 입력 테스트", () => {
  const initialValue = {
    cardNumber: "1234567890123456",
  };

  it("초기값이 cardNumber를 가지고 value가 string으로 유효한 값으로 설정되어야 한다.", () => {
    const { result } = renderHook(() => useCardNumber(initialValue));

    expect(result.current.inputValue).toEqual(initialValue);
  });

  it("입력값 숫자로 유효한 값일 때, 값이 업데이트 된다.", () => {
    const userInput = "1234";
    const { result } = renderHook(() => useCardNumber(initialValue));
    const target = { value: userInput, name: "cardNumber" };
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

    expect(result.current.inputValue.cardNumber).toEqual(userInput);
    expect(result.current.validationResult).toEqual(expectedValidationResult);
  });

  it("입력값이 문자로 유효하지 않을 때, 업데이트 되지 않고 에러가 발생한다.", () => {
    const userInput = "notUpdate";
    const { result } = renderHook(() => useCardNumber(initialValue));
    const target = { value: userInput, name: "cardNumber" };
    const expectedValidationResult = {
      isValid: false,
      errorMessage: ERROR_MESSAGE.cardNumberOutOfRange(16),
    };

    act(() => {
      result.current.handleCardNumberChange({
        target,
        currentTarget: target,
      } as React.ChangeEvent<HTMLInputElement>);
    });

    expect(result.current.inputValue.cardNumber).not.toEqual(userInput);
    expect(result.current.validationResult).toEqual(expectedValidationResult);
  });

  it("입력값이 16자리 이상 숫자로 유효하지 않을 때, 업데이트 되지 않고 에러가 발생한다.", () => {
    const userInput = "12345678901234567";
    const { result } = renderHook(() => useCardNumber(initialValue));
    const target = { value: userInput, name: "cardNumber" };
    const expectedValidationResult = {
      isValid: false,
      errorMessage: ERROR_MESSAGE.cardNumberOutOfRange(16),
    };

    act(() => {
      result.current.handleCardNumberChange({
        target,
        currentTarget: target,
      } as React.ChangeEvent<HTMLInputElement>);
    });

    expect(result.current.inputValue.cardNumber).not.toEqual(userInput);
    expect(result.current.validationResult).toEqual(expectedValidationResult);
  });

  it("입력 값이 유효한 값으로 모두 채워지고 블러/엔터 이벤트 발생 시, 에러가 발생하지 않고 해당하는 카드 브랜드로 포맷팅된다.", () => {
    const userInput = "1234567890123456";
    const expectedInput = "1234 5678 9012 3456";
    const { result } = renderHook(() => useCardNumber(initialValue));
    const target = { value: userInput, name: "cardNumber" };
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

    expect(result.current.inputValue.cardNumber).toEqual(expectedInput);
    expect(result.current.validationResult).toEqual(expectedValidationResult);
  });

  it("입력 값이 숫자지만 16자리 모두 채워지지 않아 유효하지 않을때, 블러/엔터 이벤트 발생 시 에러가 발생한다.", () => {
    const userInput = "125";
    const { result } = renderHook(() => useCardNumber(initialValue));
    const target = { value: userInput, name: "cardNumber" };
    const expectedValidationResult = {
      isValid: false,
      errorMessage: ERROR_MESSAGE.cardNumberOutOfRange(16),
    };

    act(() => {
      result.current.handleCardNumberBlur({
        target,
        currentTarget: target,
      } as React.FocusEvent<HTMLInputElement>);
    });

    expect(result.current.inputValue.cardNumber).not.toEqual(userInput);
    expect(result.current.validationResult).toEqual(expectedValidationResult);
  });

  it("입력 값의 시작이 '36'이면 카드 브랜드는 'Diners'로, Enter시 카드 브랜드에 맞게 14자리로 포맷팅된다.", () => {
    const userInput = "36123456789012";
    const expectedInput = "3612 345678 9012";
    const { result } = renderHook(() => useCardNumber(initialValue));
    const target = { value: userInput, name: "cardNumber" };
    const expectedValidationResult = {
      isValid: true,
      errorMessage: "",
    };

    act(() => {
      result.current.handleCardNumberChange({
        target,
        currentTarget: target,
      } as React.FocusEvent<HTMLInputElement>);
    });

    act(() => {
      result.current.handleCardNumberBlur({
        target,
        currentTarget: target,
      } as React.FocusEvent<HTMLInputElement>);
    });
    expect(result.current.inputValue.cardNumber).toEqual(expectedInput);
    expect(result.current.validationResult).toEqual(expectedValidationResult);
  });
});
