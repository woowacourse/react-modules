import { renderHook } from "@testing-library/react";
import { act } from "react";

describe("useCardTypeValidation", () => {
  describe("Visa 카드", () => {
    it("카드 번호가 4로 시작하면 'visa'를 반환한다", async () => {
      const cardNumberValue = "4444";

      const { result } = renderHook(() => useCardTypeValidation());

      act(() => {
        result.current.handleCardType(cardNumberValue);
      });

      expect(result.current.cardType).toBe("VISA");
    });
  });

  describe("Master 카드", () => {
    test.each([
      "5111111111111111",
      "5211111111111111",
      "5311111111111111",
      "5411111111111111",
      "5511111111111111",
    ])(
      '카드 번호가 51 ~ 55로 시작하면 "MASTER"를 반환한다',
      (cardNumberValue) => {
        const { result } = renderHook(() => useCardTypeValidation());

        act(() => {
          result.current.handleCardType(cardNumberValue);
        });

        expect(result.current.cardType).toBe("MASTER");
      }
    );
  });

  describe("Diners 카드", () => {
    it("카드 번호가 36로 시작하면 'DINERS'를 반환한다", async () => {
      const cardNumberValue = "3636";

      const { result } = renderHook(() => useCardTypeValidation());

      act(() => {
        result.current.handleCardType(cardNumberValue);
      });

      expect(result.current.cardType).toBe("DINERS");
    });
  });

  describe("Amex 카드", () => {
    test.each(["3411111111111", "3711111111111"])(
      '카드 번호가 34, 37로 시작하면 "AMEX"를 반환한다',
      (cardNumberValue) => {
        const { result } = renderHook(() => useCardTypeValidation());

        act(() => {
          result.current.handleCardType(cardNumberValue);
        });

        expect(result.current.cardType).toBe("AMEX");
      }
    );
  });

  describe("Union Pay 카드", () => {
    test.each(["62212611111111", "62212711111111", "6229251111111"])(
      '카드 번호가 622126 ~ 622925로 시작하면 "UNION_PAY"를 반환한다',
      (cardNumberValue) => {
        const { result } = renderHook(() => useCardTypeValidation());

        act(() => {
          result.current.handleCardType(cardNumberValue);
        });

        expect(result.current.cardType).toBe("UNION_PAY");
      }
    );

    test.each(["62411111111111", "62511111111111", "6261111111111"])(
      '카드 번호가 624 ~ 626 으로 시작하면 "UNION_PAY"를 반환한다',
      (cardNumberValue) => {
        const { result } = renderHook(() => useCardTypeValidation());

        act(() => {
          result.current.handleCardType(cardNumberValue);
        });

        expect(result.current.cardType).toBe("UNION_PAY");
      }
    );

    test.each(["62821111111111", "6283111111111", "6288111111111"])(
      '카드 번호가 6282 ~ 6288 으로 시작하면 "UNION_PAY"를 반환한다',
      (cardNumberValue) => {
        const { result } = renderHook(() => useCardTypeValidation());

        act(() => {
          result.current.handleCardType(cardNumberValue);
        });

        expect(result.current.cardType).toBe("UNION_PAY");
      }
    );
  });

  it("그 이외의 숫자가 올 시 'EMPTY' 를 반환한다. ", async () => {
    const cardNumberValue = "111111111111";

    const { result } = renderHook(() => useCardTypeValidation());

    act(() => {
      result.current.handleCardType(cardNumberValue);
    });

    expect(result.current.cardType).toBe("EMPTY");
  });
});
