import { renderHook, act } from "@testing-library/react";
import { useCardPasswordInput } from "./useCardPassword";
import { ChangeEvent } from "react";
import { ERROR_MESSAGE } from "./validator/constants/errorMessage";

describe("useCardPasswordInput", () => {
  it('초기 렌더링 시 빈 문자열("")을 상태값으로 가진다.', () => {
    const initialValue = "";
    const { result } = renderHook(() => useCardPasswordInput());

    expect(result.current.cardPassword).toBe(initialValue);
  });

  it('사용자가 "3"을 입력하면 carPassword 값도 "3"으로 설정된다.', () => {
    const userInput = "3";
    const { result } = renderHook(() => useCardPasswordInput());

    act(() => {
      result.current.onChangeHandler({
        target: { value: userInput },
      } as ChangeEvent<HTMLInputElement>);
    });

    expect(result.current.cardPassword).toBe(userInput);
  });
  it("숫자가 아닌 입력값에 에러메세지가 출력된다.", () => {
    const userInput = "k";
    const { result } = renderHook(() => useCardPasswordInput());

    act(() => {
      result.current.onChangeHandler({
        target: { value: userInput },
      } as ChangeEvent<HTMLInputElement>);
    });

    expect(result.current.errorMessage).toBe(
      ERROR_MESSAGE.PASSWORD.IS_NUMBER_STRING
    );
  });
});
