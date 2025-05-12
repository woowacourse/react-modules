import { renderHook } from "@testing-library/react";
import useCardBrand from "./index";

describe("useCardBrand", () => {
  describe("카드 브랜드 유효성 검사", () => {
    it("카드 번호에 맞는 카드사가 존재하지 않을 경우 에러가 발생한다.", () => {
      const notFountCardNumber = "1234123412341234";
      const { result } = renderHook(() => useCardBrand(notFountCardNumber));
      expect(result.current.value).toBe(null);
      expect(result.current.errorState.isValid).toBeFalsy();
      expect(result.current.errorState.errorMessage).toBe(
        "현재 카드 번호에 일치하는 카드사가 존재하지 않습니다."
      );
    });
  });
  describe("AMEX 카드 브랜드", () => {
    it("34로 시작하는 카드 번호는 AMEX 카드 브랜드이다.", () => {
      const amexCardNumber = "341234567890123";
      const { result } = renderHook(() => useCardBrand(amexCardNumber));
      expect(result.current.value).toBe("AMEX");
    });

    it("37로 시작하는 카드 번호는 AMEX 카드 브랜드이다.", () => {
      const amexCardNumber = "371234567890123";
      const { result } = renderHook(() => useCardBrand(amexCardNumber));
      expect(result.current.value).toBe("AMEX");
    });
  });

  describe("Diners 카드 브랜드", () => {
    it("36로 시작하는 카드 번호는 Diners 카드 브랜드이다.", () => {
      const dinersCardNumber = "36123456789012";
      const { result } = renderHook(() => useCardBrand(dinersCardNumber));
      expect(result.current.value).toBe("Diners");
    });
  });

  describe("Visa 카드 브랜드", () => {
    it("4로 시작하는 카드 번호는 Visa 카드 브랜드이다.", () => {
      const visaCardNumber = "4234567890123456";
      const { result } = renderHook(() => useCardBrand(visaCardNumber));
      expect(result.current.value).toBe("Visa");
    });
  });

  describe("MasterCard 카드 브랜드", () => {
    it("51 ~ 55로 시작하는 카드 번호는 MasterCard 카드 브랜드이다.", () => {
      const masterCardNumber1 = "5112123412341234";
      const { result: result1 } = renderHook(() =>
        useCardBrand(masterCardNumber1)
      );
      expect(result1.current.value).toBe("MasterCard");

      const masterCardNumber2 = "5512123412341234";
      const { result: result2 } = renderHook(() =>
        useCardBrand(masterCardNumber2)
      );
      expect(result2.current.value).toBe("MasterCard");
    });
  });

  describe("UnionPay 카드 브랜드", () => {
    it("622126 ~ 622925로 시작하는 카드 번호는 UnionPay 카드 브랜드이다.", () => {
      const unionPayCardNumber1 = "6221261234567890";
      const { result: result1 } = renderHook(() =>
        useCardBrand(unionPayCardNumber1)
      );
      expect(result1.current.value).toBe("UnionPay");

      const masterCardNumber2 = "6229251234567890";
      const { result: result2 } = renderHook(() =>
        useCardBrand(masterCardNumber2)
      );
      expect(result2.current.value).toBe("UnionPay");
    });

    it("624 ~ 626로 시작하는 카드 번호는 UnionPay 카드 브랜드이다.", () => {
      const unionPayCardNumber1 = "6241261234567890";
      const { result: result1 } = renderHook(() =>
        useCardBrand(unionPayCardNumber1)
      );
      expect(result1.current.value).toBe("UnionPay");

      const masterCardNumber2 = "6269251234567890";
      const { result: result2 } = renderHook(() =>
        useCardBrand(masterCardNumber2)
      );
      expect(result2.current.value).toBe("UnionPay");
    });

    it("6282 ~ 6288로 시작하는 카드 번호는 UnionPay 카드 브랜드이다.", () => {
      const unionPayCardNumber1 = "6282261234567890";
      const { result: result1 } = renderHook(() =>
        useCardBrand(unionPayCardNumber1)
      );
      expect(result1.current.value).toBe("UnionPay");

      const masterCardNumber2 = "6288251234567890";
      const { result: result2 } = renderHook(() =>
        useCardBrand(masterCardNumber2)
      );
      expect(result2.current.value).toBe("UnionPay");
    });
  });
});
