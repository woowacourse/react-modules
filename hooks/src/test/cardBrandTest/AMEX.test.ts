import useMultiCardNumbers from "@/lib/useMultiCardNumbers";
import { renderHook, waitFor } from "@testing-library/react";
import React, { ChangeEvent, act } from "react";

/*AMEX : 34 또는 37로로 시작하는 15자리 숫자*/
describe("AMEX 카드사 번호 테스트", () => {
  const AMEX_NUMBERS = ["34", "37"];
  test.each(AMEX_NUMBERS)(
    "%s를 입력하면 AMEX 카드 번호 유효성 검사 테스트를 통과한다.",
    () => {
      const { result } = renderHook(() => useMultiCardNumbers());

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
      const { result } = renderHook(() => useMultiCardNumbers());

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

  const formatTest1 = ["340000000000000", ["3400", "000000", "00000"]];
  const formatTest2 = ["3411111111", ["3411", "111111"]];
  const formatTest3 = ["34222", ["3422", "2"]];

  const formatTestList = [formatTest1, formatTest2, formatTest3];
  test.each(formatTestList)(
    "'%s'를 입력하면 [4,6,5] 로 포맷팅 된다.",
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
