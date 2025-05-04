import { renderHook, act } from "@testing-library/react";
import useCardNumbers from "./useCardNumbers";

test("4자리 숫자가 입력되면 정상 작동된다.", () => {
  const { result } = renderHook(() => useCardNumbers());

  act(() => {
    result.current.handleCardNumberChange("1234", 0);
  });

  expect(result.current.error[0].errorMessage).toBe("");
  expect(result.current.error[0].isValid).toBe(false);
  expect(result.current.numbers[0]).toBe("1234");
});

test("숫자가 아닌 값을 validate 하면 에러 메시지가 세팅된다", () => {
  const { result } = renderHook(() => useCardNumbers());

  act(() => {
    result.current.handleCardNumberChange("ab", 0);
  });

  expect(result.current.error[0].errorMessage).toBe(
    "카드 번호는 숫자로 입력해 주세요."
  );
  expect(result.current.error[0].isValid).toBe(true);
  expect(result.current.numbers[0]).toBe("ab");
});

test("4자리가 아닌 숫자를 validate 하면 에러 메시지가 세팅된다", () => {
  const { result } = renderHook(() => useCardNumbers());

  act(() => {
    result.current.handleCardNumberChange("12", 0);
  });

  expect(result.current.error[0].errorMessage).toBe(
    "카드 번호는 4자리로 입력해 주세요."
  );
  expect(result.current.error[0].isValid).toBe(true);
  expect(result.current.numbers[0]).toBe("12");
});
