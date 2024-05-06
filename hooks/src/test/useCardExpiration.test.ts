import { renderHook, act } from "@testing-library/react";
import { ChangeEvent } from "react";
import { EXPIRATION_DATE } from "../lib/constants/validation";
import useCardExpiration from "../lib/useCardExpiration";

describe("useCardExpiration 커스텀 훅 테스트", () => {
  it("월 입력에 따라 월 상태가 올바르게 업데이트되고 유효성 검사를 통과하는지 확인한다.", () => {
    const { result } = renderHook(() => useCardExpiration());

    act(() => {
      result.current.handleCardExpirationMM({
        target: { value: "09" },
      } as ChangeEvent<HTMLInputElement>);
    });

    expect(result.current.cardExpiration.MM.value).toBe("09");
    // 유효성 검사를 통과했는지 확인
    expect(result.current.cardExpiration.MM.isValid).toBe(true);
    expect(result.current.cardExpiration.MM.errorMessages.length).toBe(0);
  });

  it("연도 입력에 따라 연도 상태가 올바르게 업데이트되고 유효성 검사를 통과하는지 확인한다.", () => {
    const { result } = renderHook(() => useCardExpiration());

    act(() => {
      result.current.handleCardExpirationYY({
        target: { value: "23" },
      } as ChangeEvent<HTMLInputElement>);
    });

    expect(result.current.cardExpiration.YY.value).toBe("23");
    // 유효성 검사를 통과했는지 확인
    expect(result.current.cardExpiration.YY.isValid).toBe(true);
    expect(result.current.cardExpiration.YY.errorMessages.length).toBe(0);
  });

  it("12월을 초과한 경우 MM의 isValid는 false이며, 월에 대한 오류 메세지를 출력한다.", () => {
    const { result } = renderHook(() => useCardExpiration());

    act(() => {
      result.current.handleCardExpirationMM({
        target: { value: "13" },
      } as ChangeEvent<HTMLInputElement>);
    });

    expect(result.current.cardExpiration.MM.isValid).toBe(false);
    expect(result.current.cardExpiration.MM.errorMessages).toContain(
      EXPIRATION_DATE.errorMessage.invalidMonth
    );
  });

  it("한 자리수 월의 경우 앞에 0을 붙이지 않으면 MM의 isValid는 false이며, 월에 대한 오류 메세지를 출력한다.", () => {
    const { result } = renderHook(() => useCardExpiration());

    act(() => {
      result.current.handleCardExpirationMM({
        target: { value: "2" },
      } as ChangeEvent<HTMLInputElement>);
    });

    expect(result.current.cardExpiration.MM.isValid).toBe(false);
    expect(result.current.cardExpiration.MM.errorMessages).toContain(
      EXPIRATION_DATE.errorMessage.invalidMonth
    );
  });

  it("월과 연도 모두 유효한 값이 입력되면 isAllValid는 true이고, 에러 메세지는 없다.", () => {
    const { result } = renderHook(() => useCardExpiration());

    act(() => {
      result.current.handleCardExpirationMM({
        target: { value: "12" },
      } as ChangeEvent<HTMLInputElement>);
    });
    act(() => {
      result.current.handleCardExpirationYY({
        target: { value: "24" },
      } as ChangeEvent<HTMLInputElement>);
    });

    expect(result.current.cardExpiration.isAllValid).toBe(true);
    expect(result.current.cardExpiration.errorMessages.length).toBe(0);
  });
});
