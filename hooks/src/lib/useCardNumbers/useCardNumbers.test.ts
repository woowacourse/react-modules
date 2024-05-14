import React from "react";
import { renderHook } from "@testing-library/react";

import useCardNumbers from "./useCardNumbers";

import { CARD_INPUT_RULES, VALIDATION_MESSAGES } from "../constants/card-custom-hook";

describe("useCardNumbers", () => {
  const enterCardNumbers = (cardNumberInputScenario: string[]) => {
    const { result } = renderHook(() => useCardNumbers());

    cardNumberInputScenario.forEach((input) => {
      React.act(() => {
        result.current.handleCardNumberChange(input);
      });
    });

    const { cardNumbers, validationResult } = result.current;

    return { cardNumbers, validationResult };
  };

  describe("초기값 설정", () => {
    it("초기값이 정확히 설정되어야 한다.", () => {
      const EXPECTED_INITIAL_VALUE = [] as string[];

      const { result } = renderHook(() => useCardNumbers());
      const { cardNumbers } = result.current;

      expect(cardNumbers).toEqual(EXPECTED_INITIAL_VALUE);
    });
  });

  describe("카드 번호 포매팅", () => {
    describe("visa", () => {
      it.each([[["4" + "1".repeat(15)], ["4111", "1111", "1111", "1111"]]])(
        "visa 카드 번호가 올바르게 포매팅된다.",
        (cardNumberInputs, expectedFormattedCardNumbers) => {
          const { cardNumbers, validationResult } = enterCardNumbers(cardNumberInputs);

          expect(cardNumbers).toEqual(expectedFormattedCardNumbers);
          expect(validationResult.isValid).toBeTruthy();
        }
      );
    });

    describe("master", () => {
      it.each([
        [["51" + "1".repeat(14)], ["5111", "1111", "1111", "1111"]],
        [["55" + "1".repeat(14)], ["5511", "1111", "1111", "1111"]],
      ])("master 카드 번호가 올바르게 포매팅된다.", (cardNumberInputs, expectedFormattedCardNumbers) => {
        const { cardNumbers, validationResult } = enterCardNumbers(cardNumberInputs);

        expect(cardNumbers).toEqual(expectedFormattedCardNumbers);
        expect(validationResult.isValid).toBeTruthy();
      });
    });

    describe("diners", () => {
      it.each([[["36" + "1".repeat(12)], ["3611", "111111", "1111"]]])(
        "diners 카드 번호가 올바르게 포매팅된다.",
        (cardNumberInputs, expectedFormattedCardNumbers) => {
          const { cardNumbers, validationResult } = enterCardNumbers(cardNumberInputs);

          expect(cardNumbers).toEqual(expectedFormattedCardNumbers);
          expect(validationResult.isValid).toBeTruthy();
        }
      );
    });

    describe("amex", () => {
      it.each([
        [["34" + "1".repeat(13)], ["3411", "111111", "11111"]],
        [["37" + "1".repeat(13)], ["3711", "111111", "11111"]],
      ])("amex 카드 번호가 올바르게 포매팅된다.", (cardNumberInputs, expectedFormattedCardNumbers) => {
        const { cardNumbers, validationResult } = enterCardNumbers(cardNumberInputs);

        expect(cardNumbers).toEqual(expectedFormattedCardNumbers);
        expect(validationResult.isValid).toBeTruthy();
      });
    });

    describe("unionpay", () => {
      it.each([
        [["624" + "1".repeat(13)], ["6241", "1111", "1111", "1111"]],
        [["626" + "1".repeat(13)], ["6261", "1111", "1111", "1111"]],
        [["6282" + "1".repeat(12)], ["6282", "1111", "1111", "1111"]],
        [["6288" + "1".repeat(12)], ["6288", "1111", "1111", "1111"]],
        [["622126" + "1".repeat(10)], ["6221", "2611", "1111", "1111"]],
        [["622925" + "1".repeat(10)], ["6229", "2511", "1111", "1111"]],
      ])("unionpay 카드 번호가 올바르게 포매팅된다.", (cardNumberInputs, expectedFormattedCardNumbers) => {
        const { cardNumbers, validationResult } = enterCardNumbers(cardNumberInputs);

        expect(cardNumbers).toEqual(expectedFormattedCardNumbers);
        expect(validationResult.isValid).toBeTruthy();
      });
    });
  });

  describe("카드 브랜드 포매팅 경계값", () => {
    describe("diners 카드 경계값인 경우", () => {
      it.each([[["35" + "1".repeat(14)], ["3511", "1111", "1111", "1111"]]])(
        "카드 번호가 %s인 경우, 기본 포매팅 규칙이 적용된다.",
        (cardNumberInputs, expectedFormattedCardNumbers) => {
          const { cardNumbers } = enterCardNumbers(cardNumberInputs);

          expect(cardNumbers).toEqual(expectedFormattedCardNumbers);
        }
      );
    });

    describe("amex 카드 경계값인 경우", () => {
      it.each([
        [["33" + "1".repeat(14)], ["3311", "1111", "1111", "1111"]],
        [["38" + "1".repeat(14)], ["3811", "1111", "1111", "1111"]],
      ])("카드 번호가 %s인 경우, 기본 포매팅 규칙이 적용된다.", (cardNumberInputs, expectedFormattedCardNumbers) => {
        const { cardNumbers } = enterCardNumbers(cardNumberInputs);

        expect(cardNumbers).toEqual(expectedFormattedCardNumbers);
      });
    });
  });

  describe("카드 브랜드별 유효성 검증", () => {
    describe("visa", () => {
      it.each([
        [["4", "4a"], ["4"], VALIDATION_MESSAGES.onlyNumbersAllowed],
        [["41111", "41111a"], ["4111", "1"], VALIDATION_MESSAGES.onlyNumbersAllowed],
        [["411111111", "411111111a"], ["4111", "1111", "1"], VALIDATION_MESSAGES.onlyNumbersAllowed],
        [["4111111111111", "4111111111111a"], ["4111", "1111", "1111", "1"], VALIDATION_MESSAGES.onlyNumbersAllowed],
      ])(
        "visa 카드 번호의 각 필드에 문자를 입력할 경우 예외가 발생하고, 문자 입력이 반영되지 않는다.",
        (cardNumberInputScenario, expectedFormattedCardNumber, expectedErrorText) => {
          const { cardNumbers, validationResult } = enterCardNumbers(cardNumberInputScenario);

          expect(cardNumbers).toEqual(expectedFormattedCardNumber);
          expect(validationResult.isValid).toBeFalsy();
          expect(validationResult.errorText).toBe(expectedErrorText);
        }
      );

      it("15자를 입력할 경우, 예외가 발생하고 에러 메시지가 설정된다.", () => {
        const CARD_NUMBER_INPUT = ["411111111111111"];

        const { validationResult } = enterCardNumbers(CARD_NUMBER_INPUT);

        expect(validationResult.isValid).toBeFalsy();
        expect(validationResult.errorText).toBe(CARD_INPUT_RULES.visa.errorText);
      });

      it("17자를 입력할 경우, 입력이 반영되지 않는다", () => {
        const CARD_NUMBER_INPUT = ["4" + "1".repeat(15), "4" + "1".repeat(16)];
        const EXPECTED_FORMATTED_CARD_NUMBERS = ["4111", "1111", "1111", "1111"];

        const { cardNumbers, validationResult } = enterCardNumbers(CARD_NUMBER_INPUT);

        expect(cardNumbers).toEqual(EXPECTED_FORMATTED_CARD_NUMBERS);
        expect(validationResult.isValid).toBeTruthy();
        expect(validationResult.errorText).toBe("");
      });
    });

    describe("master", () => {
      it.each([
        [["51", "51a"], ["51"], VALIDATION_MESSAGES.onlyNumbersAllowed],
        [["51111", "51111a"], ["5111", "1"], VALIDATION_MESSAGES.onlyNumbersAllowed],
        [["511111111", "511111111a"], ["5111", "1111", "1"], VALIDATION_MESSAGES.onlyNumbersAllowed],
        [["5111111111111", "5111111111111a"], ["5111", "1111", "1111", "1"], VALIDATION_MESSAGES.onlyNumbersAllowed],
      ])(
        "master 카드 번호의 각 필드에 문자를 입력할 경우 예외가 발생하고, 문자 입력이 반영되지 않는다.",
        (cardNumberInputScenario, expectedFormattedCardNumber, expectedErrorText) => {
          const { cardNumbers, validationResult } = enterCardNumbers(cardNumberInputScenario);

          expect(cardNumbers).toEqual(expectedFormattedCardNumber);
          expect(validationResult.isValid).toBeFalsy();
          expect(validationResult.errorText).toBe(expectedErrorText);
        }
      );

      it("15자를 입력할 경우, 예외가 발생하고 에러 메시지가 설정된다.", () => {
        const CARD_NUMBER_INPUT = ["5" + "1".repeat(14)];

        const { validationResult } = enterCardNumbers(CARD_NUMBER_INPUT);

        expect(validationResult.isValid).toBeFalsy();
        expect(validationResult.errorText).toBe(CARD_INPUT_RULES.master.errorText);
      });

      it("17자를 입력할 경우, 입력이 반영되지 않는다", () => {
        const CARD_NUMBER_INPUT = ["5" + "1".repeat(15), "5" + "1".repeat(16)];
        const EXPECTED_FORMATTED_CARD_NUMBERS = ["5111", "1111", "1111", "1111"];

        const { cardNumbers, validationResult } = enterCardNumbers(CARD_NUMBER_INPUT);

        expect(cardNumbers).toEqual(EXPECTED_FORMATTED_CARD_NUMBERS);
        expect(validationResult.isValid).toBeTruthy();
        expect(validationResult.errorText).toBe("");
      });
    });

    describe("diners", () => {
      it.each([
        [["36", "36a"], ["36"], VALIDATION_MESSAGES.onlyNumbersAllowed],
        [["36111", "36111a"], ["3611", "1"], VALIDATION_MESSAGES.onlyNumbersAllowed],
        [["36111111111", "36111111111a"], ["3611", "111111", "1"], VALIDATION_MESSAGES.onlyNumbersAllowed],
      ])(
        "diners 카드 번호의 각 필드에 문자를 입력할 경우 예외가 발생하고, 문자 입력이 반영되지 않는다.",
        (cardNumberInputScenario, expectedFormattedCardNumber, expectedErrorText) => {
          const { cardNumbers, validationResult } = enterCardNumbers(cardNumberInputScenario);

          expect(cardNumbers).toEqual(expectedFormattedCardNumber);
          expect(validationResult.isValid).toBeFalsy();
          expect(validationResult.errorText).toBe(expectedErrorText);
        }
      );

      it("13자를 입력할 경우, 예외가 발생하고 에러 메시지가 설정된다.", () => {
        const CARD_NUMBER_INPUT = ["36" + "1".repeat(11)];

        const { validationResult } = enterCardNumbers(CARD_NUMBER_INPUT);

        expect(validationResult.isValid).toBeFalsy();
        expect(validationResult.errorText).toBe(CARD_INPUT_RULES.diners.errorText);
      });

      it("15자를 입력할 경우, 입력이 반영되지 않는다", () => {
        const CARD_NUMBER_INPUT = ["36" + "1".repeat(12), "36" + "1".repeat(13)];
        const EXPECTED_FORMATTED_CARD_NUMBERS = ["3611", "111111", "1111"];

        const { cardNumbers, validationResult } = enterCardNumbers(CARD_NUMBER_INPUT);

        expect(cardNumbers).toEqual(EXPECTED_FORMATTED_CARD_NUMBERS);
        expect(validationResult.isValid).toBeTruthy();
        expect(validationResult.errorText).toBe("");
      });
    });

    describe("amex", () => {
      it.each([
        [["34", "34a"], ["34"], VALIDATION_MESSAGES.onlyNumbersAllowed],
        [["34111", "34111a"], ["3411", "1"], VALIDATION_MESSAGES.onlyNumbersAllowed],
        [["34111111111", "34111111111a"], ["3411", "111111", "1"], VALIDATION_MESSAGES.onlyNumbersAllowed],
      ])(
        "amex 카드 번호의 각 필드에 문자를 입력할 경우 예외가 발생하고, 문자 입력이 반영되지 않는다.",
        (cardNumberInputScenario, expectedFormattedCardNumber, expectedErrorText) => {
          const { cardNumbers, validationResult } = enterCardNumbers(cardNumberInputScenario);

          expect(cardNumbers).toEqual(expectedFormattedCardNumber);
          expect(validationResult.isValid).toBeFalsy();
          expect(validationResult.errorText).toBe(expectedErrorText);
        }
      );

      it("14자를 입력할 경우, 예외가 발생하고 에러 메시지가 설정된다.", () => {
        const CARD_NUMBER_INPUT = ["34" + "1".repeat(12)];

        const { validationResult } = enterCardNumbers(CARD_NUMBER_INPUT);

        expect(validationResult.isValid).toBeFalsy();
        expect(validationResult.errorText).toBe(CARD_INPUT_RULES.amex.errorText);
      });

      it("16자를 입력할 경우, 입력이 반영되지 않는다", () => {
        const CARD_NUMBER_INPUT = ["34" + "1".repeat(13), "34" + "1".repeat(14)];
        const EXPECTED_FORMATTED_CARD_NUMBERS = ["3411", "111111", "11111"];

        const { cardNumbers, validationResult } = enterCardNumbers(CARD_NUMBER_INPUT);

        expect(cardNumbers).toEqual(EXPECTED_FORMATTED_CARD_NUMBERS);
        expect(validationResult.isValid).toBeTruthy();
        expect(validationResult.errorText).toBe("");
      });
    });

    describe("unionpay", () => {
      it.each([
        [["624", "624a"], ["624"], VALIDATION_MESSAGES.onlyNumbersAllowed],
        [["62411", "62411a"], ["6241", "1"], VALIDATION_MESSAGES.onlyNumbersAllowed],
        [["624111111", "624111111a"], ["6241", "1111", "1"], VALIDATION_MESSAGES.onlyNumbersAllowed],
        [["6241111111111", "6241111111111a"], ["6241", "1111", "1111", "1"], VALIDATION_MESSAGES.onlyNumbersAllowed],
      ])(
        "amex 카드 번호의 각 필드에 문자를 입력할 경우 예외가 발생하고, 문자 입력이 반영되지 않는다.",
        (cardNumberInputScenario, expectedFormattedCardNumber, expectedErrorText) => {
          const { cardNumbers, validationResult } = enterCardNumbers(cardNumberInputScenario);

          expect(cardNumbers).toEqual(expectedFormattedCardNumber);
          expect(validationResult.isValid).toBeFalsy();
          expect(validationResult.errorText).toBe(expectedErrorText);
        }
      );

      it("15자를 입력할 경우, 예외가 발생하고 에러 메시지가 설정된다.", () => {
        const CARD_NUMBER_INPUT = ["624" + "1".repeat(12)];

        const { validationResult } = enterCardNumbers(CARD_NUMBER_INPUT);

        expect(validationResult.isValid).toBeFalsy();
        expect(validationResult.errorText).toBe(CARD_INPUT_RULES.unionPay.errorText);
      });

      it("17자를 입력할 경우, 입력이 반영되지 않는다", () => {
        const CARD_NUMBER_INPUT = ["624" + "1".repeat(13), "624" + "1".repeat(14)];
        const EXPECTED_FORMATTED_CARD_NUMBERS = ["6241", "1111", "1111", "1111"];

        const { cardNumbers, validationResult } = enterCardNumbers(CARD_NUMBER_INPUT);

        expect(cardNumbers).toEqual(EXPECTED_FORMATTED_CARD_NUMBERS);
        expect(validationResult.isValid).toBeTruthy();
        expect(validationResult.errorText).toBe("");
      });
    });
  });
});
