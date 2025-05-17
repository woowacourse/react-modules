import "@testing-library/jest-dom";
import { renderHook, act } from "@testing-library/react";
import useCardNumber from "./useCardNumber";

const changeCardNumber = (
  result: { current: ReturnType<typeof useCardNumber> },
  rerender: () => void,
  value: string
) => {
  act(() => {
    result.current.handleCardNumberChange({
      target: { value },
    } as React.ChangeEvent<HTMLInputElement>);
  });
  rerender();
};

describe("useCardNumber 테스트", () => {
  describe("초기 상태", () => {
    const { result } = renderHook(() => useCardNumber());
    test("cardNumber 값이 초기화 되어 있어야 한다.", () => {
      expect(result.current.cardNumber).toBe("");
    });

    test("errorMessage 값이 초기화 되어 있어야 한다.", () => {
      expect(result.current.errorMessage).toBe("");
    });

    test("isValid가 true여야 한다.", () => {
      expect(result.current.isValid).toBeTruthy();
    });
  });

  describe("입력 처리", () => {
    test("숫자 입력 시 cardNumber 상태 값에 반영된다.", () => {
      const { result, rerender } = renderHook(() => useCardNumber());
      changeCardNumber(result, rerender, "411111111111");

      expect(result.current.cardNumber).toBe("411111111111");
    });

    test("문자 입력 시 cardNumber 상태 값에 반영되지 않는다.", () => {
      const { result, rerender } = renderHook(() => useCardNumber());
      changeCardNumber(result, rerender, "안녕");

      expect(result.current.cardNumber).toBe("");
    });

    test("최대 길이를 초과한 값을 입력시 cardNumber 상태 값에 반영되지 않는다.", () => {
      const { result, rerender } = renderHook(() => useCardNumber());
      changeCardNumber(result, rerender, "4111111111111111");
      changeCardNumber(result, rerender, "41111111111111111");

      expect(result.current.cardNumber).toBe("4111111111111111");
    });
  });

  describe("브랜드 식별", () => {
    test("cardNumber가 4로 시작할 경우 Visa를 반환한다.", () => {
      const { result, rerender } = renderHook(() => useCardNumber());

      changeCardNumber(result, rerender, "4");

      expect(result.current.cardBrand()).toBe("Visa");
    });

    test.each([["51"], ["5311"], ["55111111"]])(
      "cardNumber 첫 두 자리가 51~55인 경우 MasterCard를 반환한다.",
      (cardNumber) => {
        const { result, rerender } = renderHook(() => useCardNumber());

        changeCardNumber(result, rerender, cardNumber);

        expect(result.current.cardBrand()).toBe("MasterCard");
      }
    );

    test.each([["36"], ["3611"]])(
      "cardNumber가 36으로 시작하면 Diners를 반환한다.",
      (cardNumber) => {
        const { result, rerender } = renderHook(() => useCardNumber());

        changeCardNumber(result, rerender, cardNumber);

        expect(result.current.cardBrand()).toBe("Diners");
      }
    );

    test.each([["34"], ["37"]])(
      "cardNumber가 34/37으로 시작하면 Amex를 반환한다.",
      (cardNumber) => {
        const { result, rerender } = renderHook(() => useCardNumber());

        changeCardNumber(result, rerender, cardNumber);

        expect(result.current.cardBrand()).toBe("Amex");
      }
    );

    test.each([
      ["622126"],
      ["622127"],
      ["622925"],
      ["624"],
      ["625"],
      ["626"],
      ["6282"],
      ["6283"],
      ["6288"],
    ])(
      "cardNumber가 622126~622925/624~626/6282~6288으로 시작하면 Amex를 반환한다.",
      (cardNumber) => {
        const { result, rerender } = renderHook(() => useCardNumber());

        changeCardNumber(result, rerender, cardNumber);

        expect(result.current.cardBrand()).toBe("UnionPay");
      }
    );

    test.each([["1234"], ["5678"]])(
      "조건에 맞는 카드사가 없을 경우 none을 반환한다.",
      (cardNumber) => {
        const { result, rerender } = renderHook(() => useCardNumber());

        changeCardNumber(result, rerender, cardNumber);

        expect(result.current.cardBrand()).toBe("none");
      }
    );
  });

  describe("유효성 검증", () => {
    describe("유효한 값 입력", () => {
      test.each([["4111111111111111"], ["5411111111111111"]])(
        "visa/masterCard 카드는 16자리인 경우 에러가 발생하지 않는다.",
        (cardNumber) => {
          const { result, rerender } = renderHook(() => useCardNumber());

          changeCardNumber(result, rerender, cardNumber);

          expect(result.current.isValid).toBeTruthy();
        }
      );

      test.each([["36111111111111"], ["36211111111111"]])(
        "diners 카드는 14자리인 경우 에러가 발생하지 않는다.",
        (cardNumber) => {
          const { result, rerender } = renderHook(() => useCardNumber());

          changeCardNumber(result, rerender, cardNumber);

          expect(result.current.isValid).toBeTruthy();
        }
      );

      test.each([["341111111111111"], ["371111111111111"]])(
        "amex 카드는 15자리인 경우 에러가 발생하지 않는다.",
        (cardNumber) => {
          const { result, rerender } = renderHook(() => useCardNumber());

          changeCardNumber(result, rerender, cardNumber);

          expect(result.current.isValid).toBeTruthy();
        }
      );

      test.each([["6288111111111111"], ["6221281111111111"]])(
        "unionPay 카드는 16자리인 경우 에러가 발생하지 않는다.",
        (cardNumber) => {
          const { result, rerender } = renderHook(() => useCardNumber());

          changeCardNumber(result, rerender, cardNumber);

          expect(result.current.isValid).toBeTruthy();
        }
      );

      test.each([["111111111111111111"], ["111"]])(
        "카드사가 none인 경우 자릿수에 따른 에러가 발생하지 않는다.",
        (cardNumber) => {
          const { result, rerender } = renderHook(() => useCardNumber());

          changeCardNumber(result, rerender, cardNumber);

          expect(result.current.isValid).toBeTruthy();
        }
      );
    });

    describe("유효하지 않는 값 입력", () => {
      test.each([["411111111111111"], ["51111111111111"], ["551111111111"]])(
        "visa/master 카드는 16자리 미만인 경우 에러가 발생한다.",
        (cardNumber) => {
          const { result, rerender } = renderHook(() => useCardNumber());

          changeCardNumber(result, rerender, cardNumber);

          expect(result.current.isValid).toBeFalsy();
          expect(result.current.errorMessage).toBe("16자리를 입력해 주세요.");
        }
      );

      test.each([["3611"], ["3611111111111"]])(
        "diners 카드는 14자리 미만인 경우 에러가 발생한다.",
        (cardNumber) => {
          const { result, rerender } = renderHook(() => useCardNumber());

          changeCardNumber(result, rerender, cardNumber);

          expect(result.current.isValid).toBeFalsy();
          expect(result.current.errorMessage).toBe("14자리를 입력해 주세요.");
        }
      );

      test.each([["3411"], ["37111111111111"]])(
        "amex 카드는 15자리 미만인 경우 에러가 발생한다.",
        (cardNumber) => {
          const { result, rerender } = renderHook(() => useCardNumber());

          changeCardNumber(result, rerender, cardNumber);

          expect(result.current.isValid).toBeFalsy();
          expect(result.current.errorMessage).toBe("15자리를 입력해 주세요.");
        }
      );

      test.each([["628811111"], ["622128111111111"]])(
        "unionPay 카드는 16자리 미만인 경우 에러가 발생한다.",
        (cardNumber) => {
          const { result, rerender } = renderHook(() => useCardNumber());

          changeCardNumber(result, rerender, cardNumber);

          expect(result.current.isValid).toBeFalsy();
          expect(result.current.errorMessage).toBe("16자리를 입력해 주세요.");
        }
      );
    });
  });

  describe("포맷", () => {
    test.each([
      ["4111111111111111", "4111 1111 1111 1111"],
      ["51111111", "5111 1111"],
      ["55111", "5511 1"],
    ])(
      "visa/master 카드는 4자리씩 띄어서 반환한다.",
      (cardNumber, formattedCardNumber) => {
        const { result, rerender } = renderHook(() => useCardNumber());

        changeCardNumber(result, rerender, cardNumber);

        expect(result.current.formattedCardNumber()).toBe(formattedCardNumber);
      }
    );

    test.each([
      ["36111111111111", "3611 111111 1111"],
      ["3611111", "3611 111"],
    ])(
      "visa/master 카드는 4/6/4자리씩 띄어서 반환한다.",
      (cardNumber, formattedCardNumber) => {
        const { result, rerender } = renderHook(() => useCardNumber());

        changeCardNumber(result, rerender, cardNumber);

        expect(result.current.formattedCardNumber()).toBe(formattedCardNumber);
      }
    );

    test.each([
      ["341111111111111", "3411 111111 11111"],
      ["3611111111", "3611 111111"],
    ])(
      "amex 카드는 4/6/5자리씩 띄어서 반환한다.",
      (cardNumber, formattedCardNumber) => {
        const { result, rerender } = renderHook(() => useCardNumber());

        changeCardNumber(result, rerender, cardNumber);

        expect(result.current.formattedCardNumber()).toBe(formattedCardNumber);
      }
    );

    test.each([
      ["6221261111111111", "6221 2611 1111 1111"],
      ["624111", "6241 11"],
      ["6282111", "6282 111"],
    ])(
      "visa/master 카드는 4자리씩 띄어서 반환한다.",
      (cardNumber, formattedCardNumber) => {
        const { result, rerender } = renderHook(() => useCardNumber());

        changeCardNumber(result, rerender, cardNumber);

        expect(result.current.formattedCardNumber()).toBe(formattedCardNumber);
      }
    );

    test.each([["123456"], ["567"]])(
      "카드사가 none일 경우 띄우지 않고 반환한다.",
      (cardNumber) => {
        const { result, rerender } = renderHook(() => useCardNumber());

        changeCardNumber(result, rerender, cardNumber);

        expect(result.current.formattedCardNumber()).toBe(cardNumber);
      }
    );
  });

  describe("에러 메시지 커스텀", () => {
    test("커스텀한 에러 메시지가 반영된다.", () => {
      const { result, rerender } = renderHook(() =>
        useCardNumber({ length: "자리를 입력해 주세용!" })
      );

      changeCardNumber(result, rerender, "4");

      expect(result.current.errorMessage).toBe("16자리를 입력해 주세용!");
    });
  });
});
