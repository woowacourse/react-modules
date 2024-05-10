import React from "react";
import { renderHook } from "@testing-library/react";

import useCardNumbers from "./useCardNumbers";

import { VALIDATION_MESSAGES } from "../constants/card-custom-hook";

describe("useCardNumbers 커스텀 훅 동작 테스트", () => {
  it("초기값이 정확히 설정되어야 한다.", () => {
    const EXPECTED_INITIAL_VALUE = [] as string[];

    const { result } = renderHook(() => useCardNumbers());
    const { cardNumbers } = result.current;

    expect(cardNumbers).toEqual(EXPECTED_INITIAL_VALUE);
  });

  const CARD_FORMATTING_TEST_CASES = [
    ["4123123412341234", ["4123", "1234", "1234", "1234"]], // Visa
    ["5123123412341234", ["5123", "1234", "1234", "1234"]], // Master
    ["5523123412341234", ["5523", "1234", "1234", "1234"]], // Master
    ["36121234561234", ["3612", "123456", "1234"]], // Diners
    ["341212345612345", ["3412", "123456", "12345"]], // Amex
    ["371212345612345", ["3712", "123456", "12345"]], // Amex
    ["6241123412341234", ["6241", "1234", "1234", "1234"]], // UnionPay
    ["6261123412341234", ["6261", "1234", "1234", "1234"]], // UnionPay
    ["6282123412341234", ["6282", "1234", "1234", "1234"]], // UnionPay
    ["6288123412341234", ["6288", "1234", "1234", "1234"]], // UnionPay
    ["6221261212341234", ["6221", "2612", "1234", "1234"]], // UnionPay
    ["6229251212341234", ["6229", "2512", "1234", "1234"]], // UnionPay
    ["1234123412341234", ["1234", "1234", "1234", "1234"]], // None
  ];

  it.each(CARD_FORMATTING_TEST_CASES)(
    "유효한 %s 카드 입력일 경우, 포매팅 규칙에 맞게 올바른 형태로 포매팅되어야 한다",
    (cardNumberInput, expectedFormattedCardNumber) => {
      const { result } = renderHook(() => useCardNumbers());

      React.act(() => {
        result.current.handleCardNumberChange(cardNumberInput as string);
      });

      const { cardNumbers, validationResult } = result.current;

      expect(cardNumbers).toEqual(expectedFormattedCardNumber);
      expect(validationResult.isValid).toBeTruthy();
    }
  );

  const MASTER_CARD_BOUNDARY_VALUE_TEST_CASES = [
    ["5012123412341234", ["5012", "1234", "1234", "1234"]],
    ["5612123412341234", ["5612", "1234", "1234", "1234"]],
  ];

  it.each(MASTER_CARD_BOUNDARY_VALUE_TEST_CASES)(
    "master 카드 브랜드가 아닌 경계값을 입력할 경우, 기본 포매팅 규칙이 적용되어야 한다.",
    (cardNumberInput, expectedFormattedCardNumber) => {
      const { result } = renderHook(() => useCardNumbers());

      React.act(() => {
        result.current.handleCardNumberChange(cardNumberInput as string);
      });

      const { cardNumbers, validationResult } = result.current;

      expect(cardNumbers).toEqual(expectedFormattedCardNumber);
      expect(validationResult.isValid).toBeTruthy();
    }
  );

  const AMEX_CARD_BOUNDARY_VALUE_TEST_CASES = [
    ["3312123412341234", ["3312", "1234", "1234", "1234"]],
    ["3812123412341234", ["3812", "1234", "1234", "1234"]],
  ];

  it.each(AMEX_CARD_BOUNDARY_VALUE_TEST_CASES)(
    "amex 카드 브랜드가 아닌 경계값을 입력할 경우, 기본 포매팅 규칙이 적용되어야 한다.",
    (cardNumberInput, expectedFormattedCardNumber) => {
      const { result } = renderHook(() => useCardNumbers());

      React.act(() => {
        result.current.handleCardNumberChange(cardNumberInput as string);
      });

      const { cardNumbers, validationResult } = result.current;

      expect(cardNumbers).toEqual(expectedFormattedCardNumber);
      expect(validationResult.isValid).toBeTruthy();
    }
  );

  const UNIONPAY_BOUNDARY_VALUE_TEST_CASES = [
    ["6231123412341234", ["6231", "1234", "1234", "1234"]],
    ["6271123412341234", ["6271", "1234", "1234", "1234"]],
    ["6281123412341234", ["6281", "1234", "1234", "1234"]],
    ["6289123412341234", ["6289", "1234", "1234", "1234"]],
    ["6221251212341234", ["6221", "2512", "1234", "1234"]],
    ["6229261212341234", ["6229", "2612", "1234", "1234"]],
  ];

  it.each(UNIONPAY_BOUNDARY_VALUE_TEST_CASES)(
    "unionPay 카드 브랜드가 아닌 경계값을 입력할 경우, 기본 포매팅 규칙이 적용되어야 한다.",
    (cardNumberInput, expectedFormattedCardNumber) => {
      const { result } = renderHook(() => useCardNumbers());

      React.act(() => {
        result.current.handleCardNumberChange(cardNumberInput as string);
      });

      const { cardNumbers, validationResult } = result.current;

      expect(cardNumbers).toEqual(expectedFormattedCardNumber);
      expect(validationResult.isValid).toBeTruthy();
    }
  );

  const INVALID_INPUT_TEST_CASES: [string[], string[], string][] = [
    [["4", "4a"], ["4"], VALIDATION_MESSAGES.onlyNumbersAllowed], // visa - first section input error
    [["41231", "41231a"], ["4123", "1"], VALIDATION_MESSAGES.onlyNumbersAllowed], // visa - second section input error
    [["412312341", "412312341a"], ["4123", "1234", "1"], VALIDATION_MESSAGES.onlyNumbersAllowed], // visa - third section input error
    [["4123123412341", "4123123412341a"], ["4123", "1234", "1234", "1"], VALIDATION_MESSAGES.onlyNumbersAllowed], // visa - fourth section input error
    [["51", "51a"], ["51"], VALIDATION_MESSAGES.onlyNumbersAllowed], // master - first section input error
    [["51231", "51231a"], ["5123", "1"], VALIDATION_MESSAGES.onlyNumbersAllowed], // master - second section input error
    [["512312341", "512312341a"], ["5123", "1234", "1"], VALIDATION_MESSAGES.onlyNumbersAllowed], // master - third section input error
    [["5123123412341", "5123123412341a"], ["5123", "1234", "1234", "1"], VALIDATION_MESSAGES.onlyNumbersAllowed], // master - fourth section input error
    [["36", "36a"], ["36"], VALIDATION_MESSAGES.onlyNumbersAllowed], // diners - first section input error
    [["36121", "36121a"], ["3612", "1"], VALIDATION_MESSAGES.onlyNumbersAllowed], // diners - second section input error
    [["36121234561", "36121234561a"], ["3612", "123456", "1"], VALIDATION_MESSAGES.onlyNumbersAllowed], // diners - third section input error
    [["34", "34a"], ["34"], VALIDATION_MESSAGES.onlyNumbersAllowed], // amex - first section input error
    [["34121", "34121a"], ["3412", "1"], VALIDATION_MESSAGES.onlyNumbersAllowed], // amex - second section input error
    [["34121234561", "34121234561a"], ["3412", "123456", "1"], VALIDATION_MESSAGES.onlyNumbersAllowed], // amex - third section input error,
    [["624", "624a"], ["624"], VALIDATION_MESSAGES.onlyNumbersAllowed], // unionPay - first section input error
    [["62411", "62411a"], ["6241", "1"], VALIDATION_MESSAGES.onlyNumbersAllowed], // unionPay - second section input error
    [["624112341", "624112341a"], ["6241", "1234", "1"], VALIDATION_MESSAGES.onlyNumbersAllowed], // unionPay - third section input error
    [["6241123412341", "6241123412341a"], ["6241", "1234", "1234", "1"], VALIDATION_MESSAGES.onlyNumbersAllowed], // unionPay - fourth section input error
    [["9", "9a"], ["9"], VALIDATION_MESSAGES.onlyNumbersAllowed], // none brand - first section input error
    [["91231", "91231a"], ["9123", "1"], VALIDATION_MESSAGES.onlyNumbersAllowed], // none brand - second section input error
    [["912312341", "9123412341a"], ["9123", "1234", "1"], VALIDATION_MESSAGES.onlyNumbersAllowed], // none brand - third section input error
    [["9123123412341", "9123123412341a"], ["9123", "1234", "1234", "1"], VALIDATION_MESSAGES.onlyNumbersAllowed], // none brand - fourth section input error
  ];

  it.each(INVALID_INPUT_TEST_CASES)(
    "카드 번호 입력칸에 문자를 입력할 경우, 예외가 발생하고 상태 업데이트가 되지 않아야 한다.",
    (cardNumberInputScenario, expectedFormattedCardNumber, expectedErrorText) => {
      const { result } = renderHook(() => useCardNumbers());

      cardNumberInputScenario.forEach((input) => {
        React.act(() => {
          result.current.handleCardNumberChange(input);
        });
      });

      const { cardNumbers, validationResult } = result.current;

      expect(cardNumbers).toEqual(expectedFormattedCardNumber);
      expect(validationResult.isValid).toBeFalsy();
      expect(validationResult.errorText).toBe(expectedErrorText);
    }
  );
});
