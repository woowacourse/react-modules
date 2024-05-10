import { act } from "react";
import useCardNumber from "./useCardNumber";
import { renderHook } from "@testing-library/react-hooks";
import { makeChangeEvent } from "./domains/makeCallback";

describe("useCardNumber/getCardBrand 테스트", () => {
  describe("visa", () => {
    it.each([
      ["4", "visa"],
      ["423", "visa"],
      ["4234123412341234", "visa"],
      ["42345678901234567", "none"],
    ])("%s가 들어왔을 때, %s 브랜드를 반환한다.", (cardNumber, cardBrand) => {
      const { result } = renderHook(useCardNumber);
      act(() => result.current.onChange(makeChangeEvent(cardNumber)));
      expect(result.current.cardBrand).toBe(cardBrand);
    });
  });
  describe("mastercard", () => {
    it.each([
      ["51", "mastercard"],
      ["513456789012345", "mastercard"],
      ["5134567890123456", "mastercard"],
      ["55", "mastercard"],
      ["553456789012345", "mastercard"],
      ["5534567890123456", "mastercard"],
      ["55345678901234567", "none"],
    ])("%s가 들어왔을 때, %s 브랜드를 반환한다.", (cardNumber, cardBrand) => {
      const { result } = renderHook(useCardNumber);
      act(() => result.current.onChange(makeChangeEvent(cardNumber)));
      expect(result.current.cardBrand).toBe(cardBrand);
    });
  });
  describe("diners", () => {
    it.each([
      ["36", "diners"],
      ["36123", "diners"],
      ["36345678901234", "diners"],
      ["363456789012345", "none"],
    ])("%s가 들어왔을 때, %s 브랜드를 반환한다.", (cardNumber, cardBrand) => {
      const { result } = renderHook(useCardNumber);
      act(() => result.current.onChange(makeChangeEvent(cardNumber)));
      expect(result.current.cardBrand).toBe(cardBrand);
    });
  });
  describe("amex", () => {
    it.each([
      ["34", "amex"],
      ["34345", "amex"],
      ["343456789012345", "amex"],
      ["37", "amex"],
      ["37345", "amex"],
      ["373456789012345", "amex"],
      ["3734567890123456", "none"],
    ])("%s가 들어왔을 때, %s 브랜드를 반환한다.", (cardNumber, cardBrand) => {
      const { result } = renderHook(useCardNumber);
      act(() => result.current.onChange(makeChangeEvent(cardNumber)));
      expect(result.current.cardBrand).toBe(cardBrand);
    });
  });
  describe("union", () => {
    it.each([
      ["622126", "union"],
      ["6221267", "union"],
      ["6221267890123456", "union"],
      ["622925", "union"],
      ["6229257890123456", "union"],
      ["62212612345678901", "none"],
    ])("%s가 들어왔을 때, %s 브랜드를 반환한다.", (cardNumber, cardBrand) => {
      const { result } = renderHook(useCardNumber);
      act(() => result.current.onChange(makeChangeEvent(cardNumber)));
      expect(result.current.cardBrand).toBe(cardBrand);
    });
  });
});
