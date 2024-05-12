import { renderHook } from "@testing-library/react";

import React from "react";

import useCardNumber from "./useCardNumber";

import { CardNumberFormatType } from "./useCardNumberFormat";

describe("useCardNumber 커스텀 훅 동작 테스트", () => {
  it("초기값이 정확히 설정된다.", () => {
    const EXPECTED_INITIAL_VALUE = "";

    const { result } = renderHook(() => useCardNumber());
    const { cardNumber } = result.current;

    expect(cardNumber).toEqual(EXPECTED_INITIAL_VALUE);
  });

  const VALID_INPUT_LENGTH_TEST_CASE = [
    ["Diners", "14", "36123456789012"],
    ["AMEX", "15", "341234567890123"],
    ["AMEX", "15", "371234567890123"],
    [
      "나머지 카드 브랜드(UnionPay, Visa, MasterCard 등)",
      "16",
      "1234567890123456",
    ],
  ];

  it.each(VALID_INPUT_LENGTH_TEST_CASE)(
    "%s에 입력하는 값이 %s글자인 경우, 예외없이 해당 필드에 정확히 입력된다",
    (_, _2, validInput) => {
      const { result } = renderHook(() => useCardNumber());

      React.act(() => {
        result.current.handleCardNumberChange({
          target: {
            value: validInput,
          },
        } as React.ChangeEvent<HTMLInputElement>);
      });

      expect(result.current.cardNumber).toBe(validInput);
      expect(result.current.errorState).toBe(false);
    }
  );

  const INVALID_INPUT_LENGTH_TEST_CASE = [
    ["Diners", "14", "36"],
    ["Diners", "14", "3612345678901"],
    ["AMEX", "15", "34"],
    ["AMEX", "15", "34123456789012"],
    ["AMEX", "15", "37"],
    ["AMEX", "15", "37123456789012"],
    ["나머지 카드 브랜드(UnionPay, Visa, MasterCard 등)", "16", "1"],
    [
      "나머지 카드 브랜드(UnionPay, Visa, MasterCard 등)",
      "16",
      "123456789012345",
    ],
  ];

  it.each(INVALID_INPUT_LENGTH_TEST_CASE)(
    "%s에 입력하는 값이 %s글자이지 않을 경우, 해당 입력 필드에 예외가 발생한다.",
    (_, _2, invalidValue) => {
      const { result } = renderHook(() => useCardNumber());

      React.act(() => {
        result.current.handleCardNumberChange({
          target: {
            value: invalidValue,
          },
        } as React.ChangeEvent<HTMLInputElement>);
      });

      expect(result.current.cardNumber).toBe(invalidValue);
      expect(result.current.errorState).toBe(true);
    }
  );

  const INVALID_CHARACTER_INPUT_TEST_CASE = [
    [["1", "1a"], "1"],
    [
      ["1", "12", "123", "1234", "12345", "1234567", "12345678", "12345678a"],
      "12345678",
    ],
    [
      [
        "1",
        "12",
        "123",
        "1234",
        "12345",
        "123456",
        "1234567",
        "12345678",
        "123456789",
        "1234567890",
        "12345678901",
        "123456789012",
        "1234567890123",
        "12345678901234",
        "123456789012345",
        "1234567890123456",
        "1234567890123456a",
      ],
      "1234567890123456",
    ],
  ];

  it.each(INVALID_CHARACTER_INPUT_TEST_CASE)(
    "필드 입력값에 문자가 있을 경우, 상태 업데이트가 발생하지 않고 해당 입력 필드에 예외가 발생해야한다.",
    (inputScenario, expectedResult) => {
      const { result } = renderHook(() => useCardNumber());

      React.act(() => {
        if (inputScenario instanceof Array) {
          inputScenario.forEach((inputValue) => {
            result.current.handleCardNumberChange({
              target: {
                value: inputValue,
              },
            } as React.ChangeEvent<HTMLInputElement>);
          });
        }
      });

      expect(result.current.cardNumber).toBe(expectedResult);
      expect(result.current.errorState).toBe(true);
    }
  );

  const CARD_FORMAT_TEST_CASE = [
    [
      "Diners",
      "4-6-4",
      "36123456789012",
      {
        first: "3612",
        second: "345678",
        third: "9012",
        fourth: "",
      } as CardNumberFormatType,
    ],
    [
      "AMEX",
      "4-6-5",
      "341234567890123",
      {
        first: "3412",
        second: "345678",
        third: "90123",
        fourth: "",
      } as CardNumberFormatType,
    ],
    [
      "AMEX",
      "4-6-5",
      "371234567890123",
      {
        first: "3712",
        second: "345678",
        third: "90123",
        fourth: "",
      } as CardNumberFormatType,
    ],
    [
      "나머지 카드 브랜드(UnionPay, Visa, MasterCard 등)",
      "4-4-4-4",
      "1234567890123456",
      {
        first: "1234",
        second: "5678",
        third: "9012",
        fourth: "3456",
      } as CardNumberFormatType,
    ],
  ];

  it.each(CARD_FORMAT_TEST_CASE)(
    "%s의 경우, 입력값을 %s 형태로 포멧팅 한다.",
    (_, _2, validValue, expectedResult) => {
      const { result } = renderHook(() => useCardNumber());

      React.act(() => {
        result.current.handleCardNumberChange({
          target: {
            value: validValue,
          },
        } as React.ChangeEvent<HTMLInputElement>);
      });

      expect(result.current.cardNumberFormat).toEqual(expectedResult);
    }
  );

  const CARD_BRAND_TEST_CASE = [
    ["36", "Diners", "36123456789012"],
    ["34", "AMEX", "341234567890123"],
    ["37", "AMEX", "371234567890123"],
    ["4", "Visa", "4123456789012345"],
    ["51~55", "MasterCard", "5112345678901234"],
    ["51~55", "MasterCard", "5512345678901234"],
    ["624~626", "UnionPay", "6241234567890123"],
    ["624~626", "UnionPay", "6261234567890123"],
    ["6282~6288", "UnionPay", "6282123456789012"],
    ["6282~6288", "UnionPay", "6288123456789012"],
    ["622126~622925", "UnionPay", "6221261234567890"],
    ["622126~622925", "UnionPay", "6229251234567890"],
    ["그 외 카드번호", "", "1234567890123456"],
  ];

  it.each(CARD_BRAND_TEST_CASE)(
    "입력값이 %s(으)로 시작하는 경우 카드 브랜드는 %s 이다.",
    (_, cardBrand, cardNumber) => {
      const { result } = renderHook(() => useCardNumber());

      React.act(() => {
        result.current.handleCardNumberChange({
          target: {
            value: cardNumber,
          },
        } as React.ChangeEvent<HTMLInputElement>);
      });

      expect(result.current.cardBrand).toEqual(cardBrand);
    }
  );
});
