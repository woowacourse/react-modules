import { renderHook, act } from "@testing-library/react";
import useCardNumber from "./useCardNumber";

describe("useCardNumber 테스트", () => {
	it("카드 번호가 유효하게 입력되었을 때 isValid는 true, errorMessage는 빈 문자열인지 확인한다.", () => {
		const { result } = renderHook(() => useCardNumber());

		act(() => {
			result.current.validate("1234");
		});

		expect(result.current.isValid).toBe(true);
		expect(result.current.errorMessage).toEqual("");
	});

	it("카드 번호에 문자가 포함되었을 때 isValid는 false, errorMessage 값이 반환되는지 확인한다.", () => {
		const { result } = renderHook(() => useCardNumber());

		act(() => {
			result.current.validate("123ㄱ");
		});

		expect(result.current.isValid).toBe(false);
		expect(result.current.errorMessage).toEqual("숫자만 입력 가능합니다.");
	});

	it("카드 번호 길이가 4자 미만일 경우 isValid는 false, errorMessage 값이 반환되는지 확인한다.", () => {
		const { result } = renderHook(() => useCardNumber());

		act(() => {
			result.current.validate("123");
		});

		expect(result.current.isValid).toBe(false);
		expect(result.current.errorMessage).toEqual("4자리를 입력해주세요.");
	});
});
