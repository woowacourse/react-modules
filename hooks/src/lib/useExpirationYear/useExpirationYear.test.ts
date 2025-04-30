import { renderHook, act } from "@testing-library/react";
import useExpirationYear from "./useExpirationYear";

describe("useExpirationYear 테스트", () => {
	it("카드 유효 기간 연이 유효하게 입력되었을 때 isValid는 true, errorMessage는 빈 문자열인지 확인한다.", () => {
		const { result } = renderHook(() => useExpirationYear());

		act(() => {
			result.current.validate("25");
		});

		expect(result.current.isValid).toBe(true);
		expect(result.current.errorMessage).toEqual("");
	});

	it("카드 유효 기간 연도에 문자가 포함되었을 때 isValid는 false, errorMessage 값이 반환되는지 확인한다.", () => {
		const { result } = renderHook(() => useExpirationYear());

		act(() => {
			result.current.validate("2ㄱ");
		});

		expect(result.current.isValid).toBe(false);
		expect(result.current.errorMessage).toEqual("숫자만 입력 가능합니다.");
	});

	it("카드 유효 기간 연도 길이가 2자 미만일 경우 isValid는 false, errorMessage 값이 반환되는지 확인한다.", () => {
		const { result } = renderHook(() => useExpirationYear());

		act(() => {
			result.current.validate("2");
		});

		expect(result.current.isValid).toBe(false);
		expect(result.current.errorMessage).toEqual("YY형태로 입력해주세요.");
	});

	it("카드 유효 기간 연도가 현재 연도보다 이전일 경우 isValid는 false, errorMessage 값이 반환되는지 확인한다.", () => {
		const { result } = renderHook(() => useExpirationYear());

		act(() => {
			result.current.validate("24");
		});

		expect(result.current.isValid).toBe(false);
		expect(result.current.errorMessage).toEqual("현재보다 이전년도는 입력할 수 없습니다.");
	});
});
