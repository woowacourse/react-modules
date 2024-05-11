import { useMultiCardNumbers } from "@/lib";
import { renderHook } from "@testing-library/react";
import { ChangeEvent, act } from "react";

describe("카드 번호 포맷팅", () => {
  const DinersNumbers = [
    ["36000000000000", ["3600", "000000", "0000"]],
    ["3611111111", ["3611", "111111"]],
    ["36222", ["3622", "2"]],
  ];

  test.each(DinersNumbers)(
    "DINERS 카드는 [4,6,4] 로 포맷팅 된다.(%s)",
    (input, output) => {
      const { result } = renderHook(() => useMultiCardNumbers());

      act(() => {
        result.current.onChange({
          target: { value: input },
        } as ChangeEvent<HTMLInputElement>);
      });

      expect(result.current.formattedNumbers).toEqual(output);
    }
  );

  const AmexNumbers = [
    ["340000000000000", ["3400", "000000", "00000"]],
    ["3411111111", ["3411", "111111"]],
    ["34222", ["3422", "2"]],
  ];

  test.each(AmexNumbers)(
    "AMEX 카드는 [4,6,5] 로 포맷팅 된다.(%s)",
    (input, output) => {
      const { result } = renderHook(() => useMultiCardNumbers());

      act(() => {
        result.current.onChange({
          target: { value: input },
        } as ChangeEvent<HTMLInputElement>);
      });

      expect(result.current.formattedNumbers).toEqual(output);
    }
  );

  const MasterNumber = [
    ["5100000000000000", ["5100", "0000", "0000", "0000"]],
    ["55000000", ["5500", "0000"]],
  ];

  test.each(MasterNumber)(
    "MASTER 카드는 [4,4,4,4] 로 포맷팅 된다.(%s)",
    (input, output) => {
      const { result } = renderHook(() => useMultiCardNumbers());

      act(() => {
        result.current.onChange({
          target: { value: input },
        } as ChangeEvent<HTMLInputElement>);
      });

      expect(result.current.formattedNumbers).toEqual(output);
    }
  );

  const UnionPayNumbers = [
    ["6221260000000000", ["6221", "2600", "0000", "0000"]],
    ["62292500", ["6229", "2500"]],
    ["62600000", ["6260", "0000"]],
  ];

  test.each(UnionPayNumbers)(
    "UNION_PAY 카드는 [4,4,4,4] 로 포맷팅 된다.(%s)",
    (input, output) => {
      const { result } = renderHook(() => useMultiCardNumbers());

      act(() => {
        result.current.onChange({
          target: { value: input },
        } as ChangeEvent<HTMLInputElement>);
      });

      expect(result.current.formattedNumbers).toEqual(output);
    }
  );

  const VisaNumbers = [
    ["4000000000000000", ["4000", "0000", "0000", "0000"]],
    ["40000000", ["4000", "0000"]],
  ];

  test.each(VisaNumbers)(
    "VISA 카드는 [4,4,4,4] 로 포맷팅 된다.(%s)",
    (input, output) => {
      const { result } = renderHook(() => useMultiCardNumbers());

      act(() => {
        result.current.onChange({
          target: { value: input },
        } as ChangeEvent<HTMLInputElement>);
      });

      expect(result.current.formattedNumbers).toEqual(output);
    }
  );
});
