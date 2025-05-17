import { renderHook, act } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import useCardBrand from "../src/lib/useCardBrand";
import { FORMAT_MARK } from "../src/lib/constants/systemConstants";

describe("useCardBrand 카드 브랜드 판별 테스트", () => {
  it("Visa prefix는 visa로 예측되어야 한다", () => {
    const { result } = renderHook(() => useCardBrand());
    const cardNumber = "4123-4567-8901-2345";

    act(() => {
      result.current.guessCardBrandByPrefix(cardNumber, FORMAT_MARK);
    });

    expect(result.current.cardBrand).toBe("visa");
  });

  it("MasterCard prefix는 masterCard로 예측되어야 한다", () => {
    const { result } = renderHook(() => useCardBrand());
    const cardNumber = "5212-3456-7890-1234";

    act(() => {
      result.current.guessCardBrandByPrefix(cardNumber, FORMAT_MARK);
    });

    expect(result.current.cardBrand).toBe("masterCard");
  });

  it("AMEX prefix는 AMEX로 예측되어야 한다", () => {
    const { result } = renderHook(() => useCardBrand());
    const cardNumber = "3412-345678-90123";

    act(() => {
      result.current.guessCardBrandByPrefix(cardNumber, FORMAT_MARK);
    });

    expect(result.current.cardBrand).toBe("AMEX");
  });

  it("Diners prefix는 diners로 예측되어야 한다", () => {
    const { result } = renderHook(() => useCardBrand());
    const cardNumber = "3612-345678-9012";

    act(() => {
      result.current.guessCardBrandByPrefix(cardNumber, FORMAT_MARK);
    });

    expect(result.current.cardBrand).toBe("diners");
  });

  it("UnionPay prefix는 unionPay로 예측되어야 한다", () => {
    const { result } = renderHook(() => useCardBrand());
    const cardNumber = "6221-2612-3456-7890";

    act(() => {
      result.current.guessCardBrandByPrefix(cardNumber, FORMAT_MARK);
    });

    expect(result.current.cardBrand).toBe("unionPay");
  });

  it("알 수 없는 prefix는 noBrand로 예측되어야 한다", () => {
    const { result } = renderHook(() => useCardBrand());
    const cardNumber = "9999-8888-7777-6666";

    act(() => {
      result.current.guessCardBrandByPrefix(cardNumber, FORMAT_MARK);
    });

    expect(result.current.cardBrand).toBe("noBrand");
  });

  it("Visa 카드는 4로 시작하고 16자리여야 한다", () => {
    const { result } = renderHook(() => useCardBrand());
    const cardNumber = "4123-4567-8910-1112";

    act(() => {
      result.current.justifyCardBrand(cardNumber, FORMAT_MARK);
    });

    expect(result.current.cardBrand).toBe("visa");
  });

  it("MasterCard 카드는 51~55로 시작하고 16자리여야 한다", () => {
    const { result } = renderHook(() => useCardBrand());
    const cardNumber = "5212-3456-7890-1234";

    act(() => {
      result.current.justifyCardBrand(cardNumber, FORMAT_MARK);
    });

    expect(result.current.cardBrand).toBe("masterCard");
  });

  it("AMEX 카드는 34 또는 37로 시작하고 15자리여야 한다", () => {
    const { result } = renderHook(() => useCardBrand());
    const cardNumber = "3412-345678-90123";

    act(() => {
      result.current.justifyCardBrand(cardNumber, FORMAT_MARK);
    });

    expect(result.current.cardBrand).toBe("AMEX");
  });

  it("Diners Club 카드는 36으로 시작하고 14자리여야 한다", () => {
    const { result } = renderHook(() => useCardBrand());
    const cardNumber = "3612-345678-9012";

    act(() => {
      result.current.justifyCardBrand(cardNumber, FORMAT_MARK);
    });

    expect(result.current.cardBrand).toBe("diners");
  });

  it("UnionPay 카드는 622126~622925, 624~626, 6282~6288로 시작하고 16자리여야 한다", () => {
    const { result } = renderHook(() => useCardBrand());
    const cardNumber = "6221-2612-3456-7890"; // 622126

    act(() => {
      result.current.justifyCardBrand(cardNumber, FORMAT_MARK);
    });

    expect(result.current.cardBrand).toBe("unionPay");
  });

  it("알 수 없는 번호는 noBrand로 반환되어야 한다", () => {
    const { result } = renderHook(() => useCardBrand());
    const cardNumber = "9999-0000-0000-0000";

    act(() => {
      result.current.justifyCardBrand(cardNumber, FORMAT_MARK);
    });

    expect(result.current.cardBrand).toBe("noBrand");
  });
});

describe("useCardBrand 카드 포맷팅 테스트", () => {
  it("16자리 숫자는 기본 포맷 [4,4,4,4]로 공백 구분자로 포맷팅된다", () => {
    const { result } = renderHook(() => useCardBrand());
    const cardNumber = "1234567812345678";
    act(() => {
      result.current.justifyCardBrand(cardNumber, FORMAT_MARK);
    });
    let answer = "";
    act(() => {
      answer = result.current.handleCardNumberFormat(cardNumber, FORMAT_MARK);
    });
    expect(answer).toBe("1234-5678-1234-5678");
  });
  it("AMEX 브랜드의 카드 번호는 [4,6,5]로 포맷팅된다", () => {
    const { result } = renderHook(() => useCardBrand());
    const cardNumber = "341234567890123";
    act(() => {
      result.current.justifyCardBrand(cardNumber, FORMAT_MARK);
    });
    let answer = "";
    act(() => {
      answer = result.current.handleCardNumberFormat(cardNumber, FORMAT_MARK);
    });
    expect(answer).toBe("3412-345678-90123");
  });
  it("MasterCard 브랜드의 카드 번호는 [4,4,4,4]로 포맷팅된다", () => {
    const { result } = renderHook(() => useCardBrand());
    const cardNumber = "5223456789012345";

    act(() => {
      result.current.justifyCardBrand(cardNumber, FORMAT_MARK);
    });

    let answer = "";
    act(() => {
      answer = result.current.handleCardNumberFormat(cardNumber, FORMAT_MARK);
    });

    expect(answer).toBe("5223-4567-8901-2345");
  });
  it("Diners 브랜드의 카드 번호는 [4,6,4]로 포맷팅된다", () => {
    const { result } = renderHook(() => useCardBrand());
    const cardNumber = "36123456789012";

    act(() => {
      result.current.justifyCardBrand(cardNumber, FORMAT_MARK);
    });

    let answer = "";
    act(() => {
      answer = result.current.handleCardNumberFormat(cardNumber, FORMAT_MARK);
    });

    expect(answer).toBe("3612-345678-9012");
  });
});
