import React from "react";
import { renderHook } from "@testing-library/react";
import useCardIssuer, { CARD_ISSUERS } from ".";

describe("useCardIssuer에 대한 테스트 케이스", () => {
  describe("유효성 검증에 실패하는 경우", () => {
    test.each(["소파카드", "라이언카드", "BCCard"])(
      "카드사 옵션이 아닌 값(%s)을 입력한 경우 유효하지 않은 값으로 판단한다.",
      (value) => {
        const { result } = renderHook(() => useCardIssuer());

        React.act(() => result.current.setCardIssuer(value));

        expect(result.current.errorStatus.isError).toBe(true);
        expect(result.current.errorStatus.errorMessage).not.toBeNull();
      }
    );
  });

  describe("유효성 검증에 성공하는 경우", () => {
    test.each(CARD_ISSUERS)("카드사 옵션(%s)을 입력한 경우 유효한 값으로 판단한다.", (value) => {
      const { result } = renderHook(() => useCardIssuer());

      React.act(() => result.current.setCardIssuer(value));

      expect(result.current.errorStatus.isError).toBe(false);
      expect(result.current.errorStatus.errorMessage).toBeNull();
    });
  });
});
