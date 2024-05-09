import useMultiCardNumbers from "@/lib/useMultiCardNumbers";
import { renderHook, waitFor } from "@testing-library/react";
import React, { ChangeEvent, act } from "react";

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
      const { result } = renderHook(() => useMultiCardNumbers());

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
      const { result } = renderHook(() => useMultiCardNumbers());

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

  const formatTest1 = ["6221260000000000", ["6221", "2600", "0000", "0000"]];
  const formatTest2 = ["62292500", ["6229", "2500"]];
  const formatTest3 = ["62600000", ["6260", "0000"]];

  const formatTestList = [formatTest1, formatTest2, formatTest3];
  test.each(formatTestList)(
    "'%s'를 입력하면 [4,4,4,4] 로 포맷팅 된다.",
    async (input, output) => {
      const { result } = renderHook(() => useMultiCardNumbers());
      for (let i = 0; i < input.length; i++) {
        await act(async () => {
          result.current.onChange({
            target: { value: input.slice(0, i + 1) },
          } as ChangeEvent<HTMLInputElement>);
        });
      }

      await waitFor(() => {
        expect(result.current.formattedNumbers).toEqual(output);
      });
    }
  );
});
