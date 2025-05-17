import { renderHook, act } from "@testing-library/react";
import useCVCNumber from "../hooks/useCVCNumber";

describe("CVC 번호 테스트", () => {
  const CVCNumber = {
    value: "",
  };

  const CVCNumberError = {
    CVCNumber: "",
  };

  let result: any;

  beforeEach(() => {
    const hook = renderHook(() =>
      useCVCNumber({
        initCVCNumber: CVCNumber,
        initCVCNumberError: CVCNumberError,
      })
    );
    result = hook.result;
  });

  test("CVC번호 초기 값을 가져온다.", () => {
    expect(result.current.CVCNumber.values).toEqual(CVCNumber);
  });

  test("CVC번호 값을 변경할 수 있다.", () => {
    const type = "value";
    const changeValue = "321";

    act(() => {
      result.current.CVCNumber.changeValues(type, changeValue);
    });

    expect(result.current.CVCNumber.values.value).toEqual(changeValue);
  });

  test("CVC번호가 올바르지 않은 경우 에러를 반환한다.", () => {
    const type = "value";
    const changeValue = "10a";
    const maxLength = 3;

    act(() => {
      result.current.CVCNumber.changeValues(type, changeValue);
      result.current.CVCError.checkValidation({
        length: maxLength,
        type,
        value: changeValue,
      });
    });

    expect(result.current.CVCError.isError()).toEqual(true);
  });

  test("CVC번호가 올바르지 않은 경우 에러 메시지를 반환한다.", () => {
    const type = "value";
    const changeValue = "10a";
    const maxLength = 3;

    act(() => {
      result.current.CVCNumber.changeValues(type, changeValue);
      result.current.CVCError.checkValidation({
        length: maxLength,
        type,
        value: changeValue,
      });
    });

    expect(result.current.CVCError.getErrorMessage()).toEqual(
      "숫자만 입력 가능합니다."
    );
  });
});
