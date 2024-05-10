import { renderHook } from "@testing-library/react-hooks";
import { act } from "react";
import useCardNumber from "./useCardNumber";
import { makeChangeEvent } from "./domains/makeCallback";

describe("useCardNumber/getCardFormat 테스트", () => {
  describe("visa", () => {
    it.each([
      ["4", "4"],
      ["423", "423"],
      ["42345", "4234 5"],
      ["4234123412341234", "4234 1234 1234 1234"],
      ["42345678901234567", "42345678901234567"],
    ])("%s가 들어왔을 때, %s 문자열을 반환한다.", (cardNumber, formattedNumber) => {
      const { result } = renderHook(useCardNumber);
      act(() => result.current.onChange(makeChangeEvent(cardNumber)));
      expect(result.current.formattedValue).toBe(formattedNumber);
    });
  });
  describe("mastercard", () => {
    it.each([
      ["51", "51"],
      ["513456789012345", "5134 5678 9012 345"],
      ["5134567890123456", "5134 5678 9012 3456"],
      ["55", "55"],
      ["553456789012345", "5534 5678 9012 345"],
      ["5534567890123456", "5534 5678 9012 3456"],
      ["55345678901234567", "55345678901234567"],
    ])("%s가 들어왔을 때, %s 브랜드를 반환한다.", (cardNumber, formattedNumber) => {
      const { result } = renderHook(useCardNumber);
      act(() => result.current.onChange(makeChangeEvent(cardNumber)));
      expect(result.current.formattedValue).toBe(formattedNumber);
    });
  });
  describe("diners", () => {
    it.each([
      ["36", "36"],
      ["36123", "3612 3"],
      ["36345678901234", "3634 567890 1234"],
      ["363456789012345", "363456789012345"],
    ])("%s가 들어왔을 때, %s 브랜드를 반환한다.", (cardNumber, formattedNumber) => {
      const { result } = renderHook(useCardNumber);
      act(() => result.current.onChange(makeChangeEvent(cardNumber)));
      expect(result.current.formattedValue).toBe(formattedNumber);
    });
  });
  describe("amex", () => {
    it.each([
      ["34", "34"],
      ["34345", "3434 5"],
      ["343456789012345", "3434 567890 12345"],
      ["37", "37"],
      ["37345", "3734 5"],
      ["373456789012345", "3734 567890 12345"],
      ["3734567890123456", "3734567890123456"],
    ])("%s가 들어왔을 때, %s 브랜드를 반환한다.", (cardNumber, formattedNumber) => {
      const { result } = renderHook(useCardNumber);
      act(() => result.current.onChange(makeChangeEvent(cardNumber)));
      expect(result.current.formattedValue).toBe(formattedNumber);
    });
  });
  describe("union", () => {
    it.each([
      ["622126", "6221 26"],
      ["6221267", "6221 267"],
      ["6221267890123456", "6221 2678 9012 3456"],
      ["622925", "6229 25"],
      ["6229257890123456", "6229 2578 9012 3456"],
      ["62212612345678901", "62212612345678901"],
    ])("%s가 들어왔을 때, %s 브랜드를 반환한다.", (cardNumber, formattedNumber) => {
      const { result } = renderHook(useCardNumber);
      act(() => result.current.onChange(makeChangeEvent(cardNumber)));
      expect(result.current.formattedValue).toBe(formattedNumber);
    });
  });
});
