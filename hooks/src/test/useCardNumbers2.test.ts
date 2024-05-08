import useCardNumbers2 from "@/lib/useCardNumbers2";
import { renderHook } from "@testing-library/react";
import React, { ChangeEvent } from "react";

/*VISA : 4로 시작하는 16자리 숫자*/
describe("VISA 카드사 번호 테스트", () => {
  const VISA_NUMBERS = ["4", "41"];
  test.each(VISA_NUMBERS)(
    "%s를 입력하면 VISA 카드 번호 유효성 검사 테스트를 통과한다.",
    () => {
      const { result } = renderHook(() => useCardNumbers2());

      VISA_NUMBERS.forEach((number) => {
        React.act(() => {
          result.current.onChange({
            target: { value: number },
          } as ChangeEvent<HTMLInputElement>);
        });
        expect(result.current.cardBrand).toBe("VISA");
      });
    }
  );

  const INVALID_VISA_NUMBERS = ["3", "5"];
  test.each(INVALID_VISA_NUMBERS)(
    "%s를 입력하면 VISA 카드 번호 유효성 검사 테스트를 통과하지 않는다.",
    () => {
      const { result } = renderHook(() => useCardNumbers2());

      INVALID_VISA_NUMBERS.forEach((number) => {
        React.act(() => {
          result.current.onChange({
            target: { value: number },
          } as ChangeEvent<HTMLInputElement>);
        });
        expect(result.current.cardBrand).not.toBe("VISA");
      });
    }
  );
});

/*MASTER : 51~55로 시작하는 16자리 숫자*/
describe("MASTER 카드사 번호 테스트", () => {
  const MASTER_NUMBERS = ["51", "52", "53", "54", "55"];
  test.each(MASTER_NUMBERS)(
    "%s를 입력하면 MASTER 카드 번호 유효성 검사 테스트를 통과한다.",
    () => {
      const { result } = renderHook(() => useCardNumbers2());

      MASTER_NUMBERS.forEach((number) => {
        React.act(() => {
          result.current.onChange({
            target: { value: number },
          } as ChangeEvent<HTMLInputElement>);
        });
        expect(result.current.cardBrand).toBe("MASTER_CARD");
      });
    }
  );
  const INVALID_MASTER_NUMBERS = ["50", "56"];
  test.each(INVALID_MASTER_NUMBERS)(
    "%s를 입력하면 MASTER 카드 번호 유효성 검사 테스트를 통과하지 않는다.",
    () => {
      const { result } = renderHook(() => useCardNumbers2());

      INVALID_MASTER_NUMBERS.forEach((number) => {
        React.act(() => {
          result.current.onChange({
            target: { value: number },
          } as ChangeEvent<HTMLInputElement>);
        });
        expect(result.current.cardBrand).not.toBe("MASTER_CARD");
      });
    }
  );
});

/*AMEX : 34 또는 37로로 시작하는 15자리 숫자*/
describe("AMEX 카드사 번호 테스트", () => {
  const AMEX_NUMBERS = ["34", "37"];
  test.each(AMEX_NUMBERS)(
    "%s를 입력하면 AMEX 카드 번호 유효성 검사 테스트를 통과한다.",
    () => {
      const { result } = renderHook(() => useCardNumbers2());

      AMEX_NUMBERS.forEach((number) => {
        React.act(() => {
          result.current.onChange({
            target: { value: number },
          } as ChangeEvent<HTMLInputElement>);
        });
        expect(result.current.cardBrand).toBe("AMEX");
      });
    }
  );
  const INVALID_AMEX_NUMBERS = ["32", "35", "36", "38"];
  test.each(INVALID_AMEX_NUMBERS)(
    "%s를 입력하면 AMEX 카드 번호 유효성 검사 테스트를 통과하지 않는다.",
    () => {
      const { result } = renderHook(() => useCardNumbers2());

      INVALID_AMEX_NUMBERS.forEach((number) => {
        React.act(() => {
          result.current.onChange({
            target: { value: number },
          } as ChangeEvent<HTMLInputElement>);
        });
        expect(result.current.cardBrand).not.toBe("AMEX");
      });
    }
  );
});
/*DINERS :36으로 시작하는 14자리 숫자*/
describe("DINERS 카드사 번호 테스트", () => {
  const DINERS_NUMBERS = ["36", "361", "3623"];
  test.each(DINERS_NUMBERS)(
    "%s를 입력하면 AMEX 카드 번호 유효성 검사 테스트를 통과하지 않는다.",
    () => {
      const { result } = renderHook(() => useCardNumbers2());

      DINERS_NUMBERS.forEach((number) => {
        React.act(() => {
          result.current.onChange({
            target: { value: number },
          } as ChangeEvent<HTMLInputElement>);
        });
        expect(result.current.cardBrand).toBe("DINERS");
      });
    }
  );
  const INVALID_DINERS_NUMBERS = ["34", "35"];
  test.each(INVALID_DINERS_NUMBERS)(
    "%s를 입력하면 AMEX 카드 번호 유효성 검사 테스트를 통과하지 않는다.",
    () => {
      const { result } = renderHook(() => useCardNumbers2());

      INVALID_DINERS_NUMBERS.forEach((number) => {
        React.act(() => {
          result.current.onChange({
            target: { value: number },
          } as ChangeEvent<HTMLInputElement>);
        });
        expect(result.current.cardBrand).not.toBe("DINERS");
      });
    }
  );
});

/*UNION_PAY :622126~622925, 624~626,6282~6288로 시작하는 16자리 숫자*/
describe("UNION_PAY 카드사 번호 테스트", () => {
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
    "%s를 입력하면 AMEX 카드 번호 유효성 검사 테스트를 통과하지 않는다.",
    () => {
      const { result } = renderHook(() => useCardNumbers2());

      UNION_PAY_NUMBERS.forEach((number) => {
        React.act(() => {
          result.current.onChange({
            target: { value: number },
          } as ChangeEvent<HTMLInputElement>);
        });
        expect(result.current.cardBrand).not.toBe("DINERS");
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
    "%s를 입력하면 AMEX 카드 번호 유효성 검사 테스트를 통과하지 않는다.",
    () => {
      const { result } = renderHook(() => useCardNumbers2());

      INVALID_UNION_PAY_NUMBERS.forEach((number) => {
        React.act(() => {
          result.current.onChange({
            target: { value: number },
          } as ChangeEvent<HTMLInputElement>);
        });
        expect(result.current.cardBrand).not.toBe("DINERS");
      });
    }
  );
});
