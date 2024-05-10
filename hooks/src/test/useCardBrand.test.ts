import useCardBrands from "@/lib/useCardBrand";
import { renderHook } from "@testing-library/react";
import React from "react";

describe("useCardBrand", () => {
  describe("VISA 카드", () => {
    const VISA_NUMBERS = ["4", "41"];
    test.each(VISA_NUMBERS)(
      "카드 번호가 4로 시작하면 VISA를 반환한다.(%s)",
      () => {
        const { result } = renderHook(() => useCardBrands());

        VISA_NUMBERS.forEach((number) => {
          React.act(() => {
            result.current.identifyBrand(number);
          });
          expect(result.current.cardBrand.name).toBe("VISA");
        });
      }
    );
    const INVALID_VISA_NUMBERS = ["3", "5"];
    test.each(INVALID_VISA_NUMBERS)(
      "카드 번호가 4로 시작하지 않으면 VISA를 반환하지 않는다.(%s)",
      () => {
        const { result } = renderHook(() => useCardBrands());

        INVALID_VISA_NUMBERS.forEach((number) => {
          React.act(() => {
            result.current.identifyBrand(number);
          });
          expect(result.current.cardBrand.name).not.toBe("VISA");
        });
      }
    );
  });

  describe("MASTER 카드", () => {
    const MASTER_NUMBERS = ["51", "52", "53", "54", "55"];
    test.each(MASTER_NUMBERS)(
      "카드 번호가 51-55로 시작하면 MASTER를 반환한다.(%s)",
      () => {
        const { result } = renderHook(() => useCardBrands());

        MASTER_NUMBERS.forEach((number) => {
          React.act(() => {
            result.current.identifyBrand(number);
          });
          expect(result.current.cardBrand.name).toBe("MASTER_CARD");
        });
      }
    );
    const INVALID_MASTER_NUMBERS = ["50", "56"];
    test.each(INVALID_MASTER_NUMBERS)(
      "카드 번호가 51-55로 시작하지 않으면 MASTER를 반환하지 않는다.(%s)",
      () => {
        const { result } = renderHook(() => useCardBrands());

        INVALID_MASTER_NUMBERS.forEach((number) => {
          React.act(() => {
            result.current.identifyBrand(number);
          });
          expect(result.current.cardBrand.name).not.toBe("MASTER_CARD");
        });
      }
    );
  });

  describe("DINERS 카드", () => {
    const DINERS_NUMBERS = ["36", "361", "3623"];
    test.each(DINERS_NUMBERS)(
      "카드 번호가 36로 시작하면 DINERS를 반환한다.(%s)",
      () => {
        const { result } = renderHook(() => useCardBrands());

        DINERS_NUMBERS.forEach((number) => {
          React.act(() => {
            result.current.identifyBrand(number);
            expect(result.current.cardBrand.name).toBe("DINERS");
          });
        });
        const INVALID_DINERS_NUMBERS = ["34", "35"];
        test.each(INVALID_DINERS_NUMBERS)(
          "카드 번호가 36으로 시작하지 않으면 DINERS를 반환하지 않는다.(%s)",
          () => {
            const { result } = renderHook(() => useCardBrands());

            INVALID_DINERS_NUMBERS.forEach((number) => {
              React.act(() => {
                result.current.identifyBrand(number);
                expect(result.current.cardBrand.name).not.toBe("DINERS");
              });
            });
          }
        );
      }
    );
  });

  describe("AMEX 카드", () => {
    const AMEX_NUMBERS = ["34", "37"];
    test.each(AMEX_NUMBERS)(
      "카드 번호가 34, 37로 시작하면 AMEX를 반환한다.(%s)",
      () => {
        const { result } = renderHook(() => useCardBrands());

        AMEX_NUMBERS.forEach((number) => {
          React.act(() => {
            result.current.identifyBrand(number);
          });
          expect(result.current.cardBrand.name).toBe("AMEX");
        });
      }
    );
    const INVALID_AMEX_NUMBERS = ["32", "35", "36", "38"];
    test.each(INVALID_AMEX_NUMBERS)(
      "카드 번호가 34, 37로 시작하지 않으면 AMEX를 반환하지 않는다.(%s)",
      () => {
        const { result } = renderHook(() => useCardBrands());

        INVALID_AMEX_NUMBERS.forEach((number) => {
          React.act(() => {
            result.current.identifyBrand(number);
          });
          expect(result.current.cardBrand.name).not.toBe("AMEX");
        });
      }
    );
  });

  describe("UNION_PAY 카드", () => {
    const UNION_PAY_NUMBERS = [
      "622126",
      "622925",
      "624",
      "625",
      "626",
      "6282",
      "6288",
    ];

    test.each(UNION_PAY_NUMBERS)(
      "카드 번호가 622126-62292로 시작하면 UNION_PAY가 반환된다.(%s)",
      () => {
        const { result } = renderHook(() => useCardBrands());

        UNION_PAY_NUMBERS.forEach((number) => {
          React.act(() => {
            result.current.identifyBrand(number);
          });
          expect(result.current.cardBrand.name).toBe("UNION_PAY");
        });
      }
    );

    const INVALID_UNION_PAY_NUMBERS = [
      "622125",
      "622926",
      "623",
      "627",
      "6281",
      "6289",
    ];

    test.each(INVALID_UNION_PAY_NUMBERS)(
      "카드 번호가 622126-62292로 시작하지 않으면 UNION_PAY가 반환되지 않는다.(%s)",
      () => {
        const { result } = renderHook(() => useCardBrands());

        INVALID_UNION_PAY_NUMBERS.forEach((number) => {
          React.act(() => {
            result.current.identifyBrand(number);
          });
          expect(result.current.cardBrand.name).not.toBe("UNION_PAY가");
        });
      }
    );
  });
});
