import { renderHook, act } from "@testing-library/react";
import { useFormattedCardNumbers } from "../src/useFormattedCardNumber/useFormattedCardNumber";

describe("useFormattedCardNumbers hook 테스트", () => {
  it("매칭되는 카드 네트워크 포맷터가 없으면 빈 문자열을 반환한다.", () => {
    const cardNumbers = {
      FIRST: "",
      SECOND: "",
      THIRD: "",
      FOURTH: "",
    };
    const { result } = renderHook(() => useFormattedCardNumbers(cardNumbers));

    expect(result.current.formattedCardNumbers).toEqual("");
  });

  it("Diners 포맷 결과", () => {
    const cardNumbers = {
      FIRST: "3612",
      SECOND: "3456",
      THIRD: "7890",
      FOURTH: "12",
    };
    const { result } = renderHook(() => useFormattedCardNumbers(cardNumbers));

    expect(result.current.formattedCardNumbers).toEqual("3612-345678-9012");
  });

  it("Visa 포맷 결과", () => {
    const cardNumbers = {
      FIRST: "4612",
      SECOND: "3456",
      THIRD: "7890",
      FOURTH: "1234",
    };
    const { result } = renderHook(() => useFormattedCardNumbers(cardNumbers));

    expect(result.current.formattedCardNumbers).toEqual("4612-3456-7890-1234");
  });

  it("MasterCard 포맷 결과", () => {
    const cardNumbers = {
      FIRST: "5112",
      SECOND: "3456",
      THIRD: "7890",
      FOURTH: "1234",
    };
    const { result } = renderHook(() => useFormattedCardNumbers(cardNumbers));

    expect(result.current.formattedCardNumbers).toEqual("5112-3456-7890-1234");
  });

  it("AMEX 포맷 결과", () => {
    const cardNumbers = {
      FIRST: "3456",
      SECOND: "3456",
      THIRD: "7890",
      FOURTH: "123",
    };
    const { result } = renderHook(() => useFormattedCardNumbers(cardNumbers));

    expect(result.current.formattedCardNumbers).toEqual("3456-345678-90123");
  });

  it("UnionPay 포맷 결과", () => {
    const cardNumbers = {
      FIRST: "6282",
      SECOND: "3456",
      THIRD: "7890",
      FOURTH: "1234",
    };
    const { result } = renderHook(() => useFormattedCardNumbers(cardNumbers));

    expect(result.current.formattedCardNumbers).toEqual("6282-3456-7890-1234");
  });

  it("카드 길이가 부족한 경우 포맷 결과", () => {
    const cardNumbers = {
      FIRST: "6282",
      SECOND: "3456",
      THIRD: "7890",
      FOURTH: "",
    };
    const { result } = renderHook(() => useFormattedCardNumbers(cardNumbers));

    expect(result.current.formattedCardNumbers).toEqual("");
    expect(result.current.error).toBe(true);
  });

  it("카드 포맷터가 없는 경우 포맷 결과", () => {
    const cardNumbers = {
      FIRST: "1182",
      SECOND: "3456",
      THIRD: "7890",
      FOURTH: "",
    };
    const { result } = renderHook(() => useFormattedCardNumbers(cardNumbers));

    expect(result.current.formattedCardNumbers).toEqual("");
    expect(result.current.error).toBe(true);
  });

  it("사용자 저의 카드 포맷터의 경우 포맷 결과", () => {
    const cardNumbers = {
      FIRST: "3589",
      SECOND: "3456",
      THIRD: "7890",
      FOURTH: "1234",
    };
    const userCardNetworkPatterns = {
      JSB: {
        PATTERN: /^(3528|3589)/,
        FORMAT_PATTERN: /^(\d{4})(\d{4})(\d{4})(\d{4})$/,
        FORMAT_TEMPLATE: "$1-$2-$3-$4",
        LENGTH: 16,
      },
    };
    const { result } = renderHook(() =>
      useFormattedCardNumbers(cardNumbers, userCardNetworkPatterns)
    );

    expect(result.current.formattedCardNumbers).toEqual("3589-3456-7890-1234");
    expect(result.current.error).toBe(false);
  });
});
