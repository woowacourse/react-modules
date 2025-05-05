import { renderHook, act } from "@testing-library/react";
import useExpiration from "../hooks/useExpiration";

describe("유효 기간 테스트", () => {
  const expiration = {
    month: "",
    year: "",
  };

  const monthError = {
    month: "",
  };

  const yearError = {
    year: "",
  };

  test("유효 기간 초기 값을 가져온다.", () => {
    const { result } = renderHook(() =>
      useExpiration({
        initExpiration: expiration,
        initMonthError: monthError,
        initYearError: yearError,
      })
    );

    expect(result.current.expiration).toEqual(expiration);
  });

  test("유효 기간 값을 변경할 수 있다.", () => {
    const { result } = renderHook(() =>
      useExpiration({
        initExpiration: expiration,
        initMonthError: monthError,
        initYearError: yearError,
      })
    );
    const type = "month";
    const changeValue = "12";

    act(() => {
      result.current.setExpiration(type, changeValue);
    });

    expect(result.current.expiration[type]).toEqual(changeValue);
  });

  test("유효 기간 달이 올바르지 않은 경우 에러를 반환한다.", () => {
    const { result } = renderHook(() =>
      useExpiration({
        initExpiration: expiration,
        initMonthError: monthError,
        initYearError: yearError,
      })
    );

    const type = "month";
    const changeValue = "1ㅁ";
    const maxLength = 2;

    act(() => {
      result.current.setExpiration(type, changeValue);
      result.current.validateMonth({
        length: maxLength,
        type,
        value: changeValue,
      });
    });

    expect(result.current.isMonthError()).toEqual(true);
  });

  test("유효 기간 년이 올바르지 않은 경우 에러를 반환한다.", () => {
    const { result } = renderHook(() =>
      useExpiration({
        initExpiration: expiration,
        initMonthError: monthError,
        initYearError: yearError,
      })
    );

    const type = "year";
    const changeValue = "1a";
    const maxLength = 2;

    act(() => {
      result.current.setExpiration(type, changeValue);
      result.current.validateMonth({
        length: maxLength,
        type,
        value: changeValue,
      });
    });

    expect(result.current.isMonthError()).toEqual(true);
  });

  test("유효 기간 달이 올바르지 않은 경우 에러 메시지를 반환한다.", () => {
    const { result } = renderHook(() =>
      useExpiration({
        initExpiration: expiration,
        initMonthError: monthError,
        initYearError: yearError,
      })
    );

    const type = "month";
    const changeValue = "1a";
    const maxLength = 2;

    act(() => {
      result.current.setExpiration(type, changeValue);
      result.current.validateMonth({
        length: maxLength,
        type,
        value: changeValue,
      });
    });

    expect(result.current.getMonthErrorMessage()).toEqual(
      "숫자만 입력 가능합니다."
    );
  });

  test("유효 기간 년이 올바르지 않은 경우 에러 메시지를 반환한다.", () => {
    const { result } = renderHook(() =>
      useExpiration({
        initExpiration: expiration,
        initMonthError: monthError,
        initYearError: yearError,
      })
    );

    const type = "year";
    const changeValue = "1a";
    const maxLength = 2;

    act(() => {
      result.current.setExpiration(type, changeValue);
      result.current.validateYear({
        length: maxLength,
        type,
        value: changeValue,
      });
    });

    expect(result.current.getYearErrorMessage()).toEqual(
      "숫자만 입력 가능합니다."
    );
  });
});
