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

  let result: any;

  beforeEach(() => {
    const hook = renderHook(() =>
      useExpiration({
        initExpiration: expiration,
        initMonthError: monthError,
        initYearError: yearError,
      })
    );
    result = hook.result;
  });

  test("유효 기간 초기 값을 가져온다.", () => {
    expect(result.current.expiration.values).toEqual(expiration);
  });

  test("유효 기간 값을 변경할 수 있다.", () => {
    const type = "month";
    const changeValue = "12";

    act(() => {
      result.current.expiration.changeValues(type, changeValue);
    });

    expect(result.current.expiration.values[type]).toEqual(changeValue);
  });

  test("유효 기간 달이 올바르지 않은 경우 에러를 반환한다.", () => {
    const type = "month";
    const changeValue = "1ㅁ";
    const maxLength = 2;

    act(() => {
      result.current.expiration.changeValues(type, changeValue);
      result.current.monthError.checkValidation({
        length: maxLength,
        type,
        value: changeValue,
      });
    });

    expect(result.current.monthError.isError()).toEqual(true);
  });

  test("유효 기간 년이 올바르지 않은 경우 에러를 반환한다.", () => {
    const type = "year";
    const changeValue = "1a";
    const maxLength = 2;

    act(() => {
      result.current.expiration.changeValues(type, changeValue);
      result.current.yearError.checkValidation({
        length: maxLength,
        type,
        value: changeValue,
      });
    });

    expect(result.current.yearError.isError()).toEqual(true);
  });

  test("유효 기간 달이 올바르지 않은 경우 에러 메시지를 반환한다.", () => {
    const type = "month";
    const changeValue = "1a";
    const maxLength = 2;

    act(() => {
      result.current.expiration.changeValues(type, changeValue);
      result.current.monthError.checkValidation({
        length: maxLength,
        type,
        value: changeValue,
      });
    });

    expect(result.current.monthError.getErrorMessage()).toEqual(
      "숫자만 입력 가능합니다."
    );
  });

  test("유효 기간 년이 올바르지 않은 경우 에러 메시지를 반환한다.", () => {
    const type = "year";
    const changeValue = "1a";
    const maxLength = 2;

    act(() => {
      result.current.expiration.changeValues(type, changeValue);
      result.current.yearError.checkValidation({
        length: maxLength,
        type,
        value: changeValue,
      });
    });

    expect(result.current.yearError.getErrorMessage()).toEqual(
      "숫자만 입력 가능합니다."
    );
  });
});
