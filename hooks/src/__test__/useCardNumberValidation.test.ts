import { renderHook } from "@testing-library/react";
import useCardNumberValidation from "../lib/hooks/useCardNumberValidation";
import { ERROR_MESSAGE } from "../lib/constants/error";

const defaultErrorState = {
  isError: false,
  errorMessage: null,
};

const defaultCardNumberValidationValue = {
  first: defaultErrorState,
  second: defaultErrorState,
  third: defaultErrorState,
  fourth: defaultErrorState,
};

describe("useCardNumberValidation", () => {
  it("사용자 입력 값이 없는 경우 기본 유효성 검사 결과를 반환한다.", () => {
    // given
    // when
    const { result } = renderHook(() => useCardNumberValidation());

    // then
    expect(result.current).toEqual(defaultCardNumberValidationValue);
  });

  it("카드 번호가 올바른 경우 에러가 발생하지 않는다.", () => {
    // given
    const initialValue = {
      first: "1111",
      second: "2222",
      third: "3333",
      fourth: "4444",
    };

    // when
    const { result } = renderHook(() => useCardNumberValidation(initialValue));

    // then
    expect(result.current).toEqual(defaultCardNumberValidationValue);
  });

  it("사용자는 카드 번호 4자리 중 선택적으로 유효성 검사를 수행할 수 있다.", () => {
    // given
    const initialValue = {
      first: "",
      second: "2222",
      third: "3333",
    };

    // when
    const { result } = renderHook(() => useCardNumberValidation(initialValue));

    // then
    expect(result.current).toEqual(defaultCardNumberValidationValue);
  });

  it("카드 번호가 숫자가 아닌 경우 에러가 발생한다.", () => {
    // given
    const initialValue = {
      first: "ㄱ",
    };

    // when
    const { result } = renderHook(() => useCardNumberValidation(initialValue));

    // then
    expect(result.current).toEqual({
      ...defaultCardNumberValidationValue,
      first: { isError: true, errorMessage: ERROR_MESSAGE.INVALID_NUMBER },
    });
  });

  it("카드 번호의 각 섹션의 자릿수가 4가 아닌 경우 에러가 발생한다.", () => {
    // given
    const MAX_LENGTH = 4;
    const initialValue = {
      first: "123",
    };

    // when
    const { result } = renderHook(() => useCardNumberValidation(initialValue));

    // then
    expect(result.current).toEqual({
      ...defaultCardNumberValidationValue,
      first: {
        isError: true,
        errorMessage: `${MAX_LENGTH}${ERROR_MESSAGE.INVALID_LENGTH}`,
      },
    });
  });

  it("여러 에러가 발생하는 경우 각 섹션마다 에러가 발생한다.", () => {
    // given
    const MAX_LENGTH = 4;
    const initialValue = {
      first: "123",
      second: "ㄱ",
    };

    // when
    const { result } = renderHook(() => useCardNumberValidation(initialValue));

    // then
    expect(result.current).toEqual({
      ...defaultCardNumberValidationValue,
      first: {
        isError: true,
        errorMessage: `${MAX_LENGTH}${ERROR_MESSAGE.INVALID_LENGTH}`,
      },
      second: {
        isError: true,
        errorMessage: ERROR_MESSAGE.INVALID_NUMBER,
      },
    });
  });
});
