import React from "react";
import { renderHook } from "@testing-library/react";
import useCVCInput from "./useCVCInput";
import ERROR_MESSAGE from "../constants/errorMessage";

describe("useCVCInput", () => {
  describe("초기 상태 테스트", () => {
    it("CVC와 오류 메세지는 초기에 빈 값으로 시작한다.", () => {
      const { result } = renderHook(() => useCVCInput());
      expect(result.current.CVCState.value).toBe("");
      expect(result.current.CVCState.errorMessage).toBe("");
    });
  });

  describe("유효하지 않은 입력 테스트", () => {
    it("CVC가 비어 있을 경우, 오류 메시지를 반환해야 한다.", () => {
      const { result } = renderHook(() => useCVCInput());
      React.act(() => {
        result.current.handleCVCChange({ target: { value: "" } } as React.ChangeEvent<HTMLInputElement>);
      });
      expect(result.current.CVCState.isValid).toBe(false);
      expect(result.current.CVCState.errorMessage).toBe(ERROR_MESSAGE.EMPTY_VALUE);
    });

    it("CVC에 숫자 이외의 문자가 포함된 경우, 오류 메시지를 반환한다.", () => {
      const { result } = renderHook(() => useCVCInput());
      React.act(() => {
        result.current.handleCVCChange({ target: { value: "12A" } } as React.ChangeEvent<HTMLInputElement>);
      });
      expect(result.current.CVCState.isValid).toBe(false);
      expect(result.current.CVCState.errorMessage).toBe(ERROR_MESSAGE.ONLY_NUMBER);
    });

    it("CVC가 3자리 초과인 경우, 오류 메시지를 반환한다.", () => {
      const { result } = renderHook(() => useCVCInput());
      React.act(() => {
        result.current.handleCVCChange({ target: { value: "1234" } } as React.ChangeEvent<HTMLInputElement>);
      });
      expect(result.current.CVCState.isValid).toBe(false);
      expect(result.current.CVCState.errorMessage).toBe(ERROR_MESSAGE.INVALID_CVC_LENGTH);
    });

    it("CVC가 3자리 미만인 경우, 오류 메시지를 반환한다.", () => {
      const { result } = renderHook(() => useCVCInput());
      React.act(() => {
        result.current.handleCVCChange({ target: { value: "12" } } as React.ChangeEvent<HTMLInputElement>);
      });
      expect(result.current.CVCState.isValid).toBe(false);
      expect(result.current.CVCState.errorMessage).toBe(ERROR_MESSAGE.INVALID_CVC_LENGTH);
    });
  });

  describe("유효한 입력 테스트", () => {
    it("유효한 CVC를 입력했을 때 올바르게 유효성을 검사해야 한다.", () => {
      const { result } = renderHook(() => useCVCInput());
      React.act(() => {
        result.current.handleCVCChange({ target: { value: "123" } } as React.ChangeEvent<HTMLInputElement>);
      });
      expect(result.current.CVCState.isValid).toBe(true);
      expect(result.current.CVCState.errorMessage).toBe("");
    });
  });
});
