import React from "react";
import { renderHook } from "@testing-library/react";
import { useExpiryDate } from ".";

describe("useExpiryDate에 대한 테스트 케이스", () => {
  describe("expiryMonth 유효성 검증에 실패하는 경우", () => {
    test.each(["00", "13"])(
      "월(月)의 최소, 최대 범위를 벗어난 값(%s)을 입력한 경우 유효하지 않은 값으로 판단한다.",
      (value) => {
        const { result } = renderHook(() => useExpiryDate());

        React.act(() => result.current.setExpiryMonth(value));

        expect(result.current.expiryMonthErrorStatus.isError).toBe(true);
        expect(result.current.expiryMonthErrorStatus.errorMessage).not.toBeNull();
      }
    );
  });

  describe("expiryYear 유효성 검증에 실패하는 경우", () => {
    test.each(["23", "41"])(
      "년(年)의 최소, 최대 범위를 벗어난 값(%s)을 입력한 경우 유효하지 않은 값으로 판단한다.",
      (value) => {
        const { result } = renderHook(() => useExpiryDate());

        React.act(() => result.current.setExpiryYear(value));

        expect(result.current.expiryYearErrorStatus.isError).toBe(true);
        expect(result.current.expiryYearErrorStatus.errorMessage).not.toBeNull();
      }
    );
  });

  describe("expiryMonth 유효성 검증에 성공하는 경우", () => {
    test.each(["01", "12"])(
      "년(年)의 범위 내의 값(%s)을 입력한 경우 유효한 값으로 판단한다.",
      (value) => {
        const { result } = renderHook(() => useExpiryDate());

        React.act(() => result.current.setExpiryMonth(value));

        expect(result.current.expiryMonthErrorStatus.isError).toBe(false);
        expect(result.current.expiryMonthErrorStatus.errorMessage).toBeNull();
      }
    );
  });

  describe("expiryYear 유효성 검증에 성공하는 경우", () => {
    test.each(["24", "40"])(
      "년(年)의 범위 내의 값(%s)을 입력한 경우 유효한 값으로 판단한다.",
      (value) => {
        const { result } = renderHook(() => useExpiryDate());

        React.act(() => result.current.setExpiryYear(value));

        expect(result.current.expiryYearErrorStatus.isError).toBe(false);
        expect(result.current.expiryYearErrorStatus.errorMessage).toBeNull();
      }
    );
  });
});
