import { ChangeEvent } from "react";
import { renderHook, act } from "@testing-library/react";
import { CARD_COMPANY } from "../lib/constants/validation";
import useCardCompany from "../lib/useCardCompany";

describe("useCardCompany 커스텀 훅 테스트", () => {
  const defaultValue = "카드사를 선택해주세요.";

  it("카드사를 선택하지 않은 경우 isValid는 false이고, 선택해달라는 에러 메세지를 출력한다.", () => {
    const { result } = renderHook(() => useCardCompany());

    act(() => {
      result.current.onChangeCardCompany(
        {
          target: { value: defaultValue },
        } as ChangeEvent<HTMLSelectElement>,
        defaultValue
      );
    });

    expect(result.current.cardCompanyInfo.isValid).toBe(false);
    expect(result.current.cardCompanyInfo.errorMessages).toContain(
      CARD_COMPANY.errorMessage.notSelected
    );
  });

  it("카드사를 선택한 경우 isValid는 true이고, 오류 메세지는 없다.", () => {
    const { result } = renderHook(() => useCardCompany());
    const cardCompany = "올리뱅크";

    act(() => {
      result.current.onChangeCardCompany(
        {
          target: { value: cardCompany },
        } as ChangeEvent<HTMLSelectElement>,
        defaultValue
      );
    });

    expect(result.current.cardCompanyInfo.isValid).toBe(true);
    expect(result.current.cardCompanyInfo.errorMessages).toHaveLength(0);
  });

  it("선택한 카드사로 cardCompany 상태가 올바르게 업데이트되는지 확인한다.", () => {
    const { result } = renderHook(() => useCardCompany());
    const cardCompany = "썬데이뱅크";

    act(() => {
      result.current.onChangeCardCompany(
        {
          target: { value: cardCompany },
        } as ChangeEvent<HTMLSelectElement>,
        defaultValue
      );
    });

    expect(result.current.cardCompanyInfo.cardCompany).toBe(cardCompany);
    expect(result.current.cardCompanyInfo.isValid).toBe(true);
  });
});
