import { renderHook } from "@testing-library/react";
import useCardCompany from "../hooks/useCardCompany";
import { act } from "react";
import { ERROR_MESSAGES } from "../constants/messages";

describe("useCardCompany 테스트", () => {
  test("초기 cardCompany 상태는 빈 문자열이어야 한다.", () => {
    const { result } = renderHook(() => useCardCompany());

    expect(result.current.cardCompany).toBe("");
    expect(result.current.cardCompany).toBeFalsy();
  });

  test(`'선택지 중 아무 것도 선택하지 않았을 경우' 에러 메시지("${ERROR_MESSAGES.company}")가 표시된다.`, () => {
    const { result } = renderHook(() => useCardCompany());

    act(() => {
      result.current.handleCardCompanyChange("");
    });

    expect(result.current.getCardCompanyErrorMessage()).toBe(
      ERROR_MESSAGES.company
    );
  });
});
