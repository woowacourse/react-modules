import { renderHook } from "@testing-library/react";
import { ERROR_MESSAGE } from "../lib/constants/error";
import useExpirationDateValidation from "../lib/hooks/useExpirationDateValidation";

const defaultErrorState = {
  isError: false,
  errorMessage: null,
};

const defaultExpirationDateValidationValue = {
  month: defaultErrorState,
  year: defaultErrorState,
};

describe("useExpirationDateValidation", () => {
  it("사용자 입력 값이 없는 경우 기본 유효성 검사 결과를 반환한다.", () => {
    // given
    // when
    const { result } = renderHook(() => useExpirationDateValidation());

    // then
    expect(result.current).toEqual(defaultExpirationDateValidationValue);
  });

  it("유효 기간이 올바른 경우 에러가 발생하지 않는다.", () => {
    // given
    const initialValue = {
      month: "04",
      year: "25",
    };

    // when
    const { result } = renderHook(() =>
      useExpirationDateValidation(initialValue)
    );

    // then
    expect(result.current).toEqual(defaultExpirationDateValidationValue);
  });

  it("유효 기간이 숫자가 아닌 경우 에러가 발생한다.", () => {
    // given
    const initialValue = {
      month: "ㄱ",
      year: "ㄴ",
    };

    const expectedErrorResult = {
      isError: true,
      errorMessage: ERROR_MESSAGE.INVALID_NUMBER,
    };

    // when
    const { result } = renderHook(() =>
      useExpirationDateValidation(initialValue)
    );

    // then
    expect(result.current).toEqual({
      month: expectedErrorResult,
      year: expectedErrorResult,
    });
  });

  it("유효 기간의 각 섹션의 자릿수가 2가 아닌 경우 에러가 발생한다.", () => {
    // given
    const MAX_LENGTH = 2;
    const initialValue = {
      month: "1",
      year: "2",
    };

    const expectedErrorResult = {
      isError: true,
      errorMessage: `${MAX_LENGTH}${ERROR_MESSAGE.INVALID_LENGTH}`,
    };

    // when
    const { result } = renderHook(() =>
      useExpirationDateValidation(initialValue)
    );

    // then
    expect(result.current).toEqual({
      month: expectedErrorResult,
      year: expectedErrorResult,
    });
  });

  it.each(["00", "13"])(
    "월 값이 '%s'인 경우: 월의 범위(01~12)를 벗어나면 에러가 발생한다.",
    (monthValue: string) => {
      // given
      const initialValue = {
        month: monthValue,
      };

      // when
      const { result } = renderHook(() =>
        useExpirationDateValidation(initialValue)
      );

      // then
      expect(result.current).toEqual({
        ...defaultExpirationDateValidationValue,
        month: {
          isError: true,
          errorMessage: ERROR_MESSAGE.INVALID_MONTH,
        },
      });
    }
  );

  it("연도가 현재 연도보다 작은 경우 에러가 발생한다.", () => {
    // given
    const currentYear = new Date().getFullYear() % 100;

    const initialValue = {
      year: String(currentYear - 1),
    };

    // when
    const { result } = renderHook(() =>
      useExpirationDateValidation(initialValue)
    );

    // then
    expect(result.current).toEqual({
      ...defaultExpirationDateValidationValue,
      year: {
        isError: true,
        errorMessage: `${ERROR_MESSAGE.INVALID_YEAR}(${currentYear}년 이상)`,
      },
    });
  });
});
