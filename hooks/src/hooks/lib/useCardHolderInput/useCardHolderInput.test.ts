import React from "react";
import { renderHook } from "@testing-library/react";
import useCardHolderInput from "./useCardHolderInput";
import ERROR_MESSAGE from "../constants/errorMessage";

describe("useCardHolderInput 커스텀 훅", () => {
  describe("초기 상태 테스트", () => {
    it("카드 소유자 이름과 오류 메세지는 초기에 빈 값으로 시작한다.", () => {
      const { result } = renderHook(() => useCardHolderInput());
      expect(result.current.CardHolderState.value).toBe("");
      expect(result.current.CardHolderState.isValid).toBe(false);
      expect(result.current.CardHolderState.errorMessage).toBe("");
    });
  });

  describe("유효하지 않은 입력 테스트", () => {
    it("알파벳 이외의 문자를 입력하면 오류 메시지를 반환한다.", () => {
      const { result } = renderHook(() => useCardHolderInput());
      React.act(() => {
        result.current.handleCardHolderChange({ target: { value: "12345" } } as React.ChangeEvent<HTMLInputElement>);
      });
      expect(result.current.CardHolderState.isValid).toBe(false);
      expect(result.current.CardHolderState.errorMessage).toBe(ERROR_MESSAGE.ONLY_ENGLISH);
    });

    it("입력 길이가 최대 길이를 초과하면 오류 메시지를 반환한다.", () => {
      const { result } = renderHook(() => useCardHolderInput());
      React.act(() => {
        result.current.handleCardHolderChange({ target: { value: "ABCDEFGHIJKLMNOPQRSTUVWXYZ" } } as React.ChangeEvent<HTMLInputElement>);
      });
      expect(result.current.CardHolderState.isValid).toBe(false);
      expect(result.current.CardHolderState.errorMessage).toBe(ERROR_MESSAGE.INVALID_HOLDER_LENGTH);
    });
  });

  describe("유효한 입력 테스트", () => {
    it("유효한 이름을 입력했을 때 올바르게 유효성을 검사해야 한다.", () => {
      const { result } = renderHook(() => useCardHolderInput());
      React.act(() => {
        result.current.handleCardHolderChange({ target: { value: "JINSIL CHOI" } } as React.ChangeEvent<HTMLInputElement>);
      });
      expect(result.current.CardHolderState.isValid).toBe(true);
      expect(result.current.CardHolderState.errorMessage).toBe("");
    });
  });
});
