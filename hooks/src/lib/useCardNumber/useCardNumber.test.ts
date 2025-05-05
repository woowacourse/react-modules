import { renderHook, act } from "@testing-library/react";
import useCardNumber from "./useCardNumber";

describe("useCardNumber 테스트", () => {
	it("카드 번호가 유효하게 입력되었을 때 isValid는 true, errorMessage는 빈 문자열인지 확인한다.", () => {
		const { result } = renderHook(() => useCardNumber());

		const testValue = { first: "1234", second: "1111", third: "3333", fourth: "1234" };

		for (const [label, value] of Object.entries(testValue)) {
			act(() => {
				result.current.validate(label, value);
			});
		}

		expect(result.current.error).toEqual({
			first: { isValid: true, errorMessage: "" },
			second: { isValid: true, errorMessage: "" },
			third: { isValid: true, errorMessage: "" },
			fourth: { isValid: true, errorMessage: "" },
		});
	});

	it("카드 번호에 문자가 포함되었을 때 isValid는 false, errorMessage 값이 반환되는지 확인한다.", () => {
		const { result } = renderHook(() => useCardNumber());
		const testValue = { first: "123a", second: "1111", third: "3333", fourth: "1234" };

		for (const [label, value] of Object.entries(testValue)) {
			act(() => {
				result.current.validate(label, value);
			});
		}

		expect(result.current.error).toEqual({
			first: { isValid: false, errorMessage: "숫자만 입력 가능합니다." },
			second: { isValid: true, errorMessage: "" },
			third: { isValid: true, errorMessage: "" },
			fourth: { isValid: true, errorMessage: "" },
		});
	});

	it("카드 번호 길이가 4자 미만일 경우 isValid는 false, errorMessage 값이 반환되는지 확인한다.", () => {
		const { result } = renderHook(() => useCardNumber());

		const testValue = { first: "123", second: "1111", third: "3333", fourth: "1234" };

		for (const [label, value] of Object.entries(testValue)) {
			act(() => {
				result.current.validate(label, value);
			});
		}

		expect(result.current.error).toEqual({
			first: { isValid: false, errorMessage: "4자리를 입력해주세요." },
			second: { isValid: true, errorMessage: "" },
			third: { isValid: true, errorMessage: "" },
			fourth: { isValid: true, errorMessage: "" },
		});
	});
});
