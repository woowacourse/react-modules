import { renderHook } from "@testing-library/react";
import React from "react";
import { useCardCompany } from "@/lib";
import { CardCompanyErrorMessage } from "@/constants/error";
import { ErrorStatus } from "@/types/errorStatus";

export const ExampleCardBrands = [
  "BC카드",
  "신한카드",
  "카카오뱅크",
  "현대카드",
  "우리카드",
  "롯데카드",
  "하나카드",
  "국민카드",
];

describe("useCardCompany 훅 테스트", () => {
  it("초기값이 정확히 설정되어야 한다.", () => {
    const initialValue = "";
    const { result } = renderHook(() =>
      useCardCompany({ initialValue, optionArray: ExampleCardBrands })
    );

    expect(result.current.value).toBe(initialValue);
  });

  it("입력값이 정확히 업데이트 되어야 한다.", () => {
    const initialValue = "";
    const { result } = renderHook(() =>
      useCardCompany({ initialValue, optionArray: ExampleCardBrands })
    );

    const validValue = ExampleCardBrands[0];
    React.act(() => {
      result.current.onSelect(validValue);
    });

    expect(result.current.value).toBe(validValue);
  });

  it("유효하지 않은 옵션 선택시 에러를 낸다.", () => {
    const initialValue = "";
    const { result } = renderHook(() =>
      useCardCompany({ initialValue, optionArray: ExampleCardBrands })
    );

    const invalidValue = "헤일리 은행";
    React.act(() => {
      result.current.onSelect(invalidValue);
    });

    const expectedErrorMessage =
      CardCompanyErrorMessage[ErrorStatus.INVALID_OPTION];
    expect(result.current.errorMessage).toBe(expectedErrorMessage);
  });
});
