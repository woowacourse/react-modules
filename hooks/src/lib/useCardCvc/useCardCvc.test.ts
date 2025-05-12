import { renderHook, act } from "@testing-library/react";
import useCardCompany from "./useCardCvc";

describe("useCardCvc 테스트", () => {
	it("CVC가 유효하게 입력되었을 때 isValid는 true, errorMessage는 빈 문자열인지 확인한다.", () => {
		const { result } = renderHook(() => useCardCompany());

		act(() => {
			result.current.onChange("123");
		});

		expect(result.current.cardCvcError).toEqual({ isValid: true, errorMessage: "" });
	});

	it("CVC 입력에 문자가 포함되었을 때 isValid는 false, errorMessage 값이 반환되는지 확인한다.", () => {
		const { result } = renderHook(() => useCardCompany());

		act(() => {
			result.current.onChange("12r");
		});

		expect(result.current.cardCvcError).toEqual({ isValid: false, errorMessage: "숫자만 입력 가능합니다." });
	});

	it("CVC 입력 길이가 3자 미만일 경우 isValid는 false, errorMessage 값이 반환되는지 확인한다.", () => {
		const { result } = renderHook(() => useCardCompany());

		act(() => {
			result.current.onChange("12");
		});

		expect(result.current.cardCvcError).toEqual({ isValid: false, errorMessage: "3자리를 입력해주세요." });
	});
});
