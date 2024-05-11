import React from "react";
import { renderHook } from "@testing-library/react";
import usePasswordInput from "./usePasswordInput";
import ERROR_MESSAGE from "../constants/errorMessage";

describe("카드 비밀번호 입력에 대한 usePasswordInput 커스텀 훅 테스트", () => {
  describe("초기 상태 테스트", () => {
    it("비밀번호와 오류 메세지는 초기에 빈 값으로 시작한다.", () => {
      const { result } = renderHook(usePasswordInput);
      expect(result.current.PasswordState.value).toBe("");
      expect(result.current.PasswordState.errorMessage).toBe("");
    });
  });

  describe("유효성 검증 테스트", () => {
    it("비밀번호가 비어 있을 경우, 오류 메시지를 반환한다.", () => {
      const { result } = renderHook(usePasswordInput);
      React.act(() => {
        result.current.handlePasswordChange({ target: { value: "" } } as React.ChangeEvent<HTMLInputElement>);
      });
      expect(result.current.PasswordState.isValid).toBe(false);
      expect(result.current.PasswordState.errorMessage).toBe(ERROR_MESSAGE.EMPTY_VALUE);
    });

    it("비밀번호에 숫자 이외의 문자가 포함된 경우, 오류 메시지를 반환한다.", () => {
      const { result } = renderHook(usePasswordInput);
      React.act(() => {
        result.current.handlePasswordChange({ target: { value: "12A" } } as React.ChangeEvent<HTMLInputElement>);
      });
      expect(result.current.PasswordState.isValid).toBe(false);
      expect(result.current.PasswordState.errorMessage).toBe(ERROR_MESSAGE.ONLY_NUMBER);
    });

    it("비밀번호의 길이가 2자리를 초과할 때, 오류 메시지를 반환한다.", () => {
      const { result } = renderHook(usePasswordInput);
      React.act(() => {
        result.current.handlePasswordChange({ target: { value: "1234" } } as React.ChangeEvent<HTMLInputElement>);
      });
      expect(result.current.PasswordState.isValid).toBe(false);
      expect(result.current.PasswordState.errorMessage).toBe(ERROR_MESSAGE.INVALID_PASSWORD_LENGTH);
    });

    it("비밀번호의 길이가 2자리 미만일 떄, 오류 메시지를 반환한다.", () => {
      const { result } = renderHook(usePasswordInput);
      React.act(() => {
        result.current.handlePasswordChange({ target: { value: "1" } } as React.ChangeEvent<HTMLInputElement>);
      });
      expect(result.current.PasswordState.isValid).toBe(false);
      expect(result.current.PasswordState.errorMessage).toBe(ERROR_MESSAGE.INVALID_PASSWORD_LENGTH);
    });
  });

  describe("유효한 입력 테스트", () => {
    it("유효한 비밀번호를 입력했을 때 올바르게 유효성을 검사해야 한다.", () => {
      const { result } = renderHook(usePasswordInput);
      React.act(() => {
        result.current.handlePasswordChange({ target: { value: "54" } } as React.ChangeEvent<HTMLInputElement>);
      });
      expect(result.current.PasswordState.isValid).toBe(true);
      expect(result.current.PasswordState.errorMessage).toBe("");
    });
  });
});
