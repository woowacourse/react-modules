import useMultiCardNumbers from "@/lib/useMultiCardNumbers";
import { renderHook, waitFor } from "@testing-library/react";
import React, { ChangeEvent, act } from "react";
/*DINERS :36으로 시작하는 14자리 숫자*/
describe("DINERS 카드사 번호 테스트", () => {
  const DINERS_NUMBERS = ["36", "361", "3623"];
  test.each(DINERS_NUMBERS)(
    "%s를 입력하면 AMEX 카드 번호 유효성 검사 테스트를 통과하지 않는다.",
    () => {
      const { result } = renderHook(() => useMultiCardNumbers());

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
      const { result } = renderHook(() => useMultiCardNumbers());

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

  const formatTest1 = ["36000000000000", ["3600", "000000", "0000"]];
  const formatTest2 = ["3611111111", ["3611", "111111"]];
  const formatTest3 = ["36222", ["3622", "2"]];

  const formatTestList = [formatTest1, formatTest2, formatTest3];
  test.each(formatTestList)(
    "'%s'를 입력하면 [4,6,4] 로 포맷팅 된다.",
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
