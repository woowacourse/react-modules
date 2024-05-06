import { renderHook, act } from "@testing-library/react";
import { ChangeEvent } from "react";
import { EXPIRATION_DATE } from "../lib/constants/validation";
import useCardExpiration from "../lib/useCardExpiration";

describe("useCardExpiration 커스텀 훅 테스트", () => {
  it("월 입력에 따라 월 상태가 올바르게 업데이트되고 유효성 검사를 통과하는지 확인한다.", () => {
    const september = "09";
    const { result } = renderHook(() => useCardExpiration());

    const validEvent = {
      target: { value: september },
    } as ChangeEvent<HTMLInputElement>;
    act(() => {
      result.current.onChangeCardExpirationMM(validEvent);
    });

    expect(result.current.cardExpirationInfo.MM.value).toBe(september);
    expect(result.current.cardExpirationInfo.MM.isValid).toBe(true);
    expect(result.current.cardExpirationInfo.MM.errorMessages.length).toBe(0);
  });

  it("연도 입력에 따라 연도 상태가 올바르게 업데이트되고 유효성 검사를 통과하는지 확인한다.", () => {
    const year2023 = "23";
    const { result } = renderHook(() => useCardExpiration());

    const validEvent = {
      target: { value: year2023 },
    } as ChangeEvent<HTMLInputElement>;
    act(() => {
      result.current.onChangeCardExpirationYY(validEvent);
    });

    expect(result.current.cardExpirationInfo.YY.value).toBe(year2023);
    expect(result.current.cardExpirationInfo.YY.isValid).toBe(true);
    expect(result.current.cardExpirationInfo.YY.errorMessages.length).toBe(0);
  });

  it("12월을 초과한 경우 MM의 isValid는 false이며, 월에 대한 오류 메세지를 출력한다.", () => {
    const invalidMonth = "13";
    const { result } = renderHook(() => useCardExpiration());

    const invalidEvent = {
      target: { value: invalidMonth },
    } as ChangeEvent<HTMLInputElement>;
    act(() => {
      result.current.onChangeCardExpirationMM(invalidEvent);
    });

    expect(result.current.cardExpirationInfo.MM.isValid).toBe(false);
    expect(result.current.cardExpirationInfo.MM.errorMessages).toContain(
      EXPIRATION_DATE.errorMessage.invalidMonth
    );
  });

  it("한 자리수 월의 경우 앞에 0을 붙이지 않으면 MM의 isValid는 false이며, 월에 대한 오류 메세지를 출력한다.", () => {
    const invalidMonthFormat = "2";
    const { result } = renderHook(() => useCardExpiration());

    const invalidEvent = {
      target: { value: invalidMonthFormat },
    } as ChangeEvent<HTMLInputElement>;
    act(() => {
      result.current.onChangeCardExpirationMM(invalidEvent);
    });

    expect(result.current.cardExpirationInfo.MM.isValid).toBe(false);
    expect(result.current.cardExpirationInfo.MM.errorMessages).toContain(
      EXPIRATION_DATE.errorMessage.invalidMonth
    );
  });

  it("월과 연도 모두 유효한 값이 입력되면 isAllValid는 true이고, 에러 메세지는 없다.", () => {
    const december = "12";
    const year2024 = "24";
    const { result } = renderHook(() => useCardExpiration());

    const validMonthEvent = {
      target: { value: december },
    } as ChangeEvent<HTMLInputElement>;
    const validYearEvent = {
      target: { value: year2024 },
    } as ChangeEvent<HTMLInputElement>;

    act(() => {
      result.current.onChangeCardExpirationMM(validMonthEvent);
    });
    act(() => {
      result.current.onChangeCardExpirationYY(validYearEvent);
    });

    expect(result.current.cardExpirationInfo.isAllValid).toBe(true);
    expect(result.current.cardExpirationInfo.errorMessages.length).toBe(0);
  });
});
