import { renderHook } from "@testing-library/react-hooks";
import { act } from "react";
import useInput, { InputState } from "./useInput";
import validations from "./validations";
import { Validator } from "./validation";

const flatten = (inputStates: InputState[], key: keyof InputState) => inputStates.map((inputState) => inputState[key]);
const validators: Validator[] = [
  {
    validate: (value) => /^\d*$/.test(value),
    errorMessage: "숫자만 입력 가능합니다.",
  },
  {
    validate: (value) => value.length === 2,
    errorMessage: "필드의 길이는 2여야합니다.",
    type: "blur",
  },
];

describe("validations 테스트", () => {
  test("정상 입력하고 change일 때, 에러를 발생시키지 않는다.", () => {
    const { result } = renderHook(() => [useInput(""), useInput("")]);
    act(() => result.current[0].setStatus("change"));
    act(() => result.current[0].setValue("1234"));

    act(() => validations(result.current, validators));

    expect(flatten(result.current, "isError")).toEqual([false, false]);
  });

  test("첫 번째 인풋태그에 문자를 입력했을 때, 첫번째 입력태그에만 에러를 발생시킨다.", () => {
    const { result } = renderHook(() => [useInput(""), useInput(""), useInput(""), useInput("")]);
    act(() => result.current[0].setValue("1a"));
    act(() => result.current[0].setStatus("change"));

    act(() => validations(result.current, validators));

    expect(flatten(result.current, "isError")).toEqual([true, false, false, false]);
  });
  test("index를 입력하지 않은 Validator가 입력으로 들어왔을 때, 모든 태그에 에러를 검증한다.", () => {
    const { result } = renderHook(() => [useInput(""), useInput("")]);
    const validators: Validator[] = [
      {
        validate: (value) => /^\d*$/.test(value),
        errorMessage: "숫자만 입력 가능합니다.",
      },
    ];
    act(() => result.current[0].setStatus("change"));
    act(() => result.current[0].setValue("1a"));
    act(() => result.current[0].setStatus("blur"));
    act(() => result.current[1].setValue("1a"));
    act(() => result.current[1].setStatus("change"));

    act(() => validations(result.current, validators));

    expect(flatten(result.current, "isError")).toEqual([true, true]);
  });

  test("index를 입력한 Validator가 입력으로 들어왔을 때, 해당 index의 태그에만 에러를 검증한다.", () => {
    const { result } = renderHook(() => [useInput(""), useInput("")]);
    const validators: Validator[] = [
      {
        validate: (value) => /^\d*$/.test(value),
        errorMessage: "숫자만 입력 가능합니다.",
        index: [1, 2],
      },
    ];
    act(() => result.current[0].setStatus("change"));
    act(() => result.current[0].setValue("1a"));
    act(() => result.current[0].setStatus("blur"));
    act(() => result.current[1].setStatus("change"));
    act(() => result.current[1].setValue("1a"));

    act(() => validations(result.current, validators));

    expect(flatten(result.current, "isError")).toEqual([false, true]);
  });

  test.each([0, 1])(
    "%i 번째 인풋태그에 길이가 4가 되지 않은 채 blur되었을 때, 해당 입력태그에만 에러를 발생시킨다.",
    (index: number) => {
      const { result } = renderHook(() => [useInput(""), useInput("")]);
      const EXPECTED_RESULT = [false, false];
      EXPECTED_RESULT[index] = true;
      act(() => result.current[index].setValue("123"));
      act(() => result.current[index].setStatus("blur"));

      act(() => validations(result.current, validators));

      expect(flatten(result.current, "isError")).toEqual(EXPECTED_RESULT);
    }
  );
});
