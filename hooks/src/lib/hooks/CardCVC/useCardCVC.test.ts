import { renderHook } from "@testing-library/react";
import useCardCVC from "./index";
import {
  testInputUpdate,
  testInvalidInput,
  testValidInput,
  testMaxLength,
  testInvalidInputClearsState,
} from "@/tests/utils/index";

describe("useCardCVC", () => {
  it("입력 값이 정확히 업데이트 되어야 한다.", () => {
    testInputUpdate({
      renderHookFn: () => renderHook(() => useCardCVC()),
      handleChangeKey: "onChange",
      stateKey: "value",
      input: "123",
    });
  });

  it("CVC 입력에 숫자 이외의 입력 값은 입력되지 않는다.", () => {
    testInvalidInputClearsState({
      renderHookFn: () => renderHook(() => useCardCVC()),
      handleChangeKey: "onChange",
      stateKey: "value",
      input: "ㅁ",
    });
  });

  it("CVC 입력에 2자리를 입력하면 오류가 발생해야한다.", () => {
    testInvalidInput({
      renderHookFn: () => renderHook(() => useCardCVC()),
      handleChangeKey: "onChange",
      errorStateKey: "errorState",
      input: "12",
      errorMessage: "CVC는 3자리여야 합니다.",
    });
  });

  it("CVC 입력에 숫자 3자리를 입력하면 유효하게 작동해야한다.", () => {
    testValidInput({
      renderHookFn: () => renderHook(() => useCardCVC()),
      handleChangeKey: "onChange",
      errorStateKey: "errorState",
      input: "123",
    });
  });

  it("CVC 입력에 4자리를 입력하여도 무시되어 3자리만 입력 가능하다.", () => {
    testMaxLength({
      renderHookFn: () => renderHook(() => useCardCVC()),
      handleChangeKey: "onChange",
      stateKey: "value",
      maxLength: 3,
    });
  });
});
