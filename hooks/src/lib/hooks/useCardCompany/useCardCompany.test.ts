import { renderHook } from "@testing-library/react";
import useCardCompany from "./useCardCompany";
import { act } from "react";
import { ERROR_MESSAGES } from "../../constants/errorMessage";

describe("useCardCompany 테스트", () => {
  test("초기 cardCompany 상태는 빈 문자열이어야 한다.", () => {
    const { result } = renderHook(() => useCardCompany());

    expect(result.current.cardCompany).toBe("");
    expect(result.current.cardCompany).toBeFalsy();
  });

  test.each(["하나카드", "신한카드", "국민카드"])(
    "카드사 중 하나인 %s를 선택했을 경우, 에러가 나타나지 않아야 한다.",
    (input) => {
      const { result } = renderHook(() => useCardCompany());
      act(() => {
        result.current.handleCardCompanyChange(input);
      });
      expect(result.current.cardCompanyError).toBeFalsy();
    }
  );
});

describe("useCardCompany 예외 테스트", () => {
  test("아무 것도 선택하지 않았을 경우, 에러가 나타나야 한다.", () => {
    const { result } = renderHook(() => useCardCompany());

    act(() => {
      result.current.handleCardCompanyChange("");
    });

    expect(result.current.cardCompanyError).toBeTruthy();
  });

  test("카드사 선택이 에러가 있는 경우 적절한 에러 메시지를 반환해야 한다.", () => {
    const { result } = renderHook(() => useCardCompany());

    act(() => {
      result.current.handleCardCompanyChange("");
    });

    expect(result.current.getCardCompanyErrorMessage()).toBe(
      ERROR_MESSAGES.company
    );
  });
});
