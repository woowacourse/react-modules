import { renderHook } from "@testing-library/react";
import { ChangeEvent, act } from "react";
import useCardOwner from "./useCardOwner";

describe("useCardOwner", () => {
  describe("유효성 검사", () => {
    it.each(["12345", "호프짱", "!@#$^&"])(
      "영어가 아닌 값(%s)을 입력하면 에러 상태가 true가 된다.",
      (userInput) => {
        const { result } = renderHook(() => useCardOwner());

        act(() => {
          result.current.cardOwner.onChange({
            target: { value: userInput },
          } as ChangeEvent<HTMLInputElement>);
        });

        expect(result.current.cardOwner.error.state).toBeTruthy();
      }
    );
  });
});
