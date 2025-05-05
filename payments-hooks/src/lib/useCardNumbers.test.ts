import { renderHook, act } from "@testing-library/react";
import { useCardNumbersInput } from "./useCardNumbers";
import { ChangeEvent } from "react";
import { ERROR_MESSAGE } from "./validator/constants/errorMessage";

describe("useCardNumbersInput", () => {
  it('초기 렌더링 시 빈 문자열("")로 이루어진 배열을 상태값으로 가진다.', () => {
    const initialValue = ["", "", "", ""];
    const { result } = renderHook(() => useCardNumbersInput());

    expect(result.current.cardNumbers).toEqual(initialValue);
  });

  it('사용자가 첫 번째 인풋에 "3"을 입력하면 cardNumber 값도 "["3", "", "", ""]"으로 설정된다.', () => {
    const userInput = "3";
    const { result } = renderHook(() => useCardNumbersInput());

    act(() => {
      result.current.onChangeHandler({
        target: { name: "0", value: userInput },
      } as ChangeEvent<HTMLInputElement>);
    });

    expect(result.current.cardNumbers).toEqual([userInput, "", "", ""]);
  });

  it("숫자가 아닌 입력값에 에러메세지가 출력된다.", () => {
    const userInput = "k";
    const { result } = renderHook(() => useCardNumbersInput());

    act(() => {
      result.current.onChangeHandler({
        target: { name: "0", value: userInput },
      } as ChangeEvent<HTMLInputElement>);
    });

    expect(result.current.errorMessage).toBe(
      ERROR_MESSAGE.NUMBER.IS_NUMBER_STRING
    );
  });
});
