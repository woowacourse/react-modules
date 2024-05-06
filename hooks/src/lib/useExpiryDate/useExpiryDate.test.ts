import { renderHook, act } from "@testing-library/react";
import useExpiryDate from "./useExpiryDate";
import { ERROR_MESSAGE } from "../constants";

describe("신용카드 유효기간 입력 테스트", () => {
  const initialValue = {
    month: "12",
    year: "24",
  };

  it("초기값이 month, year이고 value가 string으로 유효하게 설정되어야 한다.", () => {
    const { result } = renderHook(() => useExpiryDate(initialValue));

    expect(result.current.inputValue).toEqual(initialValue);
  });

  test.each(["08", "8"])(
    "월 유효기간으로 유효한 숫자 '%s'을 입력 시, 업데이트 된다.",
    (userInput) => {
      const { result } = renderHook(() => useExpiryDate(initialValue));
      const target = { value: userInput, name: "month" };
      const expectedValidationResult = {
        isValid: true,
        errorMessage: "",
      };

      act(() => {
        result.current.handleExpiryChange({
          target,
          currentTarget: target,
        } as React.ChangeEvent<HTMLInputElement>);
      });

      expect(result.current.inputValue.month).toEqual(userInput);
      expect(result.current.inputValue.year).toEqual(initialValue.year);
      expect(result.current.validationResult).toEqual(expectedValidationResult);
    }
  );

  it("년도 유효기간으로 2자리 숫자인 유효한 값을 입력 시, 업데이트 된다.", () => {
    const userInput = "30";
    const { result } = renderHook(() => useExpiryDate(initialValue));
    const target = { value: userInput, name: "year" };
    const expectedValidationResult = {
      isValid: true,
      errorMessage: "",
    };

    act(() => {
      result.current.handleExpiryChange({
        target,
        currentTarget: target,
      } as React.ChangeEvent<HTMLInputElement>);
    });

    expect(result.current.inputValue.month).toEqual(initialValue.month);
    expect(result.current.inputValue.year).toEqual(userInput);
    expect(result.current.validationResult).toEqual(expectedValidationResult);
  });

  it("월 유효기간 입력 값이 문자열로 유효하지 않을 때, 업데이트 되지 않고 에러가 발생한다.", () => {
    const userInput = "notUpdate";
    const { result } = renderHook(() => useExpiryDate(initialValue));
    const target = { value: userInput, name: "month" };
    const expectedValidationResult = {
      isValid: false,
      errorMessage: ERROR_MESSAGE.expiryFormat,
    };

    act(() => {
      result.current.handleExpiryChange({
        target,
        currentTarget: target,
      } as React.ChangeEvent<HTMLInputElement>);
    });

    expect(result.current.inputValue.month).toEqual(initialValue.month);
    expect(result.current.inputValue.year).toEqual(initialValue.year);
    expect(result.current.validationResult).toEqual(expectedValidationResult);
  });

  it("년도 유효기간 입력 값이 문자열로 유효하지 않을 때, 업데이트 되지 않고 에러가 발생한다.", () => {
    const userInput = "notUpdate";
    const { result } = renderHook(() => useExpiryDate(initialValue));
    const target = { value: userInput, name: "year" };
    const expectedValidationResult = {
      isValid: false,
      errorMessage: ERROR_MESSAGE.expiryFormat,
    };

    act(() => {
      result.current.handleExpiryChange({
        target,
        currentTarget: target,
      } as React.ChangeEvent<HTMLInputElement>);
    });

    expect(result.current.inputValue.month).toEqual(initialValue.month);
    expect(result.current.inputValue.year).toEqual(initialValue.year);
    expect(result.current.validationResult).toEqual(expectedValidationResult);
  });

  it("월 유효기간 입력값이 숫자이지만 2자리 초과로 유효하지 않을 때, 업데이트되지 않고 에러가 발생한다.", () => {
    const userInput = "123";
    const { result } = renderHook(() => useExpiryDate(initialValue));
    const target = { value: userInput, name: "month" };
    const expectedValidationResult = {
      isValid: false,
      errorMessage: ERROR_MESSAGE.expiryFormat,
    };

    act(() => {
      result.current.handleExpiryChange({
        target,
        currentTarget: target,
      } as React.ChangeEvent<HTMLInputElement>);
    });

    expect(result.current.inputValue.month).toEqual(initialValue.month);
    expect(result.current.inputValue.year).toEqual(initialValue.year);
    expect(result.current.validationResult).toEqual(expectedValidationResult);
  });

  it("년도 유효기간 입력값이 숫자이지만 2자리 초과로 유효하지 않을 때, 업데이트 되지 않고 에러가 발생한다.", () => {
    const userInput = "123";
    const { result } = renderHook(() => useExpiryDate(initialValue));
    const target = { value: userInput, name: "year" };
    const expectedValidationResult = {
      isValid: false,
      errorMessage: ERROR_MESSAGE.expiryFormat,
    };

    act(() => {
      result.current.handleExpiryChange({
        target,
        currentTarget: target,
      } as React.ChangeEvent<HTMLInputElement>);
    });

    expect(result.current.inputValue.month).toEqual(initialValue.month);
    expect(result.current.inputValue.year).toEqual(initialValue.year);
    expect(result.current.validationResult).toEqual(expectedValidationResult);
  });

  test.each(["0", "00", "13", "14"])(
    "월 유효기간 입력값 '%s'이 1 ~ 12 사이가 아닌 유효하지 않은 숫자일 때, 블러/엔터 이벤트 발생 시 업데이트 되지 않고 에러가 발생한다.",
    (userInput) => {
      const { result } = renderHook(() => useExpiryDate(initialValue));
      const target = { value: userInput, name: "month" };
      const expectedValidationResult = {
        isValid: false,
        errorMessage: ERROR_MESSAGE.expiredMonth,
      };

      act(() => {
        result.current.handleExpiryDateBlur({
          target,
          currentTarget: target,
        } as React.FocusEvent<HTMLInputElement>);
      });

      expect(result.current.inputValue.month).toEqual(initialValue.month);
      expect(result.current.inputValue.year).toEqual(initialValue.year);
      expect(result.current.validationResult).toEqual(expectedValidationResult);
    }
  );

  it("유효한 한자리 숫자 '1'을 월에 입력하고 블러/엔터 이벤트 발생 시, 두자리 숫자 '01'로 만들어준다.", () => {
    const userInput = "1";
    const { result } = renderHook(() => useExpiryDate(initialValue));
    const target = { value: userInput, name: "month" };
    const expectedValidationResult = {
      isValid: true,
      errorMessage: "",
    };

    act(() => {
      result.current.handleExpiryDateBlur({
        target,
        currentTarget: target,
      } as React.FocusEvent<HTMLInputElement>);
    });

    expect(result.current.inputValue.month).toBe("01");
    expect(result.current.inputValue.year).toEqual(initialValue.year);
    expect(result.current.validationResult).toEqual(expectedValidationResult);
  });

  it("연도의 입력 값이 숫자이지만 2자리 모두 채워지지 않고 블러/엔터 이벤트 발생 시, 에러가 발생한다.", () => {
    const userInput = "1";
    const { result } = renderHook(() => useExpiryDate(initialValue));
    const target = { value: userInput, name: "year" };
    const expectedValidationResult = {
      isValid: false,
      errorMessage: ERROR_MESSAGE.expiryFormat,
    };

    act(() => {
      result.current.handleExpiryDateBlur({
        target,
        currentTarget: target,
      } as React.FocusEvent<HTMLInputElement>);
    });

    expect(result.current.inputValue.month).toEqual(initialValue.month);
    expect(result.current.inputValue.year).toEqual(userInput);
    expect(result.current.validationResult).toEqual(expectedValidationResult);
  });

  it("만료되지 않는 유효한 값을 입력하고 블러/엔터 이벤트 발생 시, 에러가 발생하지 않는다.", () => {
    const userInput = "25";
    const { result } = renderHook(() => useExpiryDate(initialValue));
    const target = { value: userInput, name: "year" };
    const expectedValidationResult = {
      isValid: true,
      errorMessage: "",
    };

    act(() => {
      result.current.handleExpiryChange({
        target,
        currentTarget: target,
      } as React.ChangeEvent<HTMLInputElement>);
    });

    act(() => {
      result.current.handleExpiryDateBlur({
        target,
        currentTarget: target,
      } as React.FocusEvent<HTMLInputElement>);
    });

    expect(result.current.inputValue.month).toEqual(initialValue.month);
    expect(result.current.inputValue.year).toEqual(userInput);
    expect(result.current.validationResult).toEqual(expectedValidationResult);
  });

  it("만료된 유효하지 않은 값을 입력하고 블러/엔터 이벤트 발생 시, 에러가 발생한다.", () => {
    const userInput = "12";
    const { result } = renderHook(() => useExpiryDate(initialValue));
    const target = { value: userInput, name: "year" };
    const expectedValidationResult = {
      isValid: false,
      errorMessage: ERROR_MESSAGE.expiredCard,
    };

    act(() => {
      result.current.handleExpiryChange({
        target,
        currentTarget: target,
      } as React.ChangeEvent<HTMLInputElement>);
    });

    act(() => {
      result.current.handleExpiryDateBlur({
        target,
        currentTarget: target,
      } as React.FocusEvent<HTMLInputElement>);
    });

    expect(result.current.inputValue.month).toEqual(initialValue.month);
    expect(result.current.inputValue.year).toEqual(userInput);
    expect(result.current.validationResult).toEqual(expectedValidationResult);
  });
});
