import { act, renderHook } from "@testing-library/react";
import { ERROR_MESSAGE, defaultValidationValue } from "../constants/validation";
import useExpirationDate from "../hooks/useExpirationDate";

const defaultExpirationDateValue = {
  month: "",
  year: "",
};

const defaultExpirationDateValidationValue = {
  month: defaultValidationValue,
  year: defaultValidationValue,
};

describe("useExpirationDate", () => {
  it("초깃값은 유효 기간의 2개 필드가 모두 빈 문자열이고, 유효성 검증 상태는 초기 상태(에러 없음)이어야 한다.", () => {
    // given
    // when
    const { result } = renderHook(() => useExpirationDate());
    const { expirationDate, expirationDateValidation } = result.current;

    // then
    expect(expirationDate).toEqual(defaultExpirationDateValue);
    expect(expirationDateValidation).toEqual(
      defaultExpirationDateValidationValue
    );
  });

  it("유효 기간의 4개 필드가 모두 올바른 경우, 유효성 검증 상태는 초기 상태를 유지한다.", () => {
    // given
    const validValue = {
      month: "04",
      year: "25",
    };

    // when
    const { result } = renderHook(() => useExpirationDate());

    act(() => {
      result.current.handleExpirationDateChange("month", validValue.month);
      result.current.handleExpirationDateChange("year", validValue.year);
    });

    // then
    expect(result.current.expirationDate).toEqual(validValue);
    expect(result.current.expirationDateValidation).toEqual(
      defaultExpirationDateValidationValue
    );
  });

  it("유효 기간이 숫자가 아닌 경우, 해당 필드에 에러가 발생한다.", () => {
    // given
    const nonNumeric = "ab";

    // when
    const { result } = renderHook(() => useExpirationDate());

    act(() => {
      result.current.handleExpirationDateChange("month", nonNumeric);
    });

    // then
    expect(result.current.expirationDate.month).toEqual(nonNumeric);
    expect(result.current.expirationDateValidation.month).toEqual({
      isError: true,
      errorMessage: ERROR_MESSAGE.INVALID_NUMBER,
    });
  });

  it("유효 기간 필드의 자릿수가 2가 아닌 경우, 에러가 발생한다.", () => {
    // given
    const invalidLength = "1";
    const MAX_LENGTH = 2;

    // when
    const { result } = renderHook(() => useExpirationDate());

    act(() => {
      result.current.handleExpirationDateChange("month", invalidLength);
    });

    // then
    expect(result.current.expirationDate.month).toEqual(invalidLength);
    expect(result.current.expirationDateValidation.month).toEqual({
      isError: true,
      errorMessage: `${MAX_LENGTH}${ERROR_MESSAGE.INVALID_LENGTH}`,
    });
  });

  it.each(["00", "13"])(
    "월 값이 '%s'인 경우: 월의 범위(01~12)를 벗어나면 에러가 발생한다.",
    (monthValue: string) => {
      // given
      // when
      const { result } = renderHook(() => useExpirationDate());

      act(() => {
        result.current.handleExpirationDateChange("month", monthValue);
      });

      // then
      expect(result.current.expirationDate.month).toEqual(monthValue);
      expect(result.current.expirationDateValidation.month).toEqual({
        isError: true,
        errorMessage: ERROR_MESSAGE.INVALID_MONTH,
      });
    }
  );

  it("연도가 현재 연도보다 작은 경우, 에러가 발생한다.", () => {
    // given
    const currentYear = new Date().getFullYear() % 100;
    const lastYear = String(currentYear - 1);

    // when
    const { result } = renderHook(() => useExpirationDate());

    act(() => {
      result.current.handleExpirationDateChange("year", lastYear);
    });

    // then
    expect(result.current.expirationDate.year).toEqual(lastYear);
    expect(result.current.expirationDateValidation.year).toEqual({
      isError: true,
      errorMessage: `${ERROR_MESSAGE.INVALID_YEAR}(${currentYear}년 이상)`,
    });
  });
});
