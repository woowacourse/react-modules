import { renderHook, act } from "@testing-library/react";
import useExpirationMonth from "./useExpirationMonth";

describe("useExpirationMonth 테스트", () => {
	it("카드 유효 기간 월이 유효하게 입력되었을 때 isValid는 true, errorMessage는 빈 문자열인지 확인한다.", () => {
		const { result } = renderHook(() => useExpirationMonth());

		act(() => {
			result.current.validate("12");
		});

		expect(result.current.isValid).toBe(true);
		expect(result.current.errorMessage).toEqual("");
	});

	it("카드 유효 기간 월이 문자가 포함되었을 때 isValid는 false, errorMessage 값이 반환되는지 확인한다.", () => {
		const { result } = renderHook(() => useExpirationMonth());

		act(() => {
			result.current.validate("1ㄱ");
		});

		expect(result.current.isValid).toBe(false);
		expect(result.current.errorMessage).toEqual("숫자만 입력 가능합니다.");
	});

	it("카드 유효 기간 월 길이가 2자 미만일 경우 isValid는 false, errorMessage 값이 반환되는지 확인한다.", () => {
		const { result } = renderHook(() => useExpirationMonth());

		act(() => {
			result.current.validate("3");
		});

		expect(result.current.isValid).toBe(false);
		expect(result.current.errorMessage).toEqual("MM형태로 입력해주세요.");
	});

	it("카드 유효 기간 월이 1~12월 사이가 아닐 경우 isValid는 false, errorMessage 값이 반환되는지 확인한다.", () => {
		const { result } = renderHook(() => useExpirationMonth());

		act(() => {
			result.current.validate("13");
		});

		expect(result.current.isValid).toBe(false);
		expect(result.current.errorMessage).toEqual("1~12까지의 범위만 입력 가능합니다.");
	});
});
