import { renderHook, act } from "@testing-library/react";
import useExpiryDateNumber from "../useExpiryDateNumber";

import { ERROR_MESSAGE, EXPIRY_DATE_LENGTH } from "../../constants";

describe("useExpiryDateNumber", () => {
  it("초기 상태를 올바르게 반환한다", () => {
    const { result } = renderHook(() => useExpiryDateNumber());
    act(() => {
      result.current.setExpiryDateNumber(["11", "24"]);
    });
    expect(result.current.expiryDateNumber).toEqual(["11", "24"]);
    expect(result.current.errorMessage).toEqual(["", ""]);
    expect(result.current.isError).toEqual([false, false]);
  });

  it(`유효기간이 4자를 초과하면 ${ERROR_MESSAGE.INVALID_LENGTH(
    EXPIRY_DATE_LENGTH
  )}를 보여준다.`, () => {
    const { result } = renderHook(() => useExpiryDateNumber());
    act(() => {
      result.current.setExpiryDateNumber(["01", "243"]);
    });

    expect(result.current.errorMessage).toEqual([
      "",
      ERROR_MESSAGE.INVALID_LENGTH(EXPIRY_DATE_LENGTH),
    ]);
    expect(result.current.isError).toEqual([false, true]);
  });

  it(`유효기간이 문자열을 받는다면 ${ERROR_MESSAGE.NOT_NUMERIC}를 보여준다.`, () => {
    const { result } = renderHook(() => useExpiryDateNumber());
    act(() => {
      result.current.setExpiryDateNumber(["aa", "24"]);
    });

    expect(result.current.errorMessage).toEqual([
      ERROR_MESSAGE.NOT_NUMERIC,
      "",
    ]);
    expect(result.current.isError).toEqual([true, false]);
  });

  it(`유효기간이 공백을 받는다면 ${ERROR_MESSAGE.INVALID_LENGTH(
    EXPIRY_DATE_LENGTH
  )}를 보여준다.`, () => {
    const { result } = renderHook(() => useExpiryDateNumber());
    act(() => {
      result.current.setExpiryDateNumber(["   1", "24"]);
    });

    expect(result.current.errorMessage).toEqual([
      ERROR_MESSAGE.INVALID_LENGTH(EXPIRY_DATE_LENGTH),
      "",
    ]);
    expect(result.current.isError).toEqual([true, false]);
  });
  it(`월이 12월을 넘는다면 ${ERROR_MESSAGE.INVALID_MONTH}를 보여준다.`, () => {
    const { result } = renderHook(() => useExpiryDateNumber());
    act(() => {
      result.current.setExpiryDateNumber(["13", "24"]);
    });

    expect(result.current.errorMessage).toEqual([
      ERROR_MESSAGE.INVALID_MONTH,
      "",
    ]);
    expect(result.current.isError).toEqual([true, false]);
  });
  it(`월이 1월보다 작다면 ${ERROR_MESSAGE.INVALID_MONTH}를 보여준다.`, () => {
    const { result } = renderHook(() => useExpiryDateNumber());
    act(() => {
      result.current.setExpiryDateNumber(["00", "24"]);
    });

    expect(result.current.errorMessage).toEqual([
      ERROR_MESSAGE.INVALID_MONTH,
      "",
    ]);
    expect(result.current.isError).toEqual([true, false]);
  });
});
