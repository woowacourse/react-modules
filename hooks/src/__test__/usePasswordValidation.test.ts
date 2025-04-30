import { renderHook } from "@testing-library/react";
import { ERROR_MESSAGE } from "../lib/constants/error";
import usePasswordValidation from "../lib/hooks/usePasswordValidation";

describe("usePasswordValidation", () => {
  it("비밀번호가 올바른 경우 에러가 발생하지 않는다.", () => {
    // given
    const initialValue = "12";

    // when
    const { result } = renderHook(() => usePasswordValidation(initialValue));

    // then
    expect(result.current).toEqual({
      isError: false,
      errorMessage: null,
    });
  });

  it("비밀번호가 숫자가 아닌 경우 에러가 발생한다.", () => {
    // given
    const initialValue = "ㄱ";

    // when
    const { result } = renderHook(() => usePasswordValidation(initialValue));

    // then
    expect(result.current).toEqual({
      isError: true,
      errorMessage: ERROR_MESSAGE.INVALID_NUMBER,
    });
  });

  it("비밀번호의 자릿수가 2가 아닌 경우 에러가 발생한다.", () => {
    // given
    const MAX_LENGTH = 2;
    const initialValue = "1";

    // when
    const { result } = renderHook(() => usePasswordValidation(initialValue));

    // then
    expect(result.current).toEqual({
      isError: true,
      errorMessage: `${MAX_LENGTH}${ERROR_MESSAGE.INVALID_LENGTH}`,
    });
  });
});
