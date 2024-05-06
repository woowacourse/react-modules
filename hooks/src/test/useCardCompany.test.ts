import { renderHook } from "@testing-library/react";
import { ChangeEvent, act } from "react";
import useCardCompany from "../lib/useCardCompany";

describe("useCardCompany 테스트", () => {
  const CARD_COMPANY_ERROR_MESSAGE = "카드사를 선택해주세요.";

  it(`카드사를 선택하지 않은 경우 에러 상태가 true가 된다.`, () => {
    const userInput = "";
    const { result } = renderHook(() => useCardCompany());

    act(() => {
      result.current.cardCompany.onChange({
        target: { value: userInput },
      } as ChangeEvent<HTMLInputElement>);
    });

    expect(result.current.cardCompany.error.state).toBeTruthy();
  });

  it(`카드사를 선택하지 않은 경우 ${CARD_COMPANY_ERROR_MESSAGE} 에러 메시지를 반환한다.`, () => {
    const userInput = "";
    const { result } = renderHook(() => useCardCompany());

    act(() => {
      result.current.cardCompany.onChange({
        target: { value: userInput },
      } as ChangeEvent<HTMLInputElement>);
    });

    expect(result.current.cardCompany.error.message).toBe(CARD_COMPANY_ERROR_MESSAGE);
  });

  it("올바른 값이 입력되었을 때 유효성 상태가 true가 된다.", () => {
    const userInput = "BC카드";
    const { result } = renderHook(() => useCardCompany());

    act(() => {
      result.current.cardCompany.onChange({
        target: { value: userInput },
      } as ChangeEvent<HTMLInputElement>);
    });

    expect(result.current.isCardCompanyValid).toBeTruthy();
  });
});
