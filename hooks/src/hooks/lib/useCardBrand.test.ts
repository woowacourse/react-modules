import { renderHook } from "@testing-library/react";
import useCardBrand from "./useCardBrand";

describe("카드 브랜드에 대한 useCardBrand 커스텀 훅 테스트", () => {
  it("카드번호가 16자리고, 4로 시작하면 카드 브랜드는 Visa를 반환 한다.", () => {
    const { result } = renderHook(() =>
      useCardBrand({ cardNumbers: "4454654246454364" })
    );
    expect(result.current.cardBrand).toBe("Visa");
  });

  it.each([
    ["5454657653350952", "MasterCard"],
    ["5512345678901234", "MasterCard"],
    ["5399999999999999", "MasterCard"],
    ["5521888800001111", "MasterCard"],
    ["5343434343434343", "MasterCard"],
  ])(
    "카드번호가 16자리고, 앞 자리 2자리가 51이상 55이하의 숫자라면 카드 브랜드는 %s를 반환 한다.",
    (cardNumber, expectedBrand) => {
      const { result } = renderHook(() =>
        useCardBrand({ cardNumbers: cardNumber })
      );
      expect(result.current.cardBrand).toBe(expectedBrand);
    }
  );

  it.each([
    ["36129856345902", "Diners"],
    ["36123478901234", "Diners"],
    ["36546738693309", "Diners"],
    ["36545465424549", "Diners"],
    ["36900495496990", "Diners"],
  ])(
    "카드번호가 16자리고, 앞 자리 2자리가 36이라면 카드 브랜드는 %s를 반환 한다.",
    (cardNumber, expectedBrand) => {
      const { result } = renderHook(() =>
        useCardBrand({ cardNumbers: cardNumber })
      );
      expect(result.current.cardBrand).toBe(expectedBrand);
    }
  );

  it.each([
    ["341298536345902", "AMEX"],
    ["341234782901234", "AMEX"],
    ["375467308693309", "AMEX"],
    ["375454054245549", "AMEX"],
    ["379004954969390", "AMEX"],
  ])(
    "카드번호가 15자리고, 앞 자리 2자리가 34나 37이라면 카드 브랜드는 %s를 반환 한다.",
    (cardNumber, expectedBrand) => {
      const { result } = renderHook(() =>
        useCardBrand({ cardNumbers: cardNumber })
      );
      expect(result.current.cardBrand).toBe(expectedBrand);
    }
  );

  it.each([
    ["6221265363459032", "UnionPay"],
    ["6221277829012344", "UnionPay"],
    ["6221283086933039", "UnionPay"],
    ["6221290542455409", "UnionPay"],
    ["6221309549693930", "UnionPay"],
    ["6221290542455409", "UnionPay"],
    ["6229240954969390", "UnionPay"],
  ])(
    "카드번호가 16자리고, 앞 자리 6자리가 622126~622925 이라면 카드 브랜드는 %s를 반환 한다.",
    (cardNumber, expectedBrand) => {
      const { result } = renderHook(() =>
        useCardBrand({ cardNumbers: cardNumber })
      );
      expect(result.current.cardBrand).toBe(expectedBrand);
    }
  );

  it.each([
    ["6241265363459032", "UnionPay"],
    ["6251277829012344", "UnionPay"],
    ["6261283086933039", "UnionPay"],
    ["6241290542455409", "UnionPay"],
    ["6251309549693930", "UnionPay"],
    ["6261290542455409", "UnionPay"],
  ])(
    "카드번호가 16자리고, 앞 자리 3자리가 624~626 이라면 카드 브랜드는 %s를 반환 한다.",
    (cardNumber, expectedBrand) => {
      const { result } = renderHook(() =>
        useCardBrand({ cardNumbers: cardNumber })
      );
      expect(result.current.cardBrand).toBe(expectedBrand);
    }
  );

  it.each([
    ["6282265363459032", "UnionPay"],
    ["6283277829012344", "UnionPay"],
    ["6284308693304339", "UnionPay"],
    ["6285290542455409", "UnionPay"],
    ["6286309549693930", "UnionPay"],
    ["6287290542455409", "UnionPay"],
    ["6288290542455409", "UnionPay"],
  ])(
    "카드번호가 16자리고, 앞 자리 3자리가 6282~6288 이라면 카드 브랜드는 %s를 반환 한다.",
    (cardNumber, expectedBrand) => {
      const { result } = renderHook(() =>
        useCardBrand({ cardNumbers: cardNumber })
      );
      expect(result.current.cardBrand).toBe(expectedBrand);
    }
  );
});
