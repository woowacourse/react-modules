import { renderHook, act } from "@testing-library/react";
import { ChangeEvent } from "react";
import { COMMON_ERROR, CARD_NUMBER } from "../lib/constants/validation";
import useCardNumbers from "../lib/useCardNumbers";
import { PAYMENT_COMPANY } from "../lib/constants/paymentCompany";

describe("useCardNumber 커스텀 훅 테스트", () => {
  const cardLength = PAYMENT_COMPANY.NONE.length;
  const whiteSpaceCount = PAYMENT_COMPANY.NONE.whiteSpaceCount;

  it("카드 번호 입력 시 상태가 올바르게 업데이트되는지 확인한다.", () => {
    const cardNumber = "1234567812345678";
    const formattedCardNumber = "1234 5678 1234 5678";
    const { result } = renderHook(() => useCardNumbers());

    const validEvent = {
      target: { value: cardNumber.replace(/\s+/g, "") },
    } as ChangeEvent<HTMLInputElement>;
    act(() => {
      result.current.onChangeCardNumbers(validEvent);
    });

    expect(result.current.cardNumberInfo.isValid).toBe(true);
    expect(result.current.cardNumberInfo.cardNumber).toBe(formattedCardNumber);
    expect(result.current.cardNumberInfo.maxLength).toBe(
      cardLength + whiteSpaceCount
    );
  });

  it("카드 번호에 숫자가 아닌 입력이 있으면 isValid가 false이고, 숫자를 입력해달라는 에러 메세지를 출력한다.", () => {
    const notNumericValue = "1234 5678 a123 1234";
    const { result } = renderHook(() => useCardNumbers());

    const inValidEvent = {
      target: { value: notNumericValue.replace(/\s+/g, "") },
    } as ChangeEvent<HTMLInputElement>;
    act(() => {
      result.current.onChangeCardNumbers(inValidEvent);
    });

    expect(result.current.cardNumberInfo.isValid).toBe(false);
    expect(result.current.cardNumberInfo.errorMessages).toContain(
      COMMON_ERROR.notNumeric
    );
  });
});

describe("VISA 유효성 검증", () => {
  it("4로 시작하는 카드 번호는 VISA이다.", () => {
    const visaCardNumber = "4123123412341234";
    const { result } = renderHook(() => useCardNumbers());

    const validEvent = {
      target: { value: visaCardNumber.replace(/\s+/g, "") },
    } as ChangeEvent<HTMLInputElement>;

    act(() => {
      result.current.onChangeCardNumbers(validEvent);
    });

    expect(result.current.cardNumberInfo.paymentCompany).toBe("VISA");
  });

  it("포매팅이 [4, 4, 4, 4]형식으로 이루어진다.", () => {
    const visaCardNumber = "4321123412341234";
    const formattedVisaCardNumber = "4321 1234 1234 1234";
    const { result } = renderHook(() => useCardNumbers());

    const validEvent = {
      target: { value: visaCardNumber.replace(/\s+/g, "") },
    } as ChangeEvent<HTMLInputElement>;
    act(() => {
      result.current.onChangeCardNumbers(validEvent);
    });

    expect(result.current.cardNumberInfo.cardNumber).toBe(
      formattedVisaCardNumber
    );
  });

  it("16자리 미만의 입력은 isValid가 false이고, 카드 번호 길이 관련 에러 메세지를 출력한다.", () => {
    const numbersUnderLength = "4234 5678 1234 567";
    const { result } = renderHook(() => useCardNumbers());

    const inValidEvent = {
      target: { value: numbersUnderLength.replace(/\s+/g, "") },
    } as ChangeEvent<HTMLInputElement>;
    act(() => {
      result.current.onChangeCardNumbers(inValidEvent);
    });

    expect(result.current.cardNumberInfo.isValid).toBe(false);
    expect(result.current.cardNumberInfo.errorMessages).toContain(
      CARD_NUMBER.errorMessage.invalidLength(
        PAYMENT_COMPANY.VISA.name,
        PAYMENT_COMPANY.VISA.length
      )
    );
  });
});

