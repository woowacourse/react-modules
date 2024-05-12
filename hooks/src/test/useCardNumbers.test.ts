import useCardNumbers from "../lib/useCardNumbers";
import { renderHook, act } from "@testing-library/react";
import { ChangeEvent } from "react";
import { COMMON_ERROR, CARD_NUMBER } from "../lib/constants/validation";
import { PAYMENT_COMPANY } from "../lib/constants/paymentCompany";

const createChangeEvent = (value: string) => {
  return {
    target: { value: value.replace(/\s+/g, "") },
  } as ChangeEvent<HTMLInputElement>;
};

const setupCardNumberTest = (cardNumber: string) => {
  const { result } = renderHook(() => useCardNumbers());
  const changeEvent = createChangeEvent(cardNumber);
  act(() => {
    result.current.onChangeCardNumbers(changeEvent);
  });
  return result;
};

describe("useCardNumber 커스텀 훅 테스트", () => {
  const cardLength = PAYMENT_COMPANY.NONE.length;
  const whiteSpaceCount = PAYMENT_COMPANY.NONE.whiteSpaceCount;

  it("카드 번호 입력 시 상태가 올바르게 업데이트되는지 확인한다.", () => {
    const testCases = [
      {
        cardNumber: "1234567812345678",
        formattedCardNumber: "1234 5678 1234 5678",
      },
    ];

    testCases.forEach(({ cardNumber, formattedCardNumber }) => {
      const result = setupCardNumberTest(cardNumber);
      expect(result.current.cardNumberInfo.isValid).toBe(true);
      expect(result.current.cardNumberInfo.cardNumber).toBe(
        formattedCardNumber
      );
      expect(result.current.cardNumberInfo.maxLength).toBe(
        cardLength + whiteSpaceCount
      );
    });
  });

  it("카드 번호에 숫자가 아닌 입력이 있으면 isValid가 false이고, 숫자를 입력해달라는 에러 메세지를 출력한다.", () => {
    const notNumericValue = "1234 5678 a123 1234";
    const result = setupCardNumberTest(notNumericValue);
    expect(result.current.cardNumberInfo.isValid).toBe(false);
    expect(result.current.cardNumberInfo.errorMessages).toContain(
      COMMON_ERROR.notNumeric
    );
  });
});

describe("카드 회사별 유효성 검증", () => {
  const testCases = {
    VISA: [
      {
        cardNumber: "4123123412341234",
        formattedCardNumber: "4123 1234 1234 1234",
      },
      {
        cardNumber: "4321123412341234",
        formattedCardNumber: "4321 1234 1234 1234",
      },
      {
        cardNumber: "4234 5678 1234 567",
        errorMessages: [
          CARD_NUMBER.errorMessage.invalidLength(
            PAYMENT_COMPANY.VISA.name,
            PAYMENT_COMPANY.VISA.length
          ),
        ],
      },
    ],
    MASTER: [
      {
        cardNumber: "5121123412341234",
        formattedCardNumber: "5121 1234 1234 1234",
      },
      {
        cardNumber: "5134 5678 1234 567",
        errorMessages: [
          CARD_NUMBER.errorMessage.invalidLength(
            PAYMENT_COMPANY.MASTER.name,
            PAYMENT_COMPANY.MASTER.length
          ),
        ],
      },
    ],
    DINERS: [
      {
        cardNumber: "36 123456789012",
        formattedCardNumber: "3612 345678 9012",
      },
      { cardNumber: "36123456789012", formattedCardNumber: "3612 345678 9012" },
      {
        cardNumber: "3612 345678 901",
        errorMessages: [
          CARD_NUMBER.errorMessage.invalidLength(
            PAYMENT_COMPANY.DINERS.name,
            PAYMENT_COMPANY.DINERS.length
          ),
        ],
      },
    ],
    AMEX: [
      {
        cardNumber: "34 1234567890123",
        formattedCardNumber: "3412 345678 90123",
      },
      {
        cardNumber: "341234567890123",
        formattedCardNumber: "3412 345678 90123",
      },
      {
        cardNumber: "3412 345678 9012",
        errorMessages: [
          CARD_NUMBER.errorMessage.invalidLength(
            PAYMENT_COMPANY.AMEX.name,
            PAYMENT_COMPANY.AMEX.length
          ),
        ],
      },
    ],
    UNION: [
      {
        cardNumber: "6282 1234 5678 9012",
        formattedCardNumber: "6282 1234 5678 9012",
      },
      {
        cardNumber: "6282123456789012",
        formattedCardNumber: "6282 1234 5678 9012",
      },
      {
        cardNumber: "622126",
        errorMessages: [
          CARD_NUMBER.errorMessage.invalidLength(
            PAYMENT_COMPANY.UNION.name,
            PAYMENT_COMPANY.UNION.length
          ),
        ],
      },
    ],
  };

  Object.entries(testCases).forEach(([paymentCompany, cases]) => {
    describe(`${paymentCompany} 유효성 검증`, () => {
      cases.forEach(({ cardNumber, formattedCardNumber, errorMessages }) => {
        const descriptionParts: string[] = [];

        descriptionParts.push(`카드 번호: ${cardNumber}`);

        if (formattedCardNumber) {
          descriptionParts.push(`올바른 포맷: ${formattedCardNumber}`);
        }
        if (errorMessages && errorMessages.length > 0) {
          descriptionParts.push(`에러 메세지: ${errorMessages.join(", ")}`);
        }
        const testDescription = descriptionParts.join(" | ");

        it(testDescription, () => {
          const result = setupCardNumberTest(cardNumber);

          if (formattedCardNumber) {
            expect(result.current.cardNumberInfo.cardNumber).toBe(
              formattedCardNumber
            );
          }
          if (errorMessages) {
            errorMessages.forEach((errorMessage) => {
              expect(result.current.cardNumberInfo.errorMessages).toContain(
                errorMessage
              );
            });
          }
        });
      });
    });
  });
});

