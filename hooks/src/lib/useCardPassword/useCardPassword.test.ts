import { renderHook } from "@testing-library/react";
import { ChangeEvent, act } from "react";
import useCardPassword from "./useCardPassword";

describe("useCardPassword", () => {
  describe("유효성 검사", () => {
    it.each(["soosoo", "현수연", "^,^~"])(
      "숫자가 아닌 값(%s)을 입력하면 에러 상태가 true가 된다.",
      (userInput) => {
        const { result } = renderHook(() => useCardPassword());

        act(() => {
          result.current.cardPassword.onChange({
            target: { value: userInput },
          } as ChangeEvent<HTMLInputElement>);
        });

        expect(result.current.cardPassword.error.state).toBeTruthy();
      }
    );

    it.each(["1", "222"])(
      "입력한 비밀번호가 2자리가 아닌 값(%s)이라면 에러 상태가 true가 된다.",
      (userInput) => {
        const { result } = renderHook(() => useCardPassword());

        act(() => {
          result.current.cardPassword.onChange({
            target: { value: userInput },
          } as ChangeEvent<HTMLInputElement>);
        });

        expect(result.current.cardPassword.error.state).toBeTruthy();
      }
    );
  });
});
