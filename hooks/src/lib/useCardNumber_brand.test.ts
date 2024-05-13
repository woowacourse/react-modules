import { act } from "react";
import useCardNumber from "./useCardNumber";
import { renderHook } from "@testing-library/react-hooks";
import { makeChangeEvent } from "./domains/makeCallback";

describe("useCardNumber/getCardBrand 테스트", () => {
  describe("visa", () => {
    it.each(["4", "423", "4234123412341234"])("%s가 들어왔을 때, visa 브랜드를 반환한다.", (cardNumber) => {
      const { result } = renderHook(useCardNumber);
      act(() => result.current.onChange(makeChangeEvent(cardNumber)));
      expect(result.current.cardBrand).toBe("visa");
    });
  });
  describe("mastercard", () => {
    it.each(["51", "513456789012345", "5134567890123456", "55", "553456789012345", "5534567890123456"])(
      "%s가 들어왔을 때, mastercard 브랜드를 반환한다.",
      (cardNumber) => {
        const { result } = renderHook(useCardNumber);
        act(() => result.current.onChange(makeChangeEvent(cardNumber)));
        expect(result.current.cardBrand).toBe("mastercard");
      }
    );
  });
  describe("diners", () => {
    it.each(["36", "36123", "36345678901234"])("%s가 들어왔을 때, %s 브랜드를 반환한다.", (cardNumber) => {
      const { result } = renderHook(useCardNumber);
      act(() => result.current.onChange(makeChangeEvent(cardNumber)));
      expect(result.current.cardBrand).toBe("diners");
    });
  });
  describe("amex", () => {
    it.each(["34", "34345", "343456789012345", "37", "37345", "373456789012345"])(
      "%s가 들어왔을 때, amex 브랜드를 반환한다.",
      (cardNumber) => {
        const { result } = renderHook(useCardNumber);
        act(() => result.current.onChange(makeChangeEvent(cardNumber)));
        expect(result.current.cardBrand).toBe("amex");
      }
    );
  });
  describe("union", () => {
    it.each(["622126", "6221267", "6221267890123456", "622925", "6229257890123456"])(
      "%s가 들어왔을 때, union 브랜드를 반환한다.",
      (cardNumber) => {
        const { result } = renderHook(useCardNumber);
        act(() => result.current.onChange(makeChangeEvent(cardNumber)));
        expect(result.current.cardBrand).toBe("union");
      }
    );
  });

  describe("브랜드 길이초과시 none 테스트", () => {
    it.each(["42345678901234567", "55345678901234567", "363456789012345", "3734567890123456", "62212612345678901"])(
      "브랜드 길이를 초과한 %s가 들어왔을 때, none 브랜드를 반환한다.",
      (cardNumber) => {
        const { result } = renderHook(useCardNumber);
        act(() => result.current.onChange(makeChangeEvent(cardNumber)));
        expect(result.current.cardBrand).toBe("none");
      }
    );
  });
});
