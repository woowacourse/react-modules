import useMultiCardNumbers from "@/lib/useMultiCardNumbers";
import { renderHook, waitFor } from "@testing-library/react";
import React, { ChangeEvent, act } from "react";

describe("MASTER 카드사 번호 테스트", () => {
  const MASTER_NUMBERS = ["51", "52", "53", "54", "55"];
  test.each(MASTER_NUMBERS)(
    "%s를 입력하면 MASTER 카드 번호 유효성 검사 테스트를 통과한다.",
    () => {
      const { result } = renderHook(() => useMultiCardNumbers());

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
      const { result } = renderHook(() => useMultiCardNumbers());

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

  const formatTest1 = ["5100000000000000", ["5100", "0000", "0000", "0000"]];
  const formatTest2 = ["55000000", ["5500", "0000"]];

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
