import { renderHook, act } from "@testing-library/react";
import { useCardExpirationDateInput } from "./useCardExpirationDate";
import { ChangeEvent } from "react";
import { ERROR_MESSAGE } from "./validator/constants/errorMessage";

describe("useCardExpirationDate", () => {
  it('초기 렌더링 시 빈 문자열("")을 상태값으로 가진다.', () => {
    const { result } = renderHook(() => useCardExpirationDateInput());

    expect(result.current.cardExpirationDate).toEqual({ month: "", year: "" });
    expect(result.current.errorMessage).toBe("");
  });

  it('사용자가 month 인풋에 "3"을 입력하면 month 상태값도 "3"으로 설정된다.', () => {
    const userInput = "3";
    const { result } = renderHook(() => useCardExpirationDateInput());

    act(() => {
      result.current.onChangeHandler({
        target: { name: "month", value: userInput },
      } as ChangeEvent<HTMLInputElement>);
    });

    expect(result.current.cardExpirationDate.month).toBe(userInput);
  });

  it("사용자가 year 인풋에 '3'을 입력하면 year 상태값도 '3'으로 설정된다.", () => {
    const userInput = "3";
    const { result } = renderHook(() => useCardExpirationDateInput());

    act(() => {
      result.current.onChangeHandler({
        target: { name: "year", value: userInput },
      } as ChangeEvent<HTMLInputElement>);
    });

    expect(result.current.cardExpirationDate.year).toBe(userInput);
  });

  it("숫자가 아닌 month 입력값에 에러메세지가 출력된다.", () => {
    const userInput = "k";
    const { result } = renderHook(() => useCardExpirationDateInput());

    act(() => {
      result.current.onChangeHandler({
        target: { name: "month", value: userInput },
      } as ChangeEvent<HTMLInputElement>);
    });

    expect(result.current.errorMessage).toBe(
      ERROR_MESSAGE.EXPIRATION.MONTH.IS_NUMBER
    );
  });

  it("1월에서 12월 사이가 아닌 month 입력값에 에러메세지가 출력된다.", () => {
    const userInput = "13";
    const { result } = renderHook(() => useCardExpirationDateInput());

    act(() => {
      result.current.onChangeHandler({
        target: { name: "month", value: userInput },
      } as ChangeEvent<HTMLInputElement>);
    });

    expect(result.current.errorMessage).toBe(
      ERROR_MESSAGE.EXPIRATION.MONTH.IS_NUMBER_RANGE
    );
  });

  it("유효기간이 지난 month 입력값에 에러메세지가 출력된다.", () => {
    const userInputMonth = "01";
    const userInputYear = "22";
    const { result } = renderHook(() => useCardExpirationDateInput());

    act(() => {
      result.current.onChangeHandler({
        target: { name: "month", value: userInputMonth },
      } as ChangeEvent<HTMLInputElement>);
    });

    act(() => {
      result.current.onChangeHandler({
        target: { name: "year", value: userInputYear },
      } as ChangeEvent<HTMLInputElement>);
    });

    expect(result.current.errorMessage).toBe(
      ERROR_MESSAGE.EXPIRATION.MONTH.IS_EXPIRATION
    );
  });

  it("현재 만료된 유효 기간을 입력 시 에러메세지가 출력된다.", () => {
    const userMonthInput = "12";
    const userYearInput = "24";
    const { result } = renderHook(() => useCardExpirationDateInput());

    act(() => {
      result.current.onChangeHandler({
        target: { name: "month", value: userMonthInput },
      } as ChangeEvent<HTMLInputElement>);
    });

    act(() => {
      result.current.onChangeHandler({
        target: { name: "year", value: userYearInput },
      } as ChangeEvent<HTMLInputElement>);
    });

    expect(result.current.errorMessage).toBe(
      ERROR_MESSAGE.EXPIRATION.YEAR.IS_EXPIRATION
    );
  });
});
