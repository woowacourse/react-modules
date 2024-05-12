import { renderHook } from "@testing-library/react";
import { ChangeEvent, act } from "react";
import useCardCVC from "./useCardCVC";

describe("useCardCVC", () => {
  describe("유효성 검사", () => {
    it.each(["12", "3456"])(
      "3자리의 입력값(%s)이 아닌 경우, 에러 상태가 true가 된다.",
      (userInput) => {
        const { result } = renderHook(() => useCardCVC());

        act(() => {
          result.current.cardCVC.onChange({
            target: { value: userInput },
          } as ChangeEvent<HTMLInputElement>);
        });

        expect(result.current.cardCVC.error.state).toBeTruthy();
      }
    );

    it.each(["soosoo", "현수연", "^,^~"])(
      "숫자가 아닌 값(%s)을 입력하면 에러 상태가 true가 된다.",
      (userInput) => {
        const { result } = renderHook(() => useCardCVC());

        act(() => {
          result.current.cardCVC.onChange({
            target: { value: userInput },
          } as ChangeEvent<HTMLInputElement>);
        });

        expect(result.current.cardCVC.error.state).toBeTruthy();
      }
    );
  });
});
