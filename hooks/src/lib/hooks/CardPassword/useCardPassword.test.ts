import { renderHook } from "@testing-library/react";
import useCardPassword from "./index";
import {
  testInputUpdate,
  testInvalidInput,
  testValidInput,
  testMaxLength,
} from "../../../utils/test/index";

describe("useCardPassword", () => {
  it("입력값이 정확히 업데이트 되어야 한다.", () => {
    testInputUpdate({
      renderHookFn: () => renderHook(() => useCardPassword()),
      handleChangeKey: "onChange",
      stateKey: "value",
      input: "12",
    });
  });

  it("카드 비밀번호에 1자리를 입력하면 오류가 발생해야한다.", () => {
    testInvalidInput({
      renderHookFn: () => renderHook(() => useCardPassword()),
      handleChangeKey: "onChange",
      errorStateKey: "errorState",
      input: "1",
      errorMessage: "비밀번호는 2자리여야 합니다.",
    });
  });

  it("카드 비밀번호에 숫자 2자리를 입력하면 유효하게 작동해야한다.", () => {
    testValidInput({
      renderHookFn: () => renderHook(() => useCardPassword()),
      handleChangeKey: "onChange",
      errorStateKey: "errorState",
      input: "12",
    });
  });

  it("카드 비밀번호에 3자리를 입력하여도 무시되어 2자리만 입력 가능하다.", () => {
    testMaxLength({
      renderHookFn: () => renderHook(() => useCardPassword()),
      handleChangeKey: "onChange",
      stateKey: "value",
      maxLength: 2,
    });
  });
});
