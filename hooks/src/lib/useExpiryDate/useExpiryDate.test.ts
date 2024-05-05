import { renderHook, act } from "@testing-library/react";
import useExpiryDate from "./useExpiryDate";
import { ERROR_MESSAGE } from "../constants";

describe("신용카드 유효기간 입력 테스트", () => {
  const initialValue = {
    month: "12",
    year: "24",
  };

  it("인자로 넘긴 값 그대로 초기값이 설정되어야 한다.", () => {
    const { result } = renderHook(() => useExpiryDate(initialValue));

    expect(result.current.inputValue).toEqual(initialValue);
  });

  it("월 유효기간 입력 시 입력한 값으로 업데이트 되어야 한다.", () => {
    const userInput = "08";
    const { result } = renderHook(() => useExpiryDate(initialValue));
    const target = { value: userInput, name: "month" };
    const expectedValidationResult = {
      isValid: true,
      errorMessage: "",
    };

    act(() => {
      result.current.handleExpiryChange({
        target,
        currentTarget: target,
      } as React.ChangeEvent<HTMLInputElement>);
    });

    expect(result.current.inputValue.month).toEqual(userInput);
    expect(result.current.inputValue.year).toEqual(initialValue.year);
    expect(result.current.validationResult).toEqual(expectedValidationResult);
  });

  it("년도 유효기간 입력 시 입력한 값으로 업데이트 되어야 한다.", () => {
    const userInput = "30";
    const { result } = renderHook(() => useExpiryDate(initialValue));
    const target = { value: userInput, name: "year" };
    const expectedValidationResult = {
      isValid: true,
      errorMessage: "",
    };

    act(() => {
      result.current.handleExpiryChange({
        target,
        currentTarget: target,
      } as React.ChangeEvent<HTMLInputElement>);
    });

    expect(result.current.inputValue.month).toEqual(initialValue.month);
    expect(result.current.inputValue.year).toEqual(userInput);
    expect(result.current.validationResult).toEqual(expectedValidationResult);
  });

  it("월 유효기간 입력값이 숫자가 아닐 때 업데이트가 안된다", () => {
    const userInput = "notUpdate";
    const { result } = renderHook(() => useExpiryDate(initialValue));
    const target = { value: userInput, name: "month" };
    const expectedValidationResult = {
      isValid: false,
      errorMessage: ERROR_MESSAGE.onlyNumber,
    };

    act(() => {
      result.current.handleExpiryChange({
        target,
        currentTarget: target,
      } as React.ChangeEvent<HTMLInputElement>);
    });

    expect(result.current.inputValue.month).toEqual(initialValue.month);
    expect(result.current.inputValue.year).toEqual(initialValue.year);
    expect(result.current.validationResult).toEqual(expectedValidationResult);
  });

  it("년도 유효기간 입력값이 숫자가 아닐 때 업데이트가 안된다", () => {
    const userInput = "notUpdate";
    const { result } = renderHook(() => useExpiryDate(initialValue));
    const target = { value: userInput, name: "year" };
    const expectedValidationResult = {
      isValid: false,
      errorMessage: ERROR_MESSAGE.onlyNumber,
    };

    act(() => {
      result.current.handleExpiryChange({
        target,
        currentTarget: target,
      } as React.ChangeEvent<HTMLInputElement>);
    });

    expect(result.current.inputValue.month).toEqual(initialValue.month);
    expect(result.current.inputValue.year).toEqual(initialValue.year);
    expect(result.current.validationResult).toEqual(expectedValidationResult);
  });

  it("월 유효기간 입력값이 2자리 초과시 업데이트가 안된다", () => {
    const userInput = "123";
    const { result } = renderHook(() => useExpiryDate(initialValue));
    const target = { value: userInput, name: "month" };
    const expectedValidationResult = {
      isValid: false,
      errorMessage: ERROR_MESSAGE.expiryFormat,
    };

    act(() => {
      result.current.handleExpiryChange({
        target,
        currentTarget: target,
      } as React.ChangeEvent<HTMLInputElement>);
    });

    expect(result.current.inputValue.month).toEqual(initialValue.month);
    expect(result.current.inputValue.year).toEqual(initialValue.year);
    expect(result.current.validationResult).toEqual(expectedValidationResult);
  });

  it("년도 유효기간 입력값이 2자리 초과시 업데이트가 안된다", () => {
    const userInput = "123";
    const { result } = renderHook(() => useExpiryDate(initialValue));
    const target = { value: userInput, name: "year" };
    const expectedValidationResult = {
      isValid: false,
      errorMessage: ERROR_MESSAGE.expiryFormat,
    };

    act(() => {
      result.current.handleExpiryChange({
        target,
        currentTarget: target,
      } as React.ChangeEvent<HTMLInputElement>);
    });

    expect(result.current.inputValue.month).toEqual(initialValue.month);
    expect(result.current.inputValue.year).toEqual(initialValue.year);
    expect(result.current.validationResult).toEqual(expectedValidationResult);
  });

  it("월 유효기간 입력값이 1 ~ 12 사이가 아닐 때 블러 이벤트 발생 시 업데이트가 안된다", () => {
    const userInput = "13";
    const { result } = renderHook(() => useExpiryDate(initialValue));
    const target = { value: userInput, name: "month" };
    const expectedValidationResult = {
      isValid: false,
      errorMessage: ERROR_MESSAGE.expiredCard,
    };

    act(() => {
      result.current.handleExpiryDateBlur({
        target,
        currentTarget: target,
      } as React.FocusEvent<HTMLInputElement>);
    });

    expect(result.current.inputValue.month).toEqual(initialValue.month);
    expect(result.current.inputValue.year).toEqual(initialValue.year);
    expect(result.current.validationResult).toEqual(expectedValidationResult);
  });

  it("한자리 월을 입력하고 블러 이벤트 발생 시 두자리로 만들어준다", () => {
    const userInput = "1";
    const { result } = renderHook(() => useExpiryDate(initialValue));
    const target = { value: userInput, name: "month" };
    const expectedValidationResult = {
      isValid: true,
      errorMessage: "",
    };

    act(() => {
      result.current.handleExpiryDateBlur({
        target,
        currentTarget: target,
      } as React.FocusEvent<HTMLInputElement>);
    });

    expect(result.current.inputValue.month).toBe("01");
    expect(result.current.validationResult).toEqual(expectedValidationResult);
  });

  it("연도의 입력 값이 모두 채워지지 않고 블러 이벤트 발생 시 에러가 발생한다", () => {
    const userInput = "1";
    const { result } = renderHook(() => useExpiryDate(initialValue));
    const target = { value: userInput, name: "year" };
    const expectedValidationResult = {
      isValid: false,
      errorMessage: ERROR_MESSAGE.expiryFormat,
    };

    act(() => {
      result.current.handleExpiryDateBlur({
        target,
        currentTarget: target,
      } as React.FocusEvent<HTMLInputElement>);
    });

    expect(result.current.inputValue.year).not.toEqual(userInput);
    expect(result.current.validationResult).toEqual(expectedValidationResult);
  });
});
