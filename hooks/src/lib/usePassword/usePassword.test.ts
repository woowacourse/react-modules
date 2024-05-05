import { renderHook, act } from "@testing-library/react";
import usePassword from "./usePassword";
import { ERROR_MESSAGE } from "../constants";

describe("신용카드 비밀번호 입력 테스트", () => {
  const initialValue = "12";

  it("인자로 넘긴 값 그대로 초기값이 설정되어야 한다.", () => {
    const { result } = renderHook(() => usePassword(initialValue));

    expect(result.current.inputValue).toEqual(initialValue);
  });

  it("입력값 숫자일 떄 입력한 값으로 업데이트 되어야 한다.", () => {
    const userInput = "99";
    const { result } = renderHook(() => usePassword(initialValue));
    const target = { value: userInput };
    const expectedValidationResult = {
      isValid: true,
      errorMessage: "",
    };

    act(() => {
      result.current.handlePasswordChange({
        target,
        currentTarget: target,
      } as React.ChangeEvent<HTMLInputElement>);
    });

    expect(result.current.inputValue).toEqual(userInput);
    expect(result.current.validationResult).toEqual(expectedValidationResult);
  });

  it("입력값이 숫자가 아닐 때 업데이트가 안된다", () => {
    const userInput = "notUpdate";
    const { result } = renderHook(() => usePassword(initialValue));
    const target = { value: userInput };
    const expectedValidationResult = {
      isValid: false,
      errorMessage: ERROR_MESSAGE.onlyNumber,
    };

    act(() => {
      result.current.handlePasswordChange({
        target,
        currentTarget: target,
      } as React.ChangeEvent<HTMLInputElement>);
    });

    expect(result.current.inputValue).not.toEqual(userInput);
    expect(result.current.validationResult).toEqual(expectedValidationResult);
  });

  it("입력값이 2자리 초과시 업데이트가 안된다", () => {
    const userInput = "123";
    const { result } = renderHook(() => usePassword(initialValue));
    const target = { value: userInput };
    const expectedValidationResult = {
      isValid: false,
      errorMessage: ERROR_MESSAGE.onlyNumber,
    };

    act(() => {
      result.current.handlePasswordChange({
        target,
        currentTarget: target,
      } as React.ChangeEvent<HTMLInputElement>);
    });

    expect(result.current.inputValue).not.toEqual(userInput);
    expect(result.current.validationResult).toEqual(expectedValidationResult);
  });

  it("입력 값이 모두 채워지고 블러 이벤트 발생 시 에러가 발생하지 않는다", () => {
    const userInput = "12";
    const { result } = renderHook(() => usePassword(initialValue));
    const target = { value: userInput };
    const expectedValidationResult = {
      isValid: true,
      errorMessage: "",
    };

    act(() => {
      result.current.handlePasswordBlur({
        target,
        currentTarget: target,
      } as React.FocusEvent<HTMLInputElement>);
    });

    expect(result.current.inputValue).toEqual(userInput);
    expect(result.current.validationResult).toEqual(expectedValidationResult);
  });

  it("입력 값이 모두 채워지지 않고 블러 이벤트 발생 시 에러가 발생한다", () => {
    const userInput = "1";
    const { result } = renderHook(() => usePassword(initialValue));
    const target = { value: userInput };
    const expectedValidationResult = {
      isValid: false,
      errorMessage: ERROR_MESSAGE.passwordOutOfRange,
    };

    act(() => {
      result.current.handlePasswordBlur({
        target,
        currentTarget: target,
      } as React.FocusEvent<HTMLInputElement>);
    });

    expect(result.current.inputValue).not.toEqual(userInput);
    expect(result.current.validationResult).toEqual(expectedValidationResult);
  });
});
