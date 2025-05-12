import { renderHook } from "@testing-library/react";
import useFormatCardNumber from "./index";

describe("useFormatCardNumber", () => {
  describe("AMEX 카드 브랜드", () => {
    it("34로 시작하는 카드 번호는 AMEX 카드 브랜드이다.", () => {
      const amexCardNumber = "341234567890123";
      const amexCardBrand = "AMEX";
      const { result } = renderHook(() =>
        useFormatCardNumber({
          cardNumber: amexCardNumber,
          cardBrand: amexCardBrand,
        })
      );
      expect(result.current).toBe("3412-345678-90123");
    });

    it("37로 시작하는 카드 번호는 AMEX 카드 브랜드이다.", () => {
      const amexCardNumber = "371234567890123";
      const amexCardBrand = "AMEX";
      const { result } = renderHook(() =>
        useFormatCardNumber({
          cardNumber: amexCardNumber,
          cardBrand: amexCardBrand,
        })
      );
      expect(result.current).toBe("3712-345678-90123");
    });
  });

  describe("Diners 카드 브랜드", () => {
    it("36로 시작하는 카드 번호는 Diners 카드 브랜드이다.", () => {
      const dinersCardNumber = "36123456789012";
      const dinersCardBrand = "Diners";
      const { result } = renderHook(() =>
        useFormatCardNumber({
          cardNumber: dinersCardNumber,
          cardBrand: dinersCardBrand,
        })
      );
      expect(result.current).toBe("3612-345678-9012");
    });
  });

  describe("Visa 카드 브랜드", () => {
    it("4로 시작하는 카드 번호는 Visa 카드 브랜드이다.", () => {
      const visaCardNumber = "4234567890123456";
      const visaCardBrand = "Visa";
      const { result } = renderHook(() =>
        useFormatCardNumber({
          cardNumber: visaCardNumber,
          cardBrand: visaCardBrand,
        })
      );
      expect(result.current).toBe("4234-5678-9012-3456");
    });
  });

  describe("MasterCard 카드 브랜드", () => {
    it("51 ~ 55로 시작하는 카드 번호는 MasterCard 카드 브랜드이다.", () => {
      const masterCardNumber1 = "5112123412341234";
      const masterCardBrand = "MasterCard";
      const { result: result1 } = renderHook(() =>
        useFormatCardNumber({
          cardNumber: masterCardNumber1,
          cardBrand: masterCardBrand,
        })
      );
      expect(result1.current).toBe("5112-1234-1234-1234");

      const masterCardNumber2 = "5512123412341234";
      const { result: result2 } = renderHook(() =>
        useFormatCardNumber({
          cardNumber: masterCardNumber2,
          cardBrand: masterCardBrand,
        })
      );
      expect(result2.current).toBe("5512-1234-1234-1234");
    });
  });

  describe("UnionPay 카드 브랜드", () => {
    it("622126 ~ 622925로 시작하는 카드 번호는 UnionPay 카드 브랜드이다.", () => {
      const unionPayCardNumber1 = "6221261234567890";
      const unionPayCardBrand = "UnionPay";
      const { result: result1 } = renderHook(() =>
        useFormatCardNumber({
          cardNumber: unionPayCardNumber1,
          cardBrand: unionPayCardBrand,
        })
      );
      expect(result1.current).toBe("6221-2612-3456-7890");

      const unionPayCardNumber2 = "6229251234567890";
      const { result: result2 } = renderHook(() =>
        useFormatCardNumber({
          cardNumber: unionPayCardNumber2,
          cardBrand: unionPayCardBrand,
        })
      );
      expect(result2.current).toBe("6229-2512-3456-7890");
    });

    it("624 ~ 626로 시작하는 카드 번호는 UnionPay 카드 브랜드이다.", () => {
      const unionPayCardNumber1 = "6241261234567890";
      const unionPayCardBrand = "UnionPay";
      const { result: result1 } = renderHook(() =>
        useFormatCardNumber({
          cardNumber: unionPayCardNumber1,
          cardBrand: unionPayCardBrand,
        })
      );
      expect(result1.current).toBe("6241-2612-3456-7890");

      const unionPayCardNumber2 = "6269251234567890";
      const { result: result2 } = renderHook(() =>
        useFormatCardNumber({
          cardNumber: unionPayCardNumber2,
          cardBrand: unionPayCardBrand,
        })
      );
      expect(result2.current).toBe("6269-2512-3456-7890");
    });

    it("6282 ~ 6288로 시작하는 카드 번호는 UnionPay 카드 브랜드이다.", () => {
      const unionPayCardNumber1 = "6282261234567890";
      const unionPayCardBrand = "UnionPay";
      const { result: result1 } = renderHook(() =>
        useFormatCardNumber({
          cardNumber: unionPayCardNumber1,
          cardBrand: unionPayCardBrand,
        })
      );
      expect(result1.current).toBe("6282-2612-3456-7890");

      const unionPayCardNumber2 = "6288251234567890";
      const { result: result2 } = renderHook(() =>
        useFormatCardNumber({
          cardNumber: unionPayCardNumber2,
          cardBrand: unionPayCardBrand,
        })
      );
      expect(result2.current).toBe("6288-2512-3456-7890");
    });
  });
});
