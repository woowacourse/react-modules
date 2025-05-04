import { renderHook } from "@testing-library/react";
import useCardCVC from "./index";
import {
  testInputUpdate,
  testInvalidInput,
  testValidInput,
  testMaxLength,
} from "../../../utils/test/index";

describe("useCardCVC", () => {
  it("입력값이 정확히 업데이트 되어야 한다.", () => {
    testInputUpdate({
      renderHookFn: () => renderHook(() => useCardCVC()),
      handleChangeKey: "handleCVCStateChange",
      stateKey: "cvcState",
      input: "123",
    });
  });

  it("CVC 입력에 문자열을 입력하면 오류가 발생해야한다.", () => {
    testInvalidInput({
      renderHookFn: () => renderHook(() => useCardCVC()),
      handleChangeKey: "handleCVCStateChange",
      errorStateKey: "errorState",
      input: "ㅁㅁㅁ",
      errorMessage: "숫자만 입력해주세요.",
    });
  });

  it("CVC 입력에 2자리를 입력하면 오류가 발생해야한다.", () => {
    testInvalidInput({
      renderHookFn: () => renderHook(() => useCardCVC()),
      handleChangeKey: "handleCVCStateChange",
      errorStateKey: "errorState",
      input: "12",
      errorMessage: "CVC는 3자리여야 합니다.",
    });
  });

  it("CVC 입력에 숫자 3자리를 입력하면 유효하게 작동해야한다.", () => {
    testValidInput({
      renderHookFn: () => renderHook(() => useCardCVC()),
      handleChangeKey: "handleCVCStateChange",
      errorStateKey: "errorState",
      input: "123",
    });
  });

  it("CVC 입력에 4자리를 입력하여도 무시되어 3자리만 입력 가능하다.", () => {
    testMaxLength({
      renderHookFn: () => renderHook(() => useCardCVC()),
      handleChangeKey: "handleCVCStateChange",
      stateKey: "cvcState",
      maxLength: 3,
    });
  });
});
