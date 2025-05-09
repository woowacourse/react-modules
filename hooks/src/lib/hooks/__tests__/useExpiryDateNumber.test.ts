import { renderHook, act } from "@testing-library/react";
import useExpiryDateNumber from "../useExpiryDateNumber";
import { EXPIRY_DATE_ERROR_MESSAGES } from "../../validator/constants/error-messages";

describe("useExpiryDateNumber", () => {
  it("초기 상태값이 올바르게 설정되어야 한다", () => {
    const { result } = renderHook(() => useExpiryDateNumber());

    expect(result.current.expiryDateNumber).toBe("");
    expect(result.current.errorMessage).toBeUndefined();
    expect(result.current.isError).toBe(false);
  });

  it("유효한 만료일을 입력하면 에러가 발생하지 않아야 한다", () => {
    const { result } = renderHook(() => useExpiryDateNumber());

    act(() => {
      result.current.onExpiryDateNumberChange({
        target: { value: "1225" },
      } as React.ChangeEvent<HTMLInputElement>);
    });

    expect(result.current.expiryDateNumber).toBe("1225");
    expect(result.current.isError).toBe(false);
    expect(result.current.errorMessage).toBeUndefined();
  });
  it(`유효하지 않은 만료일을 입력하면 ${EXPIRY_DATE_ERROR_MESSAGES.INVALID_FORMAT} 발생해야 한다.`, () => {
    const { result } = renderHook(() => useExpiryDateNumber());

    act(() => {
      result.current.onExpiryDateNumberChange({
        target: { value: "e" },
      } as React.ChangeEvent<HTMLInputElement>);
    });

    expect(result.current.expiryDateNumber).toBe("e");
    expect(result.current.isError).toBe(true);
    expect(result.current.errorMessage).toBe(
      EXPIRY_DATE_ERROR_MESSAGES.INVALID_FORMAT
    );
  });
  it(`유효하지 않은 만료월을 입력하면 ${EXPIRY_DATE_ERROR_MESSAGES.INVALID_MONTH} 발생해야 한다`, () => {
    const { result } = renderHook(() => useExpiryDateNumber());

    act(() => {
      result.current.onExpiryDateNumberChange({
        target: { value: "1325" },
      } as React.ChangeEvent<HTMLInputElement>);
    });

    expect(result.current.expiryDateNumber).toBe("1325");
    expect(result.current.isError).toBe(true);
    expect(result.current.errorMessage).toBe(
      EXPIRY_DATE_ERROR_MESSAGES.INVALID_MONTH
    );
  });
  it(`지난 유효기간은 ${EXPIRY_DATE_ERROR_MESSAGES.EXPIRED_DATE} 에러를 발생시켜야 한다`, () => {
    const { result } = renderHook(() => useExpiryDateNumber());
    jest.useFakeTimers();
    jest.setSystemTime(new Date("2025-02-01").getTime());

    act(() => {
      result.current.onExpiryDateNumberChange({
        target: { value: "0125" },
      } as React.ChangeEvent<HTMLInputElement>);
    });
    jest.useRealTimers();
    expect(result.current.expiryDateNumber).toBe("0125");
    expect(result.current.isError).toBe(true);
    expect(result.current.errorMessage).toBe(
      EXPIRY_DATE_ERROR_MESSAGES.EXPIRED_DATE
    );
  });

  it("입력값의 앞뒤 공백이 제거되어야 한다", () => {
    const { result } = renderHook(() => useExpiryDateNumber());

    act(() => {
      result.current.onExpiryDateNumberChange({
        target: { value: "  1225  " },
      } as React.ChangeEvent<HTMLInputElement>);
    });

    expect(result.current.expiryDateNumber).toBe("1225");
  });
});
