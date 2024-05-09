import useMultiCardNumbers from "@/lib/useMultiCardNumbers";
import { renderHook, waitFor } from "@testing-library/react";
import React, { ChangeEvent, act } from "react";

/*VISA : 4로 시작하는 16자리 숫자*/
describe("VISA 카드사 번호 테스트", () => {
  const VISA_NUMBERS = ["4", "41"];
  test.each(VISA_NUMBERS)(
    "%s를 입력하면 VISA 카드 번호 유효성 검사 테스트를 통과한다.",
    () => {
      const { result } = renderHook(() => useMultiCardNumbers());

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
      const { result } = renderHook(() => useMultiCardNumbers());

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

  const formatTest1 = ["4000000000000000", ["4000", "0000", "0000", "0000"]];
  const formatTest2 = ["40000000", ["4000", "0000"]];

  const formatTestList = [formatTest1, formatTest2];
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
