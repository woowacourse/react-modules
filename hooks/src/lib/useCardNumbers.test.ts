import { renderHook } from "@testing-library/react-hooks";
import useCardNumbers from "./useCardNumbers";
import { act } from "react";
import { InputState } from "./domains/useInput";
import { makeBlurEvent, makeChangeEvent } from "./domains/makeCallback";

const flatten = (cardNumberStates: InputState[], key: keyof InputState) =>
  cardNumberStates.map((inputState) => inputState[key]);

describe("useCardNumber 테스트", () => {
  describe("change 상태일 때,", () => {
    test("정상 입력시, 에러를 발생시키지 않는다.", () => {
      const { result } = renderHook(useCardNumbers);

      act(() => result.current.onChanges.forEach((onChange) => onChange(makeChangeEvent("1234"))));

      expect(flatten(result.current.inputStates, "isError")).toEqual([false, false, false, false]);
    });
    test("첫 번째 인풋태그에 문자를 입력했을 때, 첫번째 입력태그에만 에러를 발생시킨다.", () => {
      const { result } = renderHook(useCardNumbers);

      act(() => result.current.onChanges[0](makeChangeEvent("1a")));

      expect(flatten(result.current.inputStates, "isError")).toEqual([true, false, false, false]);
    });
  });
  describe("blur 상황일 때,", () => {
    test("정상 입력했을 때, 에러를 발생시키지 않는다.", () => {
      const { result } = renderHook(useCardNumbers);

      act(() => result.current.onBlurs.forEach((onBlur) => onBlur(makeBlurEvent("1234"))));

      expect(flatten(result.current.inputStates, "isError")).toEqual([false, false, false, false]);
    });

    test.each([0, 1, 2, 3])(
      "%i 번째 인풋태그에 길이가 4가 되지 않은 채 blur되었을 때, 해당 입력태그에만 에러를 발생시킨다.",
      (index: number) => {
        const { result } = renderHook(useCardNumbers);
        const EXPECTED_RESULT = [false, false, false, false];
        EXPECTED_RESULT[index] = true;

        act(() => result.current.onBlurs[index](makeBlurEvent("123")));

        expect(flatten(result.current.inputStates, "isError")).toEqual(EXPECTED_RESULT);
      }
    );
  });
});
