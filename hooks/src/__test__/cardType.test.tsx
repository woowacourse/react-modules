import { renderHook } from "@testing-library/react";
import { useCardNumber } from "../lib";
import { act } from "react";
import { formatByCardType } from "../lib/formatByCardType";

describe("cardType 테스트", () => {
  it("VISA 카드 식별 테스트", () => {
    const { result } = renderHook(() => useCardNumber());

    act(() => {
      result.current.handleCardNumber("4321123412341234");
    });

    expect(result.current.cardType).toBe("VISA");
  });

  it("Master 카드 식별 테스트", () => {
    const { result } = renderHook(() => useCardNumber());

    act(() => {
      result.current.handleCardNumber("5221123412341234");
    });

    expect(result.current.cardType).toBe("MasterCard");
  });
  it("Diners 카드 식별 테스트", () => {
    const { result } = renderHook(() => useCardNumber());

    act(() => {
      result.current.handleCardNumber("36211234121234");
    });

    expect(result.current.cardType).toBe("Diners");
  });
  it("AMEX 카드 식별 테스트", () => {
    const { result } = renderHook(() => useCardNumber());

    act(() => {
      result.current.handleCardNumber("341212345612345");
    });

    expect(result.current.cardType).toBe("AMEX");
  });
  it("UnionPay 카드 식별 테스트", () => {
    const { result } = renderHook(() => useCardNumber());

    act(() => {
      result.current.handleCardNumber("6221261212341234");
    });

    expect(result.current.cardType).toBe("UnionPay");
  });
});

describe("cardType에 따른 포맷팅 테스트", () => {
  it("VISA 카드는 4-4-4-4 포맷으로 출력되어야 한다.", () => {
    const result = formatByCardType("4111111111111111", "VISA");
    expect(result).toBe("4111 1111 1111 1111");
  });

  it("MasterCard 카드는 4-4-4-4 포맷으로 출력되어야 한다.", () => {
    const result = formatByCardType("5555555555554444", "MasterCard");
    expect(result).toBe("5555 5555 5555 4444");
  });

  it("AMEX 카드는 4-6-5 포맷으로 출력되어야 한다.", () => {
    const result = formatByCardType("341234567890123", "AMEX");
    expect(result).toBe("3412 345678 90123");
  });

  it("Diners 카드는 4-6-4 포맷으로 출력되어야 한다.", () => {
    const result = formatByCardType("36211234561234", "Diners");
    expect(result).toBe("3621 123456 1234");
  });

  it("UnionPay 카드는 4-4-4-4 포맷으로 출력되어야 한다.", () => {
    const result = formatByCardType("6221261234567890", "UnionPay");
    expect(result).toBe("6221 2612 3456 7890");
  });
});
