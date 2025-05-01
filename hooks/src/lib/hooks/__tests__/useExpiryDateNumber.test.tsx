import { renderHook, act } from "@testing-library/react";
import useExpiryDateNumber from "../useExpiryDateNumber";

import { ERROR_MESSAGE, EXPIRY_DATE_LENGTH } from "../../constants";

describe("useExpiryDateNumber", () => {
  it("초기 상태를 올바르게 반환한다", () => {
    const { result } = renderHook(() => useExpiryDateNumber());
    act(() => {
      result.current.setExpiryDateNumber("1125");
    });
    expect(result.current.expiryDateNumber).toBe("1125");
    expect(result.current.errorMessage).toBe("");
    expect(result.current.isError).toBe(false);
  });

  it(`유효기간이 4자를 초과하면 ${ERROR_MESSAGE.INVALID_LENGTH(
    EXPIRY_DATE_LENGTH
  )}를 보여준다.`, () => {
    const { result } = renderHook(() => useExpiryDateNumber());
    act(() => {
      result.current.setExpiryDateNumber("11256");
    });

    expect(result.current.errorMessage).toBe(
      ERROR_MESSAGE.INVALID_LENGTH(EXPIRY_DATE_LENGTH)
    );
    expect(result.current.isError).toBe(true);
  });

  it(`유효기간이 문자열을 받는다면 ${ERROR_MESSAGE.NOT_NUMERIC}를 보여준다.`, () => {
    const { result } = renderHook(() => useExpiryDateNumber());
    act(() => {
      result.current.setExpiryDateNumber("aaaa");
    });

    expect(result.current.errorMessage).toBe(ERROR_MESSAGE.NOT_NUMERIC);
    expect(result.current.isError).toBe(true);
  });

  it(`유효기간이 공백을 받는다면 ${ERROR_MESSAGE.INVALID_LENGTH(
    EXPIRY_DATE_LENGTH
  )}를 보여준다.`, () => {
    const { result } = renderHook(() => useExpiryDateNumber());
    act(() => {
      result.current.setExpiryDateNumber("    111");
    });

    expect(result.current.errorMessage).toBe(
      ERROR_MESSAGE.INVALID_LENGTH(EXPIRY_DATE_LENGTH)
    );
    expect(result.current.isError).toBe(true);
  });
  it(`월이 12월을 넘는다면 ${ERROR_MESSAGE.INVALID_MONTH}를 보여준다.`, () => {
    const { result } = renderHook(() => useExpiryDateNumber());
    act(() => {
      result.current.setExpiryDateNumber("1324");
    });

    expect(result.current.errorMessage).toBe(ERROR_MESSAGE.INVALID_MONTH);
    expect(result.current.isError).toBe(true);
  });
  it(`월이 1월보다 작다면 ${ERROR_MESSAGE.INVALID_MONTH}를 보여준다.`, () => {
    const { result } = renderHook(() => useExpiryDateNumber());
    act(() => {
      result.current.setExpiryDateNumber("0024");
    });

    expect(result.current.errorMessage).toBe(ERROR_MESSAGE.INVALID_MONTH);
    expect(result.current.isError).toBe(true);
  });
});
