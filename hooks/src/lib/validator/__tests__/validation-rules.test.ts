import { isNumeric } from "../../utils/isNumeric";
import { validationRules } from "../validation-rules";

describe("validation-rules", () => {
  describe("isNumeric", () => {
    it("숫자 문자열에 대해 true를 반환해야 한다", () => {
      expect(isNumeric("123")).toBe(true);
      expect(isNumeric("0")).toBe(true);
      expect(isNumeric("-123")).toBe(true);
    });

    it("숫자가 아닌 문자열에 대해 false를 반환해야 한다", () => {
      expect(isNumeric("abc")).toBe(false);
      expect(isNumeric("1a2b3c")).toBe(false);
      expect(isNumeric("")).toBe(false);
    });
  });

  describe("cvc 유효성 검증 규칙", () => {
    describe("INVALID_NUMBER 규칙", () => {
      const { check } = validationRules.cvc.INVALID_NUMBER;

      it("숫자 값에 대해 통과해야 한다", () => {
        expect(check("123")).toBe(true);
        expect(check("000")).toBe(true);
      });

      it("숫자가 아닌 값에 대해 실패해야 한다", () => {
        expect(check("abc")).toBe(false);
        expect(check("1a2")).toBe(false);
      });
    });

    describe("INVALID_LENGTH 규칙", () => {
      const { check } = validationRules.cvc.INVALID_LENGTH;

      it("올바른 길이에 대해 통과해야 한다", () => {
        expect(check("123")).toBe(true);
        expect(check("000")).toBe(true);
      });

      it("잘못된 길이에 대해 실패해야 한다", () => {
        expect(check("12")).toBe(false);
        expect(check("1234")).toBe(false);
        expect(check("")).toBe(false);
      });
    });
  });

  describe("cardNumber 유효성 검증 규칙", () => {
    describe("INVALID_NUMBER 규칙", () => {
      const { check } = validationRules.cardNumber.INVALID_NUMBER;

      it("숫자 값에 대해 통과해야 한다", () => {
        expect(check("4111111111111111")).toBe(true);
        expect(check("5111111111111111")).toBe(true);
      });

      it("숫자가 아닌 값에 대해 실패해야 한다", () => {
        expect(check("411111111111111a")).toBe(false);
        expect(check("card-number")).toBe(false);
      });
    });

    describe("INVALID_LENGTH 규칙", () => {
      const { check } = validationRules.cardNumber.INVALID_LENGTH;

      it("올바른 길이에 대해 통과해야 한다", () => {
        expect(check("4111111111111111")).toBe(true);
        expect(check("0000000000000000")).toBe(true);
      });

      it("잘못된 길이에 대해 실패해야 한다", () => {
        expect(check("411111111111111")).toBe(false);
        expect(check("41111111111111112")).toBe(false);
      });
    });

    describe("INVALID_FORMAT 규칙", () => {
      const { check } = validationRules.cardNumber.INVALID_FORMAT;

      it("유효한 카드 번호 형식에 대해 통과해야 한다", () => {
        // VISA 또는 MASTER 카드 번호의 패턴과 관계없이 숫자로만 구성된 것을 검증
        expect(check("4111111111111111")).toBe(true);
        expect(check("5111111111111111")).toBe(true);
      });

      it("유효하지 않은 카드 번호 형식에 대해 실패해야 한다", () => {
        // 숫자가 아닌 문자가 포함된 경우를 검증
        expect(check("abc1111111111111")).toBe(false);
        expect(check("41111-1111-1111-1111")).toBe(false);
      });
    });
  });

  describe("password 유효성 검증 규칙", () => {
    describe("INVALID_CHARACTER 규칙", () => {
      const { check } = validationRules.password.INVALID_CHARACTER;

      it("숫자 값에 대해 통과해야 한다", () => {
        expect(check("12345678")).toBe(true);
        expect(check("00000000")).toBe(true);
      });

      it("숫자가 아닌 값에 대해 실패해야 한다", () => {
        expect(check("password")).toBe(false);
        expect(check("pass1234")).toBe(false);
      });
    });

    describe("INVALID_LENGTH 규칙", () => {
      const { check } = validationRules.password.INVALID_LENGTH;

      it("올바른 길이에 대해 통과해야 한다", () => {
        expect(check("12")).toBe(true);
        expect(check("12345678")).toBe(true);
      });

      it("너무 짧은 비밀번호에 대해 실패해야 한다", () => {
        expect(check("1")).toBe(false);
        expect(check("")).toBe(false);
      });
    });

    describe("INVALID_FORMAT 규칙", () => {
      const { check } = validationRules.password.INVALID_FORMAT;

      it("숫자로만 구성된 비밀번호에 대해 통과해야 한다", () => {
        expect(check("12345678")).toBe(true);
        expect(check("00000000")).toBe(true);
      });

      it("숫자가 아닌 형식에 대해 실패해야 한다", () => {
        expect(check("pass1234")).toBe(false);
        expect(check("p@ssw0rd")).toBe(false);
      });
    });
  });

  describe("expiryDate 유효성 검증 규칙", () => {
    describe("INVALID_FORMAT 규칙", () => {
      const { check } = validationRules.expiryDate.INVALID_FORMAT;

      it("올바른 형식에 대해 통과해야 한다", () => {
        expect(check("1224")).toBe(true);
        expect(check("0125")).toBe(true);
      });

      it("잘못된 형식에 대해 실패해야 한다", () => {
        expect(check("12/24")).toBe(false);
        expect(check("1224a")).toBe(false);
        expect(check("122")).toBe(false);
        expect(check("12245")).toBe(false);
      });
    });

    describe("EXPIRED_DATE 규칙", () => {
      const { check } = validationRules.expiryDate.EXPIRED_DATE;

      // 일관된 테스트를 위한 현재 날짜 모의 설정
      const originalDate = global.Date;
      beforeAll(() => {
        // 날짜를 2023-01-01로 모의 설정
        const mockDate = new Date(2023, 0, 1);
        global.Date = jest.fn(() => mockDate) as any;
        global.Date.now = jest.fn(() => mockDate.getTime());
      });

      afterAll(() => {
        global.Date = originalDate;
      });

      it("미래의 유효한 날짜에 대해 통과해야 한다", () => {
        expect(check("0223")).toBe(true); // 02/23
        expect(check("1225")).toBe(true); // 12/25
      });

      it("현재 월에 대해 통과해야 한다", () => {
        expect(check("0123")).toBe(true); // 01/23 - 현재 월
      });

      it("과거 날짜에 대해 실패해야 한다", () => {
        expect(check("1222")).toBe(false); // 12/22 - 지난 월
        expect(check("0122")).toBe(false); // 01/22 - 지난 해
      });

      it("유효하지 않은 월에 대해 실패해야 한다", () => {
        expect(check("0023")).toBe(false); // 00/23
        expect(check("1323")).toBe(false); // 13/23
      });

      it("숫자가 아닌 형식이나 잘못된 형식에 대해 실패해야 한다", () => {
        expect(check("abcd")).toBe(false);
        expect(check("12/23")).toBe(false);
      });
    });
  });
});
