import { renderHook, act } from "@testing-library/react";
import usePassword from "./usePassword";

test("2자리 숫자를 입력하면 정상 작동한다.", () => {
  const { result } = renderHook(() => usePassword());

  act(() => {
    result.current.handlePasswordChange("12");
  });

  expect(result.current.error.errorMessage).toBe("");
  expect(result.current.error.isValid).toBe(false);
  expect(result.current.password).toBe("12");
});

test("숫자가 아닌 값을 validate 하면 에러 메시지가 세팅된다", () => {
  const { result } = renderHook(() => usePassword());

  act(() => {
    result.current.handlePasswordChange("ab");
  });

  expect(result.current.error.errorMessage).toBe(
    "카드 비밀번호는 숫자로 입력해 주세요."
  );
  expect(result.current.error.isValid).toBe(true);
  expect(result.current.password).toBe("ab");
});

test("2자리가 아닌 숫자를 validate 하면 에러 메시지가 세팅된다", () => {
  const { result } = renderHook(() => usePassword());

  act(() => {
    result.current.handlePasswordChange("1");
  });

  expect(result.current.error.errorMessage).toBe(
    "카드 비밀번호는 2자리로 입력해 주세요."
  );
  expect(result.current.error.isValid).toBe(true);
  expect(result.current.password).toBe("1");
});
