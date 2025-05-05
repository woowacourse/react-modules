// __tests__/cardBrandChecker.test.ts
import type { CardBrand } from "../../constants/CardBrand";
import {
  strictCardBrandChecker,
  cardBrandChecker,
} from "../card-brand-checker";

describe("strictCardBrandChecker", () => {
  interface TestCase {
    input: string;
    expected: CardBrand;
  }
  const cases: TestCase[] = [
    // VISA (길이 검사)
    { input: "4111111111111", expected: "VISA" }, // 13자리
    { input: "4012888888881881", expected: "VISA" }, // 16자리

    // MasterCard (51-55, 2221-2720)
    { input: "5111111111111118", expected: "MASTERCARD" },
    { input: "2221000000000009", expected: "MASTERCARD" },
    { input: "2720999999999999", expected: "MASTERCARD" },

    // Diners Club (36 + 14자리)
    { input: "36123456789012", expected: "DINERS" },

    // American Express (34|37 + 15자리)
    { input: "341234567890123", expected: "AMEX" },
    { input: "371234567890123", expected: "AMEX" },

    // UnionPay (622126–622925, 624–626, 6282–6288 + 16자리)
    { input: "6221261234567890", expected: "UNIONPAY" },
    { input: "6229251234567890", expected: "UNIONPAY" },
    { input: "6241234567890123", expected: "UNIONPAY" },
    { input: "6261234567890123", expected: "UNIONPAY" },
    { input: "6282123456789012", expected: "UNIONPAY" },
    { input: "6288123456789012", expected: "UNIONPAY" },

    // 잘못된 길이/패턴 → DEFAULT
    { input: "4111", expected: "DEFAULT" },
    { input: "3612345678901", expected: "DEFAULT" }, // Diners 13자리
  ];

  cases.forEach(({ input, expected }) => {
    it(`"${input}" → ${expected}`, () => {
      expect(strictCardBrandChecker(input)).toBe(expected);
    });
  });
});

describe("cardBrandChecker", () => {
  interface TestCase {
    input: string;
    expected: CardBrand;
  }
  const cases: TestCase[] = [
    // 주 용례는 아니지만, 기본적인 포맷팅과 파싱도 합니다.
    { input: "4111 1111 1111 1111", expected: "VISA" },
    { input: "5111-1111-1111-1111", expected: "MASTERCARD" },
    { input: "36 123456789012", expected: "DINERS" },
    { input: "3412 345678 90123", expected: "AMEX" },
    { input: "3712-3456-7890-123", expected: "AMEX" },
    { input: "6221261234567890", expected: "UNIONPAY" },
    { input: "6244567890123456", expected: "UNIONPAY" },
    { input: "6282123456789012", expected: "UNIONPAY" },
    { input: "1234 5678 9012 3456", expected: "DEFAULT" },
  ];

  cases.forEach(({ input, expected }) => {
    it(`"${input}" → ${expected}`, () => {
      expect(cardBrandChecker(input)).toBe(expected);
    });
  });
});
