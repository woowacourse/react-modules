import { renderHook, act } from "@testing-library/react";
import useCardNumber from "./useCardNumber";

describe("useCardNumber", () => {
	it("정상 입력 (4자리 숫자) 시 에러 없음", () => {
		const { result } = renderHook(() => useCardNumber());

		act(() => {
			result.current.onChange("1234");
		});

		expect(result.current.cardNumber).toBe("1234");
		expect(result.current.cardNumberError).toEqual({
			isValid: true,
			errorMessage: "",
		});
	});

	it("문자 입력 시 '숫자만 입력 가능합니다.' 에러 발생", () => {
		const { result } = renderHook(() => useCardNumber());

		act(() => {
			result.current.onChange("12a4");
		});
		expect(result.current.cardNumberError).toEqual({
			isValid: false,
			errorMessage: "숫자만 입력 가능합니다.",
		});
	});

	it("빈 값 입력 시 '값을 입력해주세요.' 에러 발생", () => {
		const { result } = renderHook(() => useCardNumber());

		act(() => {
			result.current.onChange("");
		});

		expect(result.current.cardNumberError).toEqual({
			isValid: false,
			errorMessage: "값을 입력해주세요.",
		});
	});

	it("4자리 미만 (예: 123) 입력 시 '4자리를 입력해주세요.' 에러 발생", () => {
		const { result } = renderHook(() => useCardNumber());

		act(() => {
			result.current.onChange("123");
		});

		expect(result.current.cardNumberError).toEqual({
			isValid: false,
			errorMessage: "4자리를 입력해주세요.",
		});
	});
});
