import { renderHook, act } from "@testing-library/react";
import useCardPassword from "./useCardPassword";

describe("useCardPassword 테스트", () => {
	it("카드 비밀번호가 유효하게 입력되었을 때 isValid는 true, errorMessage는 빈 문자열인지 확인한다.", () => {
		const { result } = renderHook(() => useCardPassword());

		act(() => {
			result.current.validate("12");
		});

		expect(result.current.isValid).toBe(true);
		expect(result.current.errorMessage).toEqual("");
	});

	it("카드 비밀번호에 문자가 포함되었을 때 isValid는 false, errorMessage 값이 반환되는지 확인한다.", () => {
		const { result } = renderHook(() => useCardPassword());

		act(() => {
			result.current.validate("1ㄱ");
		});

		expect(result.current.isValid).toBe(false);
		expect(result.current.errorMessage).toEqual("숫자만 입력 가능합니다.");
	});

	it("카드 비밀번호 길이가 2자 미만일 경우 isValid는 false, errorMessage 값이 반환되는지 확인한다.", () => {
		const { result } = renderHook(() => useCardPassword());

		act(() => {
			result.current.validate("3");
		});

		expect(result.current.isValid).toBe(false);
		expect(result.current.errorMessage).toEqual("2자리를 입력해주세요.");
	});
});
