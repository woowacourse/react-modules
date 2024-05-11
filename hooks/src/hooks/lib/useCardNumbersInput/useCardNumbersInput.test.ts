import React from "react";
import { renderHook } from "@testing-library/react";
import useCardNumbersInput from "./useCardNumbersInput";
import ERROR_MESSAGE from "../constants/errorMessage";
import CARD_BRAND from "../constants/cardBrand";

describe("useCardNumbersInput", () => {
  describe("VISA 카드 테스트", () => {
    it("카드 패턴이 유효한 경우, 카드 브랜드가 정확히 인식되어야 한다.", () => {
      const { result } = renderHook(() => useCardNumbersInput());
      const validNumber = "4";
      React.act(() => {
        result.current.handleCardNumbersChange({ target: { value: validNumber } } as React.ChangeEvent<HTMLInputElement>);
      });
      expect(result.current.CardNumbersState.cardBrand).toBe("VISA");
    });

    it("카드 번호의 길이가 맞지 않을 경우, 오류 메시지가 반환한다.", () => {
      const { result } = renderHook(() => useCardNumbersInput());
      const invalidLengthNumber = "4444 4444 444";
      React.act(() => {
        result.current.handleCardNumbersChange({ target: { value: invalidLengthNumber } } as React.ChangeEvent<HTMLInputElement>);
      });
      expect(result.current.CardNumbersState.isValid).toBe(false);
      expect(result.current.CardNumbersState.errorMessage).toBe(ERROR_MESSAGE.INVALID_CARD_NUMBER_LENGTH(CARD_BRAND.VISA.name, CARD_BRAND.VISA.matchedLength));
    });

    it("유효한 카드 번호를 입력했을 때 올바르게 유효성을 검사해야 한다.", () => {
      const { result } = renderHook(() => useCardNumbersInput());
      const validNumber = "4444 4444 4444 4444";
      React.act(() => {
        result.current.handleCardNumbersChange({ target: { value: validNumber } } as React.ChangeEvent<HTMLInputElement>);
      });
      expect(result.current.CardNumbersState.isValid).toBe(true);
      expect(result.current.CardNumbersState.errorMessage).toBe("");
    });
  });
  describe("MASTER_CARD 테스트", () => {
    it.each(["51", "52", "53", "54", "55"])("카드 패턴이 유효한 경우, 카드 브랜드가 정확히 인식되어야 한다.", (validNumber) => {
      const { result } = renderHook(() => useCardNumbersInput());
      React.act(() => {
        result.current.handleCardNumbersChange({ target: { value: validNumber } } as React.ChangeEvent<HTMLInputElement>);
      });
      expect(result.current.CardNumbersState.cardBrand).toBe("MASTER_CARD");
    });

    it("카드 번호의 길이가 맞지 않을 경우, 오류 메시지가 반환한다.", () => {
      const { result } = renderHook(() => useCardNumbersInput());
      const invalidLengthNumber = "5555 5555 555";
      React.act(() => {
        result.current.handleCardNumbersChange({ target: { value: invalidLengthNumber } } as React.ChangeEvent<HTMLInputElement>);
      });
      expect(result.current.CardNumbersState.isValid).toBe(false);
      expect(result.current.CardNumbersState.errorMessage).toBe(ERROR_MESSAGE.INVALID_CARD_NUMBER_LENGTH(CARD_BRAND.MASTER_CARD.name, CARD_BRAND.MASTER_CARD.matchedLength));
    });

    it("유효한 카드 번호를 입력했을 때 올바르게 유효성을 검사해야 한다.", () => {
      const { result } = renderHook(() => useCardNumbersInput());
      const validNumber = "5555 5555 5555 4444";
      React.act(() => {
        result.current.handleCardNumbersChange({ target: { value: validNumber } } as React.ChangeEvent<HTMLInputElement>);
      });
      expect(result.current.CardNumbersState.isValid).toBe(true);
      expect(result.current.CardNumbersState.errorMessage).toBe("");
    });
  });

  describe("DINERS 테스트", () => {
    it("카드 패턴이 유효한 경우, 카드 브랜드가 정확히 인식되어야 한다.", () => {
      const { result } = renderHook(() => useCardNumbersInput());
      const validNumber = "36";
      React.act(() => {
        result.current.handleCardNumbersChange({ target: { value: validNumber } } as React.ChangeEvent<HTMLInputElement>);
      });
      expect(result.current.CardNumbersState.cardBrand).toBe("DINERS");
    });

    it("카드 번호의 길이가 맞지 않을 경우, 오류 메시지가 반환한다.", () => {
      const { result } = renderHook(() => useCardNumbersInput());
      const invalidLengthNumber = "3636 3636 36";
      React.act(() => {
        result.current.handleCardNumbersChange({ target: { value: invalidLengthNumber } } as React.ChangeEvent<HTMLInputElement>);
      });
      expect(result.current.CardNumbersState.isValid).toBe(false);
      expect(result.current.CardNumbersState.errorMessage).toBe(ERROR_MESSAGE.INVALID_CARD_NUMBER_LENGTH(CARD_BRAND.DINERS.name, CARD_BRAND.DINERS.matchedLength));
    });

    it("유효한 카드 번호를 입력했을 때 올바르게 유효성을 검사해야 한다.", () => {
      const { result } = renderHook(() => useCardNumbersInput());
      const validNumber = "3636 363636 3636";
      React.act(() => {
        result.current.handleCardNumbersChange({ target: { value: validNumber } } as React.ChangeEvent<HTMLInputElement>);
      });
      expect(result.current.CardNumbersState.isValid).toBe(true);
      expect(result.current.CardNumbersState.errorMessage).toBe("");
    });
  });
  describe("AMEX 테스트", () => {
    it.each(["34", "37"])("카드 패턴이 유효한 경우, 카드 브랜드가 정확히 인식되어야 한다.", (validNumber) => {
      const { result } = renderHook(() => useCardNumbersInput());
      React.act(() => {
        result.current.handleCardNumbersChange({ target: { value: validNumber } } as React.ChangeEvent<HTMLInputElement>);
      });
      expect(result.current.CardNumbersState.cardBrand).toBe("AMEX");
    });

    it("카드 번호의 길이가 맞지 않을 경우, 오류 메시지가 반환한다.", () => {
      const { result } = renderHook(() => useCardNumbersInput());
      const invalidLengthNumber = "3434 343434 343";
      React.act(() => {
        result.current.handleCardNumbersChange({ target: { value: invalidLengthNumber } } as React.ChangeEvent<HTMLInputElement>);
      });
      expect(result.current.CardNumbersState.isValid).toBe(false);
      expect(result.current.CardNumbersState.errorMessage).toBe(ERROR_MESSAGE.INVALID_CARD_NUMBER_LENGTH(CARD_BRAND.AMEX.name, CARD_BRAND.AMEX.matchedLength));
    });

    it("유효한 카드 번호를 입력했을 때 올바르게 유효성을 검사해야 한다.", () => {
      const { result } = renderHook(() => useCardNumbersInput());
      const validNumber = "3434 343434 34343";
      React.act(() => {
        result.current.handleCardNumbersChange({ target: { value: validNumber } } as React.ChangeEvent<HTMLInputElement>);
      });
      expect(result.current.CardNumbersState.isValid).toBe(true);
      expect(result.current.CardNumbersState.errorMessage).toBe("");
    });
  });

  describe("UNION_PAY 테스트", () => {
    it.each(["622126", "622925", "624", "625", "626", "6282", "6288"])("카드 패턴이 유효한 경우, 카드 브랜드가 정확히 인식되어야 한다.", (validNumber) => {
      const { result } = renderHook(() => useCardNumbersInput());
      React.act(() => {
        result.current.handleCardNumbersChange({ target: { value: validNumber } } as React.ChangeEvent<HTMLInputElement>);
      });
      expect(result.current.CardNumbersState.cardBrand).toBe("UNION_PAY");
    });

    it("카드 번호의 길이가 맞지 않을 경우, 오류 메시지가 반환한다.", () => {
      const { result } = renderHook(() => useCardNumbersInput());
      const invalidLengthNumber = "622126 622126 622";
      React.act(() => {
        result.current.handleCardNumbersChange({ target: { value: invalidLengthNumber } } as React.ChangeEvent<HTMLInputElement>);
      });
      expect(result.current.CardNumbersState.isValid).toBe(false);
      expect(result.current.CardNumbersState.errorMessage).toBe(ERROR_MESSAGE.INVALID_CARD_NUMBER_LENGTH(CARD_BRAND.UNION_PAY.name, CARD_BRAND.UNION_PAY.matchedLength));
    });

    it("유효한 카드 번호를 입력했을 때 올바르게 유효성을 검사해야 한다.", () => {
      const { result } = renderHook(() => useCardNumbersInput());
      const validNumber = "622126 622126 6221";
      React.act(() => {
        result.current.handleCardNumbersChange({ target: { value: validNumber } } as React.ChangeEvent<HTMLInputElement>);
      });
      expect(result.current.CardNumbersState.isValid).toBe(true);
      expect(result.current.CardNumbersState.errorMessage).toBe("");
    });
  });
});
