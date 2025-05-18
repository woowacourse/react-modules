import { renderHook, act } from "@testing-library/react";
import { useCardNetwork } from "../src/useCardNetwork/useCardNetwork";

describe("useCardNetwork hook 테스트", () => {
  it("매칭되는 카드 네트워크가 없으면 빈 문자열을 반환한다.", () => {
    const cardNumbers = {
      FIRST: "",
      SECOND: "",
      THIRD: "",
      FOURTH: "",
    };
    const { result } = renderHook(() => useCardNetwork(cardNumbers));

    expect(result.current.cardNetwork).toEqual("");
  });

  describe("Diners 네트워크 테스트", () => {
    it("36으로 시작하는 14자리 숫자이면 cardNetwork는 Diners이다.", () => {
      const cardNumbers = {
        FIRST: "3612",
        SECOND: "3456",
        THIRD: "7890",
        FOURTH: "12",
      };
      const { result } = renderHook(() => useCardNetwork(cardNumbers));

      expect(result.current.cardNetwork).toBe("DINERS");
      expect(result.current.error).toBe(false);
    });

    it.each([
      {
        FIRST: "3612",
        SECOND: "3456",
        THIRD: "7890",
        FOURTH: "1",
      },
      {
        FIRST: "3612",
        SECOND: "3456",
        THIRD: "7890",
        FOURTH: "123",
      },
    ])(
      "Diners 카드 네트워크는 14자리 숫자가 아니면 에러를 반환한다.",
      (cardNumbers) => {
        const { result } = renderHook(() => useCardNetwork(cardNumbers));

        expect(result.current.cardNetwork).toBe("DINERS");
        expect(result.current.error).toBe(true);
      }
    );
  });

  describe("AMEX 네트워크 테스트", () => {
    it.each([
      {
        cardNumbers: {
          FIRST: "3412",
          SECOND: "3456",
          THIRD: "7890",
          FOURTH: "123",
        },
        startWith: "34",
      },
      {
        cardNumbers: {
          FIRST: "3712",
          SECOND: "3456",
          THIRD: "7890",
          FOURTH: "123",
        },
        startWith: "37",
      },
    ])(
      "$startWith로 시작하는 15자리 숫자이면 cardNetwork는 AMEX이다.",
      ({ cardNumbers, startWtih }) => {
        const { result } = renderHook(() => useCardNetwork(cardNumbers));

        expect(result.current.cardNetwork).toBe("AMEX");
        expect(result.current.error).toBe(false);
      }
    );

    it.each([
      {
        cardNumbers: {
          FIRST: "3412",
          SECOND: "3456",
          THIRD: "7890",
          FOURTH: "1234",
        },
        startWith: "34",
      },
      {
        cardNumbers: {
          FIRST: "3712",
          SECOND: "3456",
          THIRD: "7890",
          FOURTH: "12",
        },
        startWith: "37",
      },
    ])(
      "AMEX 카드 네트워크는 15자리 숫자가 아니면 에러를 반환한다.",
      ({ cardNumbers, startWtih }) => {
        const { result } = renderHook(() => useCardNetwork(cardNumbers));

        expect(result.current.cardNetwork).toBe("AMEX");
        expect(result.current.error).toBe(true);
      }
    );
  });

  describe("UnionPay 네트워크 테스트", () => {
    it.each([
      {
        cardNumbers: {
          FIRST: "6221",
          SECOND: "2612",
          THIRD: "3456",
          FOURTH: "7890",
        },
        startWith: "622126",
      },
      {
        cardNumbers: {
          FIRST: "6221",
          SECOND: "2912",
          THIRD: "3456",
          FOURTH: "7890",
        },
        startWith: "622925",
      },
      {
        cardNumbers: {
          FIRST: "6240",
          SECOND: "1234",
          THIRD: "5678",
          FOURTH: "9012",
        },
        startWith: "624",
      },
      {
        cardNumbers: {
          FIRST: "6260",
          SECOND: "1234",
          THIRD: "5678",
          FOURTH: "9012",
        },
        startWith: "626",
      },
      {
        cardNumbers: {
          FIRST: "6282",
          SECOND: "1234",
          THIRD: "5678",
          FOURTH: "9012",
        },
        startWith: "6282",
      },
      {
        cardNumbers: {
          FIRST: "6288",
          SECOND: "1234",
          THIRD: "5678",
          FOURTH: "9012",
        },
        startWith: "6288",
      },
    ])(
      "$startWith로 시작하는 15자리 숫자이면 cardNetwork는 AMEX이다.",
      ({ cardNumbers, startWtih }) => {
        const { result } = renderHook(() => useCardNetwork(cardNumbers));

        expect(result.current.cardNetwork).toBe("UNION_PAY");
        expect(result.current.error).toBe(false);
      }
    );

    it.each([
      {
        cardNumbers: {
          FIRST: "6282",
          SECOND: "1234",
          THIRD: "5678",
          FOURTH: "901",
        },
        startWith: "6282",
      },
      {
        cardNumbers: {
          FIRST: "6288",
          SECOND: "1234",
          THIRD: "5678",
          FOURTH: "901",
        },
        startWith: "6288",
      },
    ])(
      "Diners 카드 네트워크는 16자리 숫자가 아니면 에러를 반환한다.",
      ({ cardNumbers, startWtih }) => {
        const { result } = renderHook(() => useCardNetwork(cardNumbers));

        expect(result.current.cardNetwork).toBe("UNION_PAY");
        expect(result.current.error).toBe(true);
      }
    );
  });

  describe("Visa 네트워크 테스트", () => {
    it("4으로 시작하는 16자리 숫자이면 cardNetwork는 Visa이다.", () => {
      const cardNumbers = {
        FIRST: "4612",
        SECOND: "3456",
        THIRD: "7890",
        FOURTH: "1234",
      };
      const { result } = renderHook(() => useCardNetwork(cardNumbers));

      expect(result.current.cardNetwork).toBe("VISA");
      expect(result.current.error).toBe(false);
    });

    it("Visas 카드 네트워크는 14자리 숫자가 아니면 에러를 반환한다.", () => {
      const cardNumbers = {
        FIRST: "4612",
        SECOND: "3456",
        THIRD: "7890",
        FOURTH: "123",
      };
      const { result } = renderHook(() => useCardNetwork(cardNumbers));

      expect(result.current.cardNetwork).toBe("VISA");
      expect(result.current.error).toBe(true);
    });
  });

  describe("MasterCard 네트워크 테스트", () => {
    it.each([
      {
        cardNumbers: {
          FIRST: "5112",
          SECOND: "3456",
          THIRD: "7890",
          FOURTH: "1234",
        },
        startWith: "51",
      },
      {
        cardNumbers: {
          FIRST: "5512",
          SECOND: "3456",
          THIRD: "7890",
          FOURTH: "1234",
        },
        startWith: "55",
      },
    ])(
      "$startWith로 시작하는 16자리 숫자이면 cardNetwork는 MasterCard이다.",
      ({ cardNumbers, startWtih }) => {
        const { result } = renderHook(() => useCardNetwork(cardNumbers));

        expect(result.current.cardNetwork).toBe("MASTER_CARD");
        expect(result.current.error).toBe(false);
      }
    );

    it.each([
      {
        cardNumbers: {
          FIRST: "5112",
          SECOND: "3456",
          THIRD: "7890",
          FOURTH: "123",
        },
        startWith: "51",
      },
      {
        cardNumbers: {
          FIRST: "5512",
          SECOND: "3456",
          THIRD: "7890",
          FOURTH: "123",
        },
        startWith: "55",
      },
    ])(
      "MasterCard 카드 네트워크는 15자리 숫자가 아니면 에러를 반환한다.",
      ({ cardNumbers, startWtih }) => {
        const { result } = renderHook(() => useCardNetwork(cardNumbers));

        expect(result.current.cardNetwork).toBe("MASTER_CARD");
        expect(result.current.error).toBe(true);
      }
    );
  });

  describe("사용자 커스텀 네트워크 테스트", () => {
    it.each([
      {
        cardNumbers: {
          FIRST: "3528",
          SECOND: "3456",
          THIRD: "7890",
          FOURTH: "1234",
        },
        startWith: "3528",
      },
      {
        cardNumbers: {
          FIRST: "3589",
          SECOND: "3456",
          THIRD: "7890",
          FOURTH: "1234",
        },
        startWith: "3589",
      },
    ])(
      "$startWith로 시작하는 16자리 숫자이면 cardNetwork는 JSB이다.",
      ({ cardNumbers, startWtih }) => {
        const userCardNetworkPatterns = {
          JSB: {
            PATTERN: /^(3528|3589)/,
            FORMAT_PATTERN: /^(\d{4})(\d{4})(\d{4})(\d{4})$/,
            LENGTH: 16,
          },
        };
        const { result } = renderHook(() =>
          useCardNetwork(cardNumbers, userCardNetworkPatterns)
        );

        expect(result.current.cardNetwork).toBe("JSB");
        expect(result.current.error).toBe(false);
      }
    );

    it.each([
      {
        cardNumbers: {
          FIRST: "3528",
          SECOND: "3456",
          THIRD: "7890",
          FOURTH: "123",
        },
        startWith: "3528",
      },
      {
        cardNumbers: {
          FIRST: "3589",
          SECOND: "3456",
          THIRD: "7890",
          FOURTH: "123",
        },
        startWith: "3589",
      },
    ])(
      "$startWith로 시작하는 16자리 숫자이면 cardNetwork는 JSB이다.",
      ({ cardNumbers, startWtih }) => {
        const userCardNetworkPatterns = {
          JSB: {
            PATTERN: /^(3528|3589)/,
            LENGTH: 16,
          },
        };
        const { result } = renderHook(() =>
          useCardNetwork(cardNumbers, userCardNetworkPatterns)
        );

        expect(result.current.cardNetwork).toBe("JSB");
        expect(result.current.error).toBe(true);
      }
    );
  });
});
