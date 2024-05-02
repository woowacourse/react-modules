import React from "react";
import { renderHook } from "@testing-library/react";
import useCardholderName from "./useCardholderName";

describe("useCardholderName에 대한 테스트 케이스", () => {
  describe("유효성 검증에 실패하는 경우", () => {
    it("영어가 아닌 값을 입력한 경우 유효하지 않은 값으로 판단한다.", () => {
      const { result } = renderHook(() => useCardholderName());

      const WRONG_VALUE = "한글";
      React.act(() => result.current.setCardholderName(WRONG_VALUE));

      expect(result.current.errorStatus.isValid).toBe(false);
      expect(result.current.errorStatus.errorMessage).not.toBeNull();
    });

    it("양 끝에 공백이 포함된 경우 유효하지 않은 값으로 판단한다.", () => {
      const { result } = renderHook(() => useCardholderName());

      const WRONG_VALUE = " ABC ";
      React.act(() => result.current.setCardholderName(WRONG_VALUE));

      expect(result.current.errorStatus.isValid).toBe(false);
      expect(result.current.errorStatus.errorMessage).not.toBeNull();
    });

    it("사이 공백이 두 개 이상 포함된 경우 유효하지 않은 값으로 판단한다.", () => {
      const { result } = renderHook(() => useCardholderName());

      const WRONG_VALUE = "A B  C";
      React.act(() => result.current.setCardholderName(WRONG_VALUE));

      expect(result.current.errorStatus.isValid).toBe(false);
      expect(result.current.errorStatus.errorMessage).not.toBeNull();
    });
  });

  describe("유효성 검증에 성공하는 경우", () => {
    it("공백 없이 영어 대문자로만 이루어진 값을 입력한 경우 유효한 값으로 판단한다.", () => {
      const { result } = renderHook(() => useCardholderName());

      const CORRECT_VALUE = "ABC";
      React.act(() => result.current.setCardholderName(CORRECT_VALUE));

      expect(result.current.errorStatus.isValid).toBe(true);
      expect(result.current.errorStatus.errorMessage).toBeNull();
    });

    it("사이 공백이 한 개 이하로 포함된 경우 유효한 값으로 판단한다.", () => {
      const CORRECT_VALUE = "A B C";
      const { result } = renderHook(() => useCardholderName());

      React.act(() => result.current.setCardholderName(CORRECT_VALUE));

      expect(result.current.errorStatus.isValid).toBe(true);
      expect(result.current.errorStatus.errorMessage).toBeNull();
    });
  });
});
