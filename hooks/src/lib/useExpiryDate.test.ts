import { renderHook } from "@testing-library/react-hooks";

import { act } from "react";
import { InputState } from "./domains/useInput";
import useExpiryDate from "./useExpiryDate";
import { makeChangeEvent } from "./domains/makeCallback";
const flatten = (cardNumberStates: InputState[], key: keyof InputState) =>
  cardNumberStates.map((inputState) => inputState[key]);
describe("useExpiryDate 테스트", () => {
  test("정상 입력을 했을 때, 에러를 발생시키지 않는다.", () => {
    const { result } = renderHook(useExpiryDate);
    act(() => result.current.onChanges.map((onChange) => onChange(makeChangeEvent("12"))));

    expect(flatten(result.current.expiryDates, "isError")).toEqual([false, false]);
  });
  test("첫 번째 인풋태그에 문자를 입력했을 때, 첫번째 입력태그에만 에러를 발생시킨다.", () => {
    const { result } = renderHook(useExpiryDate);

    act(() => result.current.onChanges[0](makeChangeEvent("1a")));

    expect(flatten(result.current.expiryDates, "isError")).toEqual([true, false]);
  });

  test.each([0, 1])(
    "%i 번째 인풋태그에 길이가 2가 되지 않은 채 change되었을 때, 해당 입력태그에 에러를 발생시키지 않는다.",
    (index: number) => {
      const { result } = renderHook(useExpiryDate);
      const EXPECTED_RESULT = [false, false];

      act(() => result.current.onChanges[index](makeChangeEvent("1")));

      expect(flatten(result.current.expiryDates, "isError")).toEqual(EXPECTED_RESULT);
    }
  );

  describe("blur 상황일 때,", () => {
    test("정상 입력시, 에러를 발생시키지 않는다.", () => {
      const { result } = renderHook(useExpiryDate);

      act(() => result.current.expiryDates[0].setValue("12"));
      act(() => result.current.expiryDates[0].setStatus("blur"));

      expect(flatten(result.current.expiryDates, "isError")).toEqual([false, false]);
    });
    test.each([0, 1])(
      "%i 번째 인풋태그에 길이가 2가 되지 않았을 때, 해당 입력태그에만 에러를 발생시킨다.",
      (index: number) => {
        const { result } = renderHook(useExpiryDate);
        const EXPECTED_RESULT = [false, false];
        EXPECTED_RESULT[index] = true;

        act(() => result.current.expiryDates[index].setValue("1"));
        act(() => result.current.expiryDates[index].setStatus("blur"));

        expect(flatten(result.current.expiryDates, "isError")).toEqual(EXPECTED_RESULT);
      }
    );
  });
});
