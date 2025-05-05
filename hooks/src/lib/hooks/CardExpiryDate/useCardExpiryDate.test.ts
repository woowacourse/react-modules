import { renderHook } from "@testing-library/react";
import useCardExpiryDate from "./index";
import {
  testInputUpdate,
  testInvalidInput,
  testValidInput,
  testMaxLength,
} from "../../../utils/test/index";

describe("useCardExpiryDate", () => {
  it("입력값이 정확히 업데이트 되어야 한다.", () => {
    testInputUpdate({
      renderHookFn: () => renderHook(() => useCardExpiryDate()),
      handleChangeKey: "handleExpiryChange",
      stateKey: "expiryDate",
      input: "0727",
    });
  });

  it("카드 만료일에 3자리를 입력하면 에러가 발생한다.", () => {
    testInvalidInput({
      renderHookFn: () => renderHook(() => useCardExpiryDate()),
      handleChangeKey: "handleExpiryChange",
      errorStateKey: "errorState",
      input: "122",
      errorMessage: "유효기간은 4자리여야 합니다.",
    });
  });

  it("카드 만료일에 유효하지 않은 월(1~12월)을 입력하면 에러가 발생한다.", () => {
    testInvalidInput({
      renderHookFn: () => renderHook(() => useCardExpiryDate()),
      handleChangeKey: "handleExpiryChange",
      errorStateKey: "errorState",
      input: "1325",
      errorMessage: "월은 1~12 사이여야 합니다.",
    });
  });

  it("카드 만료일에 년도는 유효하지만 기간이 지난 월을 입력하면 에러가 발생한다.", () => {
    testInvalidInput({
      renderHookFn: () => renderHook(() => useCardExpiryDate()),
      handleChangeKey: "handleExpiryChange",
      errorStateKey: "errorState",
      input: "0325",
      errorMessage: "유효기간이 만료되었습니다.",
    });
  });

  it("월과 년도가 유효한 경우 에러가 발생하지 않는다.", () => {
    const validMonth = "12";
    const date = new Date();
    const nextYear = date.getFullYear() + 1;
    const validInput = validMonth + nextYear.toString().slice(-2);

    testValidInput({
      renderHookFn: () => renderHook(() => useCardExpiryDate()),
      handleChangeKey: "handleExpiryChange",
      errorStateKey: "errorState",
      input: validInput,
    });
  });

  it("카드 만료일에 5자리를 입력하여도 무시되어 4자리만 입력 가능하다.", () => {
    testMaxLength({
      renderHookFn: () => renderHook(() => useCardExpiryDate()),
      handleChangeKey: "handleExpiryChange",
      stateKey: "expiryDate",
      maxLength: 4,
    });
  });
});
