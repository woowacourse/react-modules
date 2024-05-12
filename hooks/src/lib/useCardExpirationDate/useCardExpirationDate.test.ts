import { renderHook } from "@testing-library/react";
import { ChangeEvent, act } from "react";
import useCardExpirationDate from "./useCardExpirationDate";

describe("useCardExpirationDate", () => {
  describe("유효성 검사", () => {
    it.each(["soosoo", "현수연", "^,^~"])(
      "숫자가 아닌 다른 값(%s)을 입력하면, 에러 상태가 true가 된다.",
      (userInput) => {
        const { result } = renderHook(() => useCardExpirationDate());

        act(() => {
          result.current.month.onChange({
            target: { value: userInput },
          } as ChangeEvent<HTMLInputElement>);

          result.current.year.onChange({
            target: { value: userInput },
          } as ChangeEvent<HTMLInputElement>);
        });

        expect(result.current.month.error.state).toBeTruthy();
        expect(result.current.year.error.state).toBeTruthy();
      }
    );

    it.each([
      ["04", "24"],
      ["12", "19"],
    ])("유효기간이 만료된 카드 입력 시 에러 상태가 true가 된다.", (month, year) => {
      const { result } = renderHook(() => useCardExpirationDate());

      act(() => {
        result.current.month.onChange({
          target: { value: month },
        } as ChangeEvent<HTMLInputElement>);

        result.current.year.onChange({
          target: { value: year },
        } as ChangeEvent<HTMLInputElement>);
      });

      expect(result.current.month.error.state).toBeTruthy();
    });

    it.each(["1", "333"])(
      "2자리 숫자가 아닌 값(%s)을 입력하면, 에러 상태가 true가 된다.",
      (userInput) => {
        const { result } = renderHook(() => useCardExpirationDate());

        act(() => {
          result.current.month.onChange({
            target: { value: userInput },
          } as ChangeEvent<HTMLInputElement>);

          result.current.year.onChange({
            target: { value: userInput },
          } as ChangeEvent<HTMLInputElement>);
        });

        expect(result.current.month.error.state).toBeTruthy();
        expect(result.current.year.error.state).toBeTruthy();
      }
    );
  });
});
