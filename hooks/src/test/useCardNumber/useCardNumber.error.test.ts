import { setupCardNumberTest } from "./useCardNumber.basic.test";
import { CARD_NUMBER } from "../../lib/constants/validation";
import { PAYMENT_COMPANY } from "../../lib/constants/paymentCompany";

describe("useCardNumber 페이먼츠 회사별 유효성 검증", () => {
  describe("VISA 유효성 검증", () => {
    it("16자리 미만의 입력은 isValid가 false이고, 카드 번호 길이 관련 에러 메세지를 출력한다.", () => {
      const numbersUnderLength = "4234 5678 1234 567";

      const result = setupCardNumberTest(numbersUnderLength);

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
    it("16자리 미만의 입력은 isValid가 false이고, 카드 번호 길이 관련 에러 메세지를 출력한다.", () => {
      const numbersUnderLength = "5134 5678 1234 567";

      const result = setupCardNumberTest(numbersUnderLength);

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
    it("14자리 미만의 입력은 isValid가 false이고, 카드 번호 길이 관련 에러 메세지를 출력한다.", () => {
      const numbersUnderLength = "3612 345678 901";

      const result = setupCardNumberTest(numbersUnderLength);

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
    it("15자리 미만의 입력은 isValid가 false이고, 카드 번호 길이 관련 에러 메세지를 출력한다.", () => {
      const numbersUnderLength = "3412 345678 9012";

      const result = setupCardNumberTest(numbersUnderLength);

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
    it("16자리 미만의 입력은 isValid가 false이고, 카드 번호 길이 관련 에러 메세지를 출력한다.", () => {
      const numbersUnderLength = "622126";

      const result = setupCardNumberTest(numbersUnderLength);

      expect(result.current.cardNumberInfo.isValid).toBe(false);
      expect(result.current.cardNumberInfo.errorMessages).toContain(
        CARD_NUMBER.errorMessage.invalidLength(
          PAYMENT_COMPANY.UNION.name,
          PAYMENT_COMPANY.UNION.length
        )
      );
    });
  });
});
