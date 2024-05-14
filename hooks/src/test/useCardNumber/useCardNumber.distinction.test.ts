import { setupCardNumberTest } from "./useCardNumber.basic.test";
import { PAYMENT_COMPANY } from "../../lib/constants/paymentCompany";

describe("useCardNumber 페이먼츠 회사 판정", () => {
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
    ])(": 51 ~ 55로 시작하는 카드 번호는 MASTER이다.", (cardNumber) => {
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

  it("6282 ~ 6288로 시작하는 카드 번호는 UNION이다.", () => {
    const unionCardNumber = "6282 1234 5678 9012";

    const result = setupCardNumberTest(unionCardNumber);

    expect(result.current.cardNumberInfo.paymentCompany).toBe(
      PAYMENT_COMPANY.UNION.name
    );
  });
});
