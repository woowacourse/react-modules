import { renderHook, act } from "@testing-library/react";
import { useCardExpirationDateInput } from "./useCardExpirationDate";
import { ChangeEvent } from "react";
import { ERROR_MESSAGE } from "./validator/constants/errorMessage";

describe("useCardExpirationDate", () => {
  it("초기값이 정확히 설정되어야 한다.", () => {
    const { result } = renderHook(() => useCardExpirationDateInput());

    expect(result.current.cardExpirationDate).toEqual({ month: "", year: "" });
    expect(result.current.errorMessage).toBe("");
  });

  it("month 입력값이 정확히 업데이트 되어야 한다.", () => {
    const userInput = "3";
    const { result } = renderHook(() => useCardExpirationDateInput());

    act(() => {
      result.current.onChangeHandler({
        target: { name: "month", value: userInput },
      } as ChangeEvent<HTMLInputElement>);
    });

    expect(result.current.cardExpirationDate.month).toBe(userInput);
  });

  it("year 입력값이 정확히 업데이트 되어야 한다.", () => {
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

  // it('숫자가 아닌 year 입력값에 에러메세지가 출력된다.', () => {
  //   const userInputMonth = '12';
  //   const userInputYear = 'k';
  //   const { result } = renderHook(() => useCardExpirationDateInput());

  //   act(() => {
  //     result.current.onChangeHandler({
  //       target: { name: 'month', value: userInputMonth },
  //     } as ChangeEvent<HTMLInputElement>);
  //   });

  //   act(() => {
  //     result.current.onChangeHandler({
  //       target: { name: 'year', value: userInputYear },
  //     } as ChangeEvent<HTMLInputElement>);
  //   });

  //   expect(result.current.errorMessage).toBe(ERROR_MESSAGE.EXPIRATION.YEAR.IS_NUMBER);
  // });

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
