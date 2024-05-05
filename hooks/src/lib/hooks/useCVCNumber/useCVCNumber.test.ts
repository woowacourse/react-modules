import { renderHook, act } from "@testing-library/react";
import useCVCNumber from "./useCVCNumber";
import { MAX_LENGTH_ERROR_MESSAGE } from "../../constants/errorMessage";

const INPUT_LENGTH = 3;

describe("useCVCNumber 테스트", () => {
  test("초기 CVC 번호 상태는 빈 문자열이어야 한다.", () => {
    const { result } = renderHook(() => useCVCNumber(INPUT_LENGTH));

    expect(result.current.CVCNumber).toBe("");
    expect(result.current.CVCNumberError).toBeFalsy();
  });

  test.each(["123", "000"])(
    "CVC 번호가 숫자이며 지정된 길이일 경우 에러가 나타나지 않아야 한다.",
    (input) => {
      const { result } = renderHook(() => useCVCNumber(INPUT_LENGTH));
      act(() => {
        result.current.handleCVCNumberChange(input);
      });
      expect(result.current.CVCNumberError).toBeFalsy();
    }
  );
});

describe("useCVCNumber 예외 테스트", () => {
  test("CVC 번호 길이가 지정된 길이를 초과할 경우 에러가 나타나야 한다.", () => {
    const { result } = renderHook(() => useCVCNumber(INPUT_LENGTH));
    act(() => {
      result.current.handleCVCNumberChange("1234");
    });
    expect(result.current.CVCNumberError).toBeTruthy();
  });

  test.each(["12ab", "!@34"])(
    "CVC 번호에 %s(으)로 유효하지 않게 입력될 경우(문자, 특수 문자 포함) 에러가 나타나야 한다.",
    (input) => {
      const { result } = renderHook(() => useCVCNumber(INPUT_LENGTH));
      act(() => {
        result.current.handleCVCNumberChange(input);
      });
      expect(result.current.CVCNumberError).toBeTruthy();
    }
  );

  test("CVC 번호에 에러가 있는 경우 적절한 에러 메시지를 반환해야 한다.", () => {
    const { result } = renderHook(() => useCVCNumber(INPUT_LENGTH));

    act(() => {
      result.current.handleCVCNumberChange("1234");
    });

    expect(result.current.getCVCNumberErrorMessage()).toBe(
      MAX_LENGTH_ERROR_MESSAGE(INPUT_LENGTH)
    );
  });
});
