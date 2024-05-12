import { renderHook } from "@testing-library/react";
import { ChangeEvent, act } from "react";
import useCardNumbers from "./useCardNumbers";
import getCardFormat from "../utils/getCardFormat";

describe("useCardNumbers", () => {
  describe("유효성 검사", () => {
    it.each(["soosoo", "현수연", "26살", "^,^~"])(
      "숫자가 아닌 값(%s)을 입력하면 에러 상태가 true가 된다.",
      (userInput) => {
        // const userInput = "soosoo";
        const { result } = renderHook(() => useCardNumbers());
        act(() => {
          result.current.cardNumbers.onChange({
            target: { value: userInput },
          } as ChangeEvent<HTMLInputElement>);
        });

        expect(result.current.cardNumbers.error.state).toBeTruthy();
      }
    );
  });

  describe("카드 브랜드 식별", () => {
    it.each(["456", "411111"])(
      "카드번호(%s)가 4로 시작하는 경우 카드 브랜드를 visa로 설정한다.",
      (userInput) => {
        const VISA = "visa";
        const { result } = renderHook(() => useCardNumbers());

        act(() => {
          result.current.cardNumbers.onChange({
            target: { value: userInput },
          } as ChangeEvent<HTMLInputElement>);
        });

        expect(result.current.cardBrand).toBe(VISA);
      }
    );

    it.each(["51000", "52000", "53000", "54000", "55000"])(
      "카드번호(%s)가 51~55로 시작하는 경우 카드 브랜드를 mastercard로 설정한다.",
      (userInput) => {
        const MASTERCARD = "mastercard";
        const { result } = renderHook(() => useCardNumbers());

        act(() => {
          result.current.cardNumbers.onChange({
            target: { value: userInput },
          } as ChangeEvent<HTMLInputElement>);
        });

        expect(result.current.cardBrand).toBe(MASTERCARD);
      }
    );

    it.each(["36", "3600000"])(
      "카드번호(%s)가 36으로 시작하는 경우 카드 브랜드를 Diners 설정한다.",
      (userInput) => {
        const DINERS = "diners";
        const { result } = renderHook(() => useCardNumbers());

        act(() => {
          result.current.cardNumbers.onChange({
            target: { value: userInput },
          } as ChangeEvent<HTMLInputElement>);
        });

        expect(result.current.cardBrand).toBe(DINERS);
      }
    );

    it.each(["3444444", "37"])(
      "카드번호(%s)가 34, 37로 시작하는 경우 카드 브랜드를 AMEX 설정한다.",
      (userInput) => {
        const AMEX = "amex";
        const { result } = renderHook(() => useCardNumbers());

        act(() => {
          result.current.cardNumbers.onChange({
            target: { value: userInput },
          } as ChangeEvent<HTMLInputElement>);
        });

        expect(result.current.cardBrand).toBe(AMEX);
      }
    );

    it.each(["622126111", "622925111", "624111111", "626111111", "628211111", "628811111"])(
      "카드번호(%s)가 622126~622925, 624~626, 6282~6288로 시작하는 경우 카드 브랜드를 UnionPay로 설정한다.",
      (userInput) => {
        const UNIONPAY = "unionpay";
        const { result } = renderHook(() => useCardNumbers());

        act(() => {
          result.current.cardNumbers.onChange({
            target: { value: userInput },
          } as ChangeEvent<HTMLInputElement>);
        });

        expect(result.current.cardBrand).toBe(UNIONPAY);
      }
    );
  });

  describe("카드 번호 포맷팅", () => {
    it("visa 카드일 경우, 입력된 카드 번호를 visa 규칙에 맞게 포맷하여 표시한다.", () => {
      const cardNumber = "4444333322221111";
      const formattedCardNumber = "4444 3333 2222 1111";
      // const { result } = renderHook(() => useCardNumbers());

      // act(() => {
      //   result.current.cardNumbers.onChange({
      //     target: { value: userInput },
      //   } as ChangeEvent<HTMLInputElement>);
      // });

      const formattedInput = getCardFormat(cardNumber, "visa");

      expect(formattedInput).toBe(formattedCardNumber);
    });

    it("mastercard 카드일 경우, 입력된 카드 번호를 mastercard 규칙에 맞게 포맷하여 표시한다.", () => {
      const cardNumber = "5555444433332222";
      const formattedCardNumber = "5555 4444 3333 2222";

      const formattedInput = getCardFormat(cardNumber, "mastercard");

      expect(formattedInput).toBe(formattedCardNumber);
    });

    it("diners 카드일 경우, 입력된 카드 번호를 diners 규칙에 맞게 포맷하여 표시한다.", () => {
      const cardNumber = "36123456789012";
      const formattedCardNumber = "3612 345678 9012";

      const formattedInput = getCardFormat(cardNumber, "diners");

      expect(formattedInput).toBe(formattedCardNumber);
    });

    it("amex 카드일 경우, 입력된 카드 번호를 amex 규칙에 맞게 포맷하여 표시한다.", () => {
      const cardNumber = "371234567890123";
      const formattedCardNumber = "3712 345678 90123";

      const formattedInput = getCardFormat(cardNumber, "amex");

      expect(formattedInput).toBe(formattedCardNumber);
    });

    it("unionpay 카드일 경우, 입력된 카드 번호를 unionpay 규칙에 맞게 포맷하여 표시한다.", () => {
      const cardNumber = "6221261234567890";
      const formattedCardNumber = "6221 2612 3456 7890";

      const formattedInput = getCardFormat(cardNumber, "unionpay");

      expect(formattedInput).toBe(formattedCardNumber);
    });
  });
});