describe("MASTER 유효성 검증", () => {
  describe("MASTER 판정", () => {
    test.each([
      ["51 23123412341234"],
      ["52 23123412341234"],
      ["54 23123412341234"],
      ["55 23123412341234"],
    ])("51 ~ 55로 시작하는 카드 번호는 MASTER이다.", (cardNumber) => {
      const { result } = renderHook(() => useCardNumbers());

      const validEvent = {
        target: { value: cardNumber.replace(/\s+/g, "") },
      } as ChangeEvent<HTMLInputElement>;

      act(() => {
        result.current.onChangeCardNumbers(validEvent);
      });

      expect(result.current.cardNumberInfo.paymentCompany).toBe(
        PAYMENT_COMPANY.MASTER.name
      );
    });
  });

  it("포매팅이 [4, 4, 4, 4]형식으로 이루어진다.", () => {
    const masterCardNumber = "5121123412341234";
    const formattedMasterCardNumber = "5121 1234 1234 1234";
    const { result } = renderHook(() => useCardNumbers());

    const validEvent = {
      target: { value: masterCardNumber.replace(/\s+/g, "") },
    } as ChangeEvent<HTMLInputElement>;
    act(() => {
      result.current.onChangeCardNumbers(validEvent);
    });

    expect(result.current.cardNumberInfo.cardNumber).toBe(
      formattedMasterCardNumber
    );
  });

  it("16자리 미만의 입력은 isValid가 false이고, 카드 번호 길이 관련 에러 메세지를 출력한다.", () => {
    const numbersUnderLength = "5134 5678 1234 567";
    const { result } = renderHook(() => useCardNumbers());

    const inValidEvent = {
      target: { value: numbersUnderLength.replace(/\s+/g, "") },
    } as ChangeEvent<HTMLInputElement>;
    act(() => {
      result.current.onChangeCardNumbers(inValidEvent);
    });

    expect(result.current.cardNumberInfo.isValid).toBe(false);
    expect(result.current.cardNumberInfo.errorMessages).toContain(
      CARD_NUMBER.errorMessage.invalidLength(
        PAYMENT_COMPANY.MASTER.name,
        PAYMENT_COMPANY.MASTER.length
      )
    );
  });
});

describe("DINERS 유효성 검증", () => {
  it("36으로 시작하는 카드 번호는 DINERS이다.", () => {
    const dinersCardNumber = "36 123456789012";
    const { result } = renderHook(() => useCardNumbers());

    const validEvent = {
      target: { value: dinersCardNumber.replace(/\s+/g, "") },
    } as ChangeEvent<HTMLInputElement>;

    act(() => {
      result.current.onChangeCardNumbers(validEvent);
    });

    expect(result.current.cardNumberInfo.paymentCompany).toBe(
      PAYMENT_COMPANY.DINERS.name
    );
  });

  it("포매팅이 [4, 6, 4]형식으로 이루어진다.", () => {
    const dinersCardNumber = "36123456789012";
    const formattedDinersCardNumber = "3612 345678 9012";
    const { result } = renderHook(() => useCardNumbers());

    const validEvent = {
      target: { value: dinersCardNumber.replace(/\s+/g, "") },
    } as ChangeEvent<HTMLInputElement>;
    act(() => {
      result.current.onChangeCardNumbers(validEvent);
    });

    expect(result.current.cardNumberInfo.cardNumber).toBe(
      formattedDinersCardNumber
    );
  });

  it("14자리 미만의 입력은 isValid가 false이고, 카드 번호 길이 관련 에러 메세지를 출력한다.", () => {
    const numbersUnderLength = "3612 345678 901";
    const { result } = renderHook(() => useCardNumbers());

    const inValidEvent = {
      target: { value: numbersUnderLength.replace(/\s+/g, "") },
    } as ChangeEvent<HTMLInputElement>;
    act(() => {
      result.current.onChangeCardNumbers(inValidEvent);
    });

    expect(result.current.cardNumberInfo.isValid).toBe(false);
    expect(result.current.cardNumberInfo.errorMessages).toContain(
      CARD_NUMBER.errorMessage.invalidLength(
        PAYMENT_COMPANY.DINERS.name,
        PAYMENT_COMPANY.DINERS.length
      )
    );
  });
});

describe("AMEX 유효성 검증", () => {
  describe("AMEX 판정", () => {
    test.each([["34 1234567890123"], ["37 1234567890123"]])(
      "34 혹은 37로 시작하는 카드 번호는 AMEX이다.",
      (cardNumber) => {
        const { result } = renderHook(() => useCardNumbers());

        const validEvent = {
          target: { value: cardNumber.replace(/\s+/g, "") },
        } as ChangeEvent<HTMLInputElement>;

        act(() => {
          result.current.onChangeCardNumbers(validEvent);
        });

        expect(result.current.cardNumberInfo.paymentCompany).toBe(
          PAYMENT_COMPANY.AMEX.name
        );
      }
    );
  });

  it("포매팅이 [4, 6, 5]형식으로 이루어진다.", () => {
    const amexCardNumber = "341234567890123";
    const formattedAmexCardNumber = "3412 345678 90123";
    const { result } = renderHook(() => useCardNumbers());

    const validEvent = {
      target: { value: amexCardNumber.replace(/\s+/g, "") },
    } as ChangeEvent<HTMLInputElement>;
    act(() => {
      result.current.onChangeCardNumbers(validEvent);
    });

    expect(result.current.cardNumberInfo.cardNumber).toBe(
      formattedAmexCardNumber
    );
  });

  it("15자리 미만의 입력은 isValid가 false이고, 카드 번호 길이 관련 에러 메세지를 출력한다.", () => {
    const numbersUnderLength = "3412 345678 9012";
    const { result } = renderHook(() => useCardNumbers());

    const inValidEvent = {
      target: { value: numbersUnderLength.replace(/\s+/g, "") },
    } as ChangeEvent<HTMLInputElement>;
    act(() => {
      result.current.onChangeCardNumbers(inValidEvent);
    });

    expect(result.current.cardNumberInfo.isValid).toBe(false);
    expect(result.current.cardNumberInfo.errorMessages).toContain(
      CARD_NUMBER.errorMessage.invalidLength(
        PAYMENT_COMPANY.AMEX.name,
        PAYMENT_COMPANY.AMEX.length
      )
    );
  });
});

