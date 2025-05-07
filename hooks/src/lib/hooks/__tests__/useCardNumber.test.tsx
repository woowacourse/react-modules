import { renderHook, act } from "@testing-library/react";
import useCardNumber from "../useCardNumber";
import { CARD_NUMBER_LENGTH, ERROR_MESSAGE } from "../../constants";

describe("useCardNumber", () => {
  it("초기 상태를 올바르게 반환한다", () => {
    const { result } = renderHook(() => useCardNumber());
    act(() => {
      result.current.setCardNumber(["1234", "1234", "1234", "1234"]);
    });
    expect(result.current.cardNumber).toEqual(["1234", "1234", "1234", "1234"]);
    expect(result.current.errorMessage).toEqual(["", "", "", ""]);
    expect(result.current.isError).toEqual([false, false, false, false]);
  });

  it(`카드 넘버가 초과하면 ${ERROR_MESSAGE.INVALID_LENGTH}를 보여준다.`, () => {
    const { result } = renderHook(() => useCardNumber());
    act(() => {
      result.current.setCardNumber(["1234", "1234", "1234", "123433"]);
    });
    expect(result.current.errorMessage).toEqual([
      "",
      "",
      "",
      ERROR_MESSAGE.INVALID_LENGTH(CARD_NUMBER_LENGTH),
    ]);
    expect(result.current.isError).toEqual([false, false, false, true]);
  });

  it(`카드 넘버가 문자열을 받는다면 ${ERROR_MESSAGE.NOT_NUMERIC}를 보여준다.`, () => {
    const { result } = renderHook(() => useCardNumber());
    act(() => {
      result.current.setCardNumber(["1234", "1234", "1234", "aaaa"]);
    });

    expect(result.current.errorMessage).toEqual([
      "",
      "",
      "",
      ERROR_MESSAGE.NOT_NUMERIC,
    ]);
    expect(result.current.isError).toEqual([false, false, false, true]);
  });

  it(`카드 넘버가 공백을 받는다면 ${ERROR_MESSAGE.INVALID_LENGTH(
    CARD_NUMBER_LENGTH
  )}를 보여준다.`, () => {
    const { result } = renderHook(() => useCardNumber());
    act(() => {
      result.current.setCardNumber(["  1", "1234", "1234", "1234"]);
    });

    expect(result.current.errorMessage).toEqual([
      ERROR_MESSAGE.INVALID_LENGTH(CARD_NUMBER_LENGTH),
      "",
      "",
      "",
    ]);
    expect(result.current.isError).toEqual([true, false, false, false]);
  });
});
