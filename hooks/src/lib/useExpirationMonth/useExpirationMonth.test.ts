import { renderHook, act } from "@testing-library/react";
import useExpirationMonth from "./useExpirationMonth";
import { checkLength, checkMonthRange, checkNumber } from "../utils/vaildate";

describe("useExpirationMonth 테스트", () => {
	it("카드 유효 기간 월이 유효하게 입력되었을 때 isValid는 true, errorMessage는 빈 문자열인지 확인한다.", () => {
		const { result } = renderHook(() => useExpirationMonth([checkNumber, () => checkLength("12", 2), checkMonthRange]));

		act(() => {
			result.current.validate("12");
		});

		expect(result.current.error).toEqual({ isValid: true, errorMessage: "" });
	});

	it("카드 유효 기간 월이 문자가 포함되었을 때 isValid는 false, errorMessage 값이 반환되는지 확인한다.", () => {
		const { result } = renderHook(() => useExpirationMonth([checkNumber]));

		act(() => {
			result.current.validate("1ㄱ");
		});

		expect(result.current.error).toEqual({ isValid: false, errorMessage: "숫자만 입력 가능합니다." });
	});

	it("카드 유효 기간 월 길이가 2자 미만일 경우 isValid는 false, errorMessage 값이 반환되는지 확인한다.", () => {
		const { result } = renderHook(() => useExpirationMonth([() => checkLength("3", 2)]));

		act(() => {
			result.current.validate("3");
		});

		expect(result.current.error).toEqual({ isValid: false, errorMessage: "2자리를 입력해주세요." });
	});

	it("카드 유효 기간 월이 1~12월 사이가 아닐 경우 isValid는 false, errorMessage 값이 반환되는지 확인한다.", () => {
		const { result } = renderHook(() => useExpirationMonth([checkMonthRange]));

		act(() => {
			result.current.validate("13");
		});

		expect(result.current.error).toEqual({ isValid: false, errorMessage: "1~12까지의 범위만 입력 가능합니다." });
	});
});