describe("UNION 유효성 검증", () => {
  describe("UNION 판정", () => {
    test.each([
      ["622126 1234567890"],
      ["622127 1234567890"],
      ["622190 1234567890"],
      ["622245 1234567890"],
      ["622324 1234567890"],
      ["622890 1234567890"],
      ["622925 1234567890"],
    ])("622126 ~ 622925로 시작하는 카드 번호는 UNION이다.", (cardNumber) => {
      const { result } = renderHook(() => useCardNumbers());

      const validEvent = {
        target: { value: cardNumber.replace(/\s+/g, "") },
      } as ChangeEvent<HTMLInputElement>;

      act(() => {
        result.current.onChangeCardNumbers(validEvent);
      });

      expect(result.current.cardNumberInfo.paymentCompany).toBe(
        PAYMENT_COMPANY.UNION.name
      );
    });

    test.each([
      ["624 1261234567890"],
      ["625 1271234567890"],
      ["626 1901234567890"],
    ])("624 ~ 626으로 시작하는 카드 번호는 UNION이다.", (cardNumber) => {
      const { result } = renderHook(() => useCardNumbers());

      const validEvent = {
        target: { value: cardNumber.replace(/\s+/g, "") },
      } as ChangeEvent<HTMLInputElement>;

      act(() => {
        result.current.onChangeCardNumbers(validEvent);
      });

      expect(result.current.cardNumberInfo.paymentCompany).toBe(
        PAYMENT_COMPANY.UNION.name
      );
    });

    test.each([
      ["6282 261234567890"],
      ["6283 271234567890"],
      ["6288 901234567890"],
    ])("6282 ~ 6288로 시작하는 카드 번호는 UNION이다.", (cardNumber) => {
      const { result } = renderHook(() => useCardNumbers());

      const validEvent = {
        target: { value: cardNumber.replace(/\s+/g, "") },
      } as ChangeEvent<HTMLInputElement>;

      act(() => {
        result.current.onChangeCardNumbers(validEvent);
      });

      expect(result.current.cardNumberInfo.paymentCompany).toBe(
        PAYMENT_COMPANY.UNION.name
      );
    });
  });

  it("6282 ~ 6288로 시작하는 카드 번호는 UNION이다.", () => {
    const unionCardNumber = "6282 1234 5678 9012";
    const { result } = renderHook(() => useCardNumbers());

    const validEvent = {
      target: { value: unionCardNumber.replace(/\s+/g, "") },
    } as ChangeEvent<HTMLInputElement>;

    act(() => {
      result.current.onChangeCardNumbers(validEvent);
    });

    expect(result.current.cardNumberInfo.paymentCompany).toBe(
      PAYMENT_COMPANY.UNION.name
    );
  });

  it("포매팅이 [4, 4, 4, 4]형식으로 이루어진다.", () => {
    const unionCardNumber = "6282123456789012";
    const formattedUnionCardNumber = "6282 1234 5678 9012";
    const { result } = renderHook(() => useCardNumbers());

    const validEvent = {
      target: { value: unionCardNumber.replace(/\s+/g, "") },
    } as ChangeEvent<HTMLInputElement>;
    act(() => {
      result.current.onChangeCardNumbers(validEvent);
    });

    expect(result.current.cardNumberInfo.cardNumber).toBe(
      formattedUnionCardNumber
    );
  });

  it("16자리 미만의 입력은 isValid가 false이고, 카드 번호 길이 관련 에러 메세지를 출력한다.", () => {
    const numbersUnderLength = "622126";
    const { result } = renderHook(() => useCardNumbers());

    const inValidEvent = {
      target: { value: numbersUnderLength.replace(/\s+/g, "") },
    } as ChangeEvent<HTMLInputElement>;
    act(() => {
      result.current.onChangeCardNumbers(inValidEvent);
    });

    expect(result.current.cardNumberInfo.isValid).toBe(false);
    expect(result.current.cardNumberInfo.errorMessages).toContain(
      CARD_NUMBER.errorMessage.invalidLength(
        PAYMENT_COMPANY.UNION.name,
        PAYMENT_COMPANY.UNION.length
      )
    );
  });
});
