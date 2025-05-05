import { renderHook, act } from "@testing-library/react";
import { useCardNumbersInput } from "./useCardNumbers";
import { ChangeEvent } from "react";
import { ERROR_MESSAGE } from "./validator/constants/errorMessage";

describe("useCardNumbersInput", () => {
  it('초기 렌더링 시 빈 문자열("")로 이루어진 배열을 상태값으로 가진다.', () => {
    const initialValue = ["", "", "", ""];
    const { result } = renderHook(() => useCardNumbersInput());

    const values = result.current.cardNumbersInfo.map((info) => info.value);
    expect(values).toEqual(initialValue);
  });

  it('사용자가 첫 번째 인풋에 "5111"을 입력하면 해당 값이 반영된다.', () => {
    const userInput = "5111";
    const { result } = renderHook(() => useCardNumbersInput());

    act(() => {
      result.current.onChangeHandler(0)({
        target: { value: userInput },
      } as ChangeEvent<HTMLInputElement>);
    });

    const values = result.current.cardNumbersInfo.map((info) => info.value);
    expect(values).toEqual([userInput, "", "", ""]);
  });

  it("숫자가 아닌 입력값에 에러메세지가 출력된다.", () => {
    const notValidInput = "qqqq";
    const validInput = "1234";
    const { result } = renderHook(() => useCardNumbersInput());

    act(() => {
      result.current.onChangeHandler(0)({
        target: { value: notValidInput },
      } as ChangeEvent<HTMLInputElement>);
    });
    act(() => {
      result.current.onChangeHandler(1)({
        target: { value: validInput },
      } as ChangeEvent<HTMLInputElement>);
    });
    act(() => {
      result.current.onChangeHandler(2)({
        target: { value: notValidInput },
      } as ChangeEvent<HTMLInputElement>);
    });
    act(() => {
      result.current.onChangeHandler(3)({
        target: { value: validInput },
      } as ChangeEvent<HTMLInputElement>);
    });

    const errorMessages = result.current.cardNumbersInfo.map(
      (info) => info.errorMessage
    );
    expect(errorMessages).toEqual([
      ERROR_MESSAGE.NUMBER.IS_NUMBER_STRING,
      "",
      ERROR_MESSAGE.NUMBER.IS_NUMBER_STRING,
      "",
    ]);
  });

  it("카드 번호 입력에 따라 카드 브랜드가 자동 감지된다 (AMEX)", () => {
    const { result } = renderHook(() => useCardNumbersInput());

    act(() => {
      result.current.onChangeHandler(0)({
        target: { value: "3412" },
      } as ChangeEvent<HTMLInputElement>);
    });
    act(() => {
      result.current.onChangeHandler(1)({
        target: { value: "345678" },
      } as ChangeEvent<HTMLInputElement>);
    });
    act(() => {
      result.current.onChangeHandler(2)({
        target: { value: "90123" },
      } as ChangeEvent<HTMLInputElement>);
    });

    expect(result.current.cardBrand).toBe("AMEX");
  });

  it("카드 브랜드가 변경되면 cardNumbersInfo 배열 길이도 변경된다 (AMEX = 3블록)", () => {
    const { result } = renderHook(() => useCardNumbersInput());

    act(() => {
      result.current.onChangeHandler(0)({
        target: { value: "3412" },
      } as ChangeEvent<HTMLInputElement>);
    });

    expect(result.current.cardNumbersInfo).toHaveLength(3);
  });
});
