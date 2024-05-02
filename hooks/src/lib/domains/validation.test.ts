import { renderHook } from "@testing-library/react-hooks";
import validation, { Validator } from "./validation";
import useInput from "./useInput";
import { act } from "react";

describe("validation 테스트", () => {
  describe("change 상태일 때,", () => {
    test("validator에 해당하는 에러가 없을 시, 에러를 발생시키지 않는다.", () => {
      // Arrange
      const validators: Validator[] = [
        {
          validate: (value) => /^\d*$/.test(value),
          errorMessage: "숫자만 입력 가능합니다.",
        },
      ];
      const { result } = renderHook(() => useInput("1234"));
      act(() => result.current.setStatus("change"));

      // Act
      act(() => validation(result.current, validators));

      // Assert
      expect(result.current.isError).toBe(false);
      expect(result.current.errorMessage).toBe("");
    });

    test("validator를 받은 검증결과가 false일 때, 에러와 에러메시지를 발생시킨다.", () => {
      // Arrange
      const { result } = renderHook(() => useInput("123ㄹ"));
      const validators: Validator[] = [
        {
          validate: (value) => /^\d*$/.test(value),
          errorMessage: "숫자만 입력 가능합니다.",
        },
      ];
      act(() => result.current.setStatus("change"));

      // Act
      act(() => validation(result.current, validators));

      // Assert
      expect(result.current.isError).toBe(true);
      expect(result.current.errorMessage).toBe("숫자만 입력 가능합니다.");
    });

    test("2개의 validator 중 2번째에 에러가 있을 시, 2번째 태그에 에러와 에러메시지를 발생시킨다.", () => {
      const { result } = renderHook(() => useInput("123ㄹ"));
      const validators: Validator[] = [
        {
          validate: (value) => value.length === 4,
          errorMessage: "입력 길이는 4여야합니다.",
        },
        {
          validate: (value) => /^\d*$/.test(value),
          errorMessage: "숫자만 입력 가능합니다.",
        },
      ];
      act(() => result.current.setStatus("change"));
      act(() => validation(result.current, validators));

      expect(result.current.isError).toBe(true);
      expect(result.current.errorMessage).toBe("숫자만 입력 가능합니다.");
    });

    test("에러 발생 후 정상입력으로 수정되었을 때, 에러와 에러메시지를 해제한다.", () => {
      // Arrange
      const { result } = renderHook(() => useInput("123ㄹ"));
      const validators: Validator[] = [
        {
          validate: (value) => value.length === 4,
          errorMessage: "입력 길이는 4여야합니다.",
        },
        {
          validate: (value) => /^\d*$/.test(value),
          errorMessage: "숫자만 입력 가능합니다.",
        },
      ];

      // Act
      act(() => result.current.setValue("1f"));
      act(() => result.current.setStatus("change"));
      act(() => validation(result.current, validators));

      act(() => result.current.setValue("1234"));
      act(() => validation(result.current, validators));

      // Assert
      expect(result.current.isError).toBe(false);
      expect(result.current.errorMessage).toBe("");
    });

    test("blur 에러 발생 후 change상태에서 에러를 바꿨을 때, 에러와 에러메시지를 즉각 해제한다.", () => {
      // Arrange
      const { result } = renderHook(() => useInput("123ㄹ"));
      const validators: Validator[] = [
        {
          validate: (value) => value.length === 4,
          errorMessage: "입력 길이는 4여야합니다.",
          type: "blur",
        },
        {
          validate: (value) => /^\d*$/.test(value),
          errorMessage: "숫자만 입력 가능합니다.",
        },
      ];

      // Act (scenario)
      act(() => result.current.setValue("123"));
      act(() => result.current.setStatus("blur"));
      act(() => validation(result.current, validators));

      act(() => result.current.setValue("1233"));
      act(() => result.current.setStatus("change"));
      act(() => validation(result.current, validators));

      // Assert
      expect(result.current.isError).toBe(false);
      expect(result.current.errorMessage).toBe("");
    });
  });

  test("inputState가 default상태일 때는, 에러와 에러메시지를 발생시키지 않는다.", () => {
    const { result } = renderHook(() => useInput("1f"));
    const validators: Validator[] = [
      {
        validate: (value) => /^\d*$/.test(value),
        errorMessage: "숫자만 입력 가능합니다.",
      },
    ];
    act(() => validation(result.current, validators));

    expect(result.current.isError).toBe(false);
    expect(result.current.errorMessage).toBe("");
  });
  describe("blur 상태일 때,", () => {
    test("정상 입력시, 에러를 발생시키지 않는다.", () => {
      // Arrange
      const validators: Validator[] = [
        {
          validate: (value) => /^\d*$/.test(value),
          errorMessage: "숫자만 입력 가능합니다.",
        },
      ];
      const { result } = renderHook(() => useInput(""));
      act(() => result.current.setValue("1234"));
      act(() => result.current.setStatus("blur"));

      // Act
      act(() => validation(result.current, validators));

      // Assert
      expect(result.current.isError).toEqual(false);
    });
    test("잘못된 입력시, 에러를 발생시킨다.", () => {
      // Arrange
      const validators: Validator[] = [
        {
          validate: (value) => value.length === 4,
          errorMessage: "입력길이는 4여야합니다.",
          type: "blur",
        },
      ];
      const { result } = renderHook(() => useInput(""));
      act(() => result.current.setValue("123"));
      act(() => result.current.setStatus("blur"));

      // Act
      act(() => validation(result.current, validators));

      // Assert
      expect(result.current.isError).toEqual(true);
    });
  });
});
