import { act, renderHook } from "@testing-library/react";
import {
  ERROR_MESSAGE,
  defaultValidationValue,
} from "../lib/constants/validation";
import useCvcNumber from "../lib/hooks/useCvcNumber";

describe("useCvcNumber", () => {
  it("초깃값은 빈 문자열이고, 유효성 검증 상태는 초기 상태(에러 없음)이어야 한다.", () => {
    // given
    // when
    const { result } = renderHook(() => useCvcNumber());
    const { cvcNumber, cvcNumberValidation } = result.current;

    // then
    expect(cvcNumber).toEqual("");
    expect(cvcNumberValidation).toEqual(defaultValidationValue);
  });

  it("CVC번호가 올바른 경우, 에러가 발생하지 않는다.", () => {
    // given
    const validValue = "123";

    // when
    const { result } = renderHook(() => useCvcNumber());

    act(() => {
      result.current.handleCvcNumberChange(validValue);
    });

    // then
    expect(result.current.cvcNumber).toEqual(validValue);
    expect(result.current.cvcNumberValidation).toEqual(defaultValidationValue);
  });

  it("CVC번호가 숫자가 아닌 경우, 에러가 발생한다.", () => {
    // given
    const nonNumeric = "abc";

    // when
    const { result } = renderHook(() => useCvcNumber());

    act(() => {
      result.current.handleCvcNumberChange(nonNumeric);
    });

    // then
    expect(result.current.cvcNumber).toEqual(nonNumeric);
    expect(result.current.cvcNumberValidation).toEqual({
      isError: true,
      errorMessage: ERROR_MESSAGE.INVALID_NUMBER,
    });
  });

  it("CVC번호의 자릿수가 3이 아닌 경우, 에러가 발생한다.", () => {
    // given
    const invalidLength = "12";
    const MAX_LENGTH = 3;

    // when
    const { result } = renderHook(() => useCvcNumber());

    act(() => {
      result.current.handleCvcNumberChange(invalidLength);
    });

    // then
    expect(result.current.cvcNumber).toEqual(invalidLength);
    expect(result.current.cvcNumberValidation).toEqual({
      isError: true,
      errorMessage: `${MAX_LENGTH}${ERROR_MESSAGE.INVALID_LENGTH}`,
    });
  });
});
