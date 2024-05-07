import { renderHook, act } from "@testing-library/react";
import useInputCardNumber from "../../lib/useInputCardNumber";
import { ERROR_MESSAGE } from "../../shared/errorMessages";

describe("useInputCardNumber", () => {
  test("기본값 테스트", () => {
    const { result } = renderHook(() => useInputCardNumber());

    expect(result.current[0]).toBe("");
    expect(result.current[1]).toBe("default");
    expect(result.current[2]).toBe("");
  });

  describe("Change 이벤트 테스트", () => {
    test("빈 문자열을 입력하면 Default 상태가 되고, value가 업데이트 되어야 한다.", () => {
      const { result } = renderHook(() => useInputCardNumber());

      act(() => result.current[3]("", 16));

      expect(result.current[0]).toBe("");
      expect(result.current[1]).toBe("default");
      expect(result.current[2]).toBe("");
    });

    test("유효한 값(숫자)을 입력 중이라면 Pending 상태가 되고, value가 업데이트 되어야 한다.", () => {
      const { result } = renderHook(() => useInputCardNumber());

      act(() => result.current[3]("1234", 16));

      expect(result.current[0]).toBe("1234");
      expect(result.current[1]).toBe("pending");
      expect(result.current[2]).toBe("");
    });

    test("유효한 값(숫자)으로 입력을 완성하면 Complete 상태가 되고, value가 업데이트 되어야 한다.", () => {
      const { result } = renderHook(() => useInputCardNumber());

      act(() => result.current[3]("1111222233334444", 16));

      expect(result.current[0]).toBe("1111222233334444");
      expect(result.current[1]).toBe("complete");
      expect(result.current[2]).toBe("");
    });

    test("유효하지 않은 값(문자 포함)을 입력하면 Error 상태 및 에러메시지가 설정 되고, value가 업데이트 되지 않아야 한다.", () => {
      const { result } = renderHook(() => useInputCardNumber());

      act(() => result.current[3]("1234", 16));
      act(() => result.current[3]("1234a", 16));

      expect(result.current[0]).toBe("1234");
      expect(result.current[1]).toBe("error");
      expect(result.current[2]).toBe(ERROR_MESSAGE.cardNumber.isNotNumeric);
    });
  });

  describe("Blur 이벤트 테스트", () => {
    test("Default 상태일 때 Blur 된다면 Error 상태 및 에러메시지가 설정 되어야 한다.", () => {
      const { result } = renderHook(() => useInputCardNumber());

      act(() => result.current[3]("", 16));
      act(() => result.current[4]());

      expect(result.current[1]).toBe("error");
      expect(result.current[2]).toBe(ERROR_MESSAGE.cardNumber.isNotFulfilled);
    });

    test("Pending 상태일 때 Blur 된다면 Error 상태 및 에러메시지가 설정 되어야 한다.", () => {
      const { result } = renderHook(() => useInputCardNumber());

      act(() => result.current[3]("1234", 16));
      act(() => result.current[4]());

      expect(result.current[1]).toBe("error");
      expect(result.current[2]).toBe(ERROR_MESSAGE.cardNumber.isNotFulfilled);
    });

    test("Complete 상태일 때 Blur 된다면 에러가 발생하지 않아야 한다.", () => {
      const { result } = renderHook(() => useInputCardNumber());

      act(() => result.current[3]("1111222233334444", 16));
      act(() => result.current[4]());

      expect(result.current[1]).toBe("complete");
      expect(result.current[2]).toBe("");
    });
  });
});
