import { renderHook, act } from "@testing-library/react";
import useCardCompany from "./useCardCompany";
import { checkEmptyValue } from "../utils/vaildate";

describe("useCardCompany 테스트", () => {
	it("CardCompany가 선택되었을 때 isValid는 true, errorMessage는 빈 문자열인지 확인한다.", () => {
		const { result } = renderHook(() => useCardCompany([checkEmptyValue]));

		expect(result.current.error).toEqual({ isValid: true, errorMessage: "" });
	});

	it("CardCompany가 선택되지 않았을 때 isValid는 false, errorMessage 값이 반환되는지 확인한다.", () => {
		const { result } = renderHook(() => useCardCompany([checkEmptyValue]));

		act(() => {
			result.current.validate("");
		});

		expect(result.current.error).toEqual({ isValid: false, errorMessage: "카드사를 선택해주세요." });
	});
});
