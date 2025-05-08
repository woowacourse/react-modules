import { act, renderHook } from "@testing-library/react";
import {
  ERROR_MESSAGE,
  defaultValidationValue,
} from "../lib/constants/validation";
import usePassword from "../lib/hooks/usePassword";

describe("usePassword", () => {
  it("초깃값은 빈 문자열이고, 유효성 검증 상태는 초기 상태(에러 없음)이어야 한다.", () => {
    // given
    // when
    const { result } = renderHook(() => usePassword());
    const { password, passwordValidation } = result.current;

    // then
    expect(password).toEqual("");
    expect(passwordValidation).toEqual(defaultValidationValue);
  });

  it("비밀번호가 올바른 경우, 에러가 발생하지 않는다.", () => {
    // given
    const validValue = "12";

    // when
    const { result } = renderHook(() => usePassword());

    act(() => {
      result.current.handlePasswordChange(validValue);
    });

    // then
    expect(result.current.password).toEqual(validValue);
    expect(result.current.passwordValidation).toEqual(defaultValidationValue);
  });

  it("비밀번호가 숫자가 아닌 경우, 에러가 발생한다.", () => {
    // given
    const nonNumeric = "ab";

    // when
    const { result } = renderHook(() => usePassword());

    act(() => {
      result.current.handlePasswordChange(nonNumeric);
    });

    // then
    expect(result.current.password).toEqual(nonNumeric);
    expect(result.current.passwordValidation).toEqual({
      isError: true,
      errorMessage: ERROR_MESSAGE.INVALID_NUMBER,
    });
  });

  it("비밀번호의 자릿수가 2가 아닌 경우, 에러가 발생한다.", () => {
    // given
    const invalidLength = "1";
    const MAX_LENGTH = 2;

    // when
    const { result } = renderHook(() => usePassword());

    act(() => {
      result.current.handlePasswordChange(invalidLength);
    });

    // then
    expect(result.current.password).toEqual(invalidLength);
    expect(result.current.passwordValidation).toEqual({
      isError: true,
      errorMessage: `${MAX_LENGTH}${ERROR_MESSAGE.INVALID_LENGTH}`,
    });
  });
});
