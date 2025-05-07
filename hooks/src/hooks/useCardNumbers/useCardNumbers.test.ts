import { renderHook, act } from "@testing-library/react";
import useCardNumbers from "./useCardNumbers";

test("초기 상태는 에러가 뜨지 않는다.", () => {
  const { result } = renderHook(() => useCardNumbers());

  expect(result.current.numbers).toEqual(["", "", "", ""]);
  result.current.error.forEach((e) => {
    expect(e.isValid).toBe(false);
    expect(e.errorMessage).toBe("");
  });
});

test("4자리 숫자가 입력되면 정상 작동한다.", () => {
  const { result } = renderHook(() => useCardNumbers());

  act(() => {
    result.current.handleCardNumberChange("1234", 0);
  });

  expect(result.current.error[0].errorMessage).toBe("");
  expect(result.current.error[0].isValid).toBe(false);
  expect(result.current.numbers[0]).toBe("1234");
});

test("숫자가 아닌 값을 validate 하면 에러 메시지가 뜬다.", () => {
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

test("4자리가 아닌 숫자를 validate 하면 에러 메시지가 뜬다.", () => {
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

test("5자리 이상 입력 시 무시된다.", () => {
  const { result } = renderHook(() => useCardNumbers());

  act(() => {
    result.current.handleCardNumberChange("12345", 1);
  });

  expect(result.current.numbers[1]).toBe("");
  expect(result.current.error[1].errorMessage).toBe("");
  expect(result.current.error[1].isValid).toBe(false);
});

test("빈 문자열 입력 시 에러가 사라진다.", () => {
  const { result } = renderHook(() => useCardNumbers());

  act(() => {
    result.current.handleCardNumberChange("ab", 2);
    result.current.handleCardNumberChange("", 2);
  });

  expect(result.current.numbers[2]).toBe("");
  expect(result.current.error[2].errorMessage).toBe("");
  expect(result.current.error[2].isValid).toBe(false);
});