describe("VISA 판정", () => {
  it("4로 시작하는 카드 번호는 VISA이다.", () => {
    const visaCardNumber = "4123123412341234";

    const result = setupCardNumberTest(visaCardNumber);

    expect(result.current.cardNumberInfo.paymentCompany).toBe("VISA");
  });
});

describe("MASTER 판정", () => {
  test.each([
    ["51 23123412341234"],
    ["52 23123412341234"],
    ["54 23123412341234"],
    ["55 23123412341234"],
  ])("51 ~ 55로 시작하는 카드 번호는 MASTER이다.", (cardNumber) => {
    const result = setupCardNumberTest(cardNumber);

    expect(result.current.cardNumberInfo.paymentCompany).toBe(
      PAYMENT_COMPANY.MASTER.name
    );
  });
});

describe("DINERS 판정", () => {
  it("36으로 시작하는 카드 번호는 DINERS이다.", () => {
    const dinersCardNumber = "36 123456789012";

    const result = setupCardNumberTest(dinersCardNumber);

    expect(result.current.cardNumberInfo.paymentCompany).toBe(
      PAYMENT_COMPANY.DINERS.name
    );
  });
});

describe("AMEX 판정", () => {
  test.each([["34 1234567890123"], ["37 1234567890123"]])(
    "34 혹은 37로 시작하는 카드 번호는 AMEX이다.",
    (cardNumber) => {
      const result = setupCardNumberTest(cardNumber);

      expect(result.current.cardNumberInfo.paymentCompany).toBe(
        PAYMENT_COMPANY.AMEX.name
      );
    }
  );
});

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
    const result = setupCardNumberTest(cardNumber);

    expect(result.current.cardNumberInfo.paymentCompany).toBe(
      PAYMENT_COMPANY.UNION.name
    );
  });

  test.each([
    ["624 1261234567890"],
    ["625 1271234567890"],
    ["626 1901234567890"],
  ])("624 ~ 626으로 시작하는 카드 번호는 UNION이다.", (cardNumber) => {
    const result = setupCardNumberTest(cardNumber);

    expect(result.current.cardNumberInfo.paymentCompany).toBe(
      PAYMENT_COMPANY.UNION.name
    );
  });

  test.each([
    ["6282 261234567890"],
    ["6283 271234567890"],
    ["6288 901234567890"],
  ])("6282 ~ 6288로 시작하는 카드 번호는 UNION이다.", (cardNumber) => {
    const result = setupCardNumberTest(cardNumber);

    expect(result.current.cardNumberInfo.paymentCompany).toBe(
      PAYMENT_COMPANY.UNION.name
    );
  });
});
