import { renderHook, act } from "@testing-library/react";
import usePassword from "./usePassword";
import { ERROR_MESSAGE } from "../constants";

describe("신용카드 비밀번호 입력 테스트", () => {
  const initialValue = {
    password: "12",
  };

  it("초기값이 password, value는 string으로 유효하게 설정되어야 한다.", () => {
    const { result } = renderHook(() => usePassword(initialValue));

    expect(result.current.inputValue).toEqual(initialValue);
  });

  it("입력값 숫자로 유효할 때, 업데이트 된다.", () => {
    const userInput = "99";
    const { result } = renderHook(() => usePassword(initialValue));
    const target = { value: userInput, name: "password" };
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

    expect(result.current.inputValue.password).toEqual(userInput);
    expect(result.current.validationResult).toEqual(expectedValidationResult);
  });

  it("입력값이 문자열로 유효하지 않을 때, 업데이트 되지 않고 에러가 발생한다.", () => {
    const userInput = "notUpdate";
    const { result } = renderHook(() => usePassword(initialValue));
    const target = { value: userInput, name: "password" };
    const expectedValidationResult = {
      isValid: false,
      errorMessage: ERROR_MESSAGE.passwordOutOfRange,
    };

    act(() => {
      result.current.handlePasswordChange({
        target,
        currentTarget: target,
      } as React.ChangeEvent<HTMLInputElement>);
    });

    expect(result.current.inputValue.password).not.toEqual(userInput);
    expect(result.current.validationResult).toEqual(expectedValidationResult);
  });

  it("입력값이 숫자지만 2자리 초과로 유효하지 않을 때, 값이 업데이트 되지 않고 에러가 발생한다.", () => {
    const userInput = "123";
    const { result } = renderHook(() => usePassword(initialValue));
    const target = { value: userInput, name: "password" };
    const expectedValidationResult = {
      isValid: false,
      errorMessage: ERROR_MESSAGE.passwordOutOfRange,
    };

    act(() => {
      result.current.handlePasswordChange({
        target,
        currentTarget: target,
      } as React.ChangeEvent<HTMLInputElement>);
    });

    expect(result.current.inputValue.password).not.toEqual(userInput);
    expect(result.current.validationResult).toEqual(expectedValidationResult);
  });

  it("입력 값이 모두 유효한 값으로 채워지고 블러/엔터 이벤트 발생 시, 에러가 발생하지 않는다.", () => {
    const userInput = "12";
    const { result } = renderHook(() => usePassword(initialValue));
    const target = { value: userInput, name: "password" };
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

    expect(result.current.inputValue.password).toEqual(userInput);
    expect(result.current.validationResult).toEqual(expectedValidationResult);
  });

  it("입력 값이 숫자지만 모두 채워지지 않아 유효하지 않을 때, 블러/엔터 이벤트 발생 시 에러가 발생한다.", () => {
    const userInput = "1";
    const { result } = renderHook(() => usePassword(initialValue));
    const target = { value: userInput, name: "password" };
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

    expect(result.current.inputValue.password).not.toEqual(userInput);
    expect(result.current.validationResult).toEqual(expectedValidationResult);
  });
});
