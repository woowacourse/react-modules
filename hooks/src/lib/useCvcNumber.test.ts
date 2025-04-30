import { renderHook, act } from "@testing-library/react";
import useCvcNumber from "./useCvcNumber";

test("숫자가 아닌 값을 validate 하면 에러 메시지가 세팅된다", () => {
  const { result } = renderHook(() => useCvcNumber());

  act(() => {
    result.current.validate("ab");
  });

  expect(result.current.error.errorMessage).toBe("CVC는 숫자로 입력해 주세요.");
});

test("3자리 이하의 숫자를 validate 하면 에러 메시지가 세팅된다", () => {
  const { result } = renderHook(() => useCvcNumber());

  act(() => {
    result.current.validate("12");
  });

  expect(result.current.error.errorMessage).toBe(
    "CVC는 3자리로 입력해 주세요."
  );
});
