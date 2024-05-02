import { act } from "react";
import { renderHook } from "@testing-library/react-hooks";
import useCVC from "./useCVC";
import { makeBlurEvent, makeChangeEvent } from "./domains/makeCallback";

describe("useCVC 테스트", () => {
  test("정상 입력을 했을 때, 에러를 발생시키지 않는다.", () => {
    const { result } = renderHook(useCVC);

    act(() => result.current.onChange(makeChangeEvent("123")));

    expect(result.current.CVC.isError).toBe(false);
  });
  test("입력중일 때, 길이 에러는 발생시키지 않는다.", () => {
    const { result } = renderHook(useCVC);

    act(() => result.current.onChange(makeChangeEvent("12")));

    expect(result.current.CVC.isError).toBe(false);
  });
  test("인풋태그에 문자를 입력했을 때,  에러를 발생시킨다.", () => {
    const { result } = renderHook(useCVC);

    act(() => result.current.onChange(makeChangeEvent("1a")));

    expect(result.current.CVC.isError).toBe(true);
  });

  describe("blur 상황일 때,", () => {
    test("정상 입력시, 에러를 발생시키지 않는다.", () => {
      const { result } = renderHook(useCVC);

      act(() => result.current.onBlur(makeBlurEvent("123")));

      expect(result.current.CVC.isError).toBe(false);
    });
    test("인풋태그 입력 길이가 3이 되지 않았을 때, 에러를 발생시킨다.", () => {
      const { result } = renderHook(useCVC);
      const EXPECTED_RESULT = true;

      act(() => result.current.onBlur(makeBlurEvent("12")));

      expect(result.current.CVC.isError).toBe(EXPECTED_RESULT);
    });
  });
});
