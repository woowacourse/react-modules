import { renderHook, act } from '@testing-library/react';
import usePassword from './usePassword';

describe('신용카드 비밀번호 입력 테스트', () => {
	const initialValue = {
		password: '12',
	};

	it('초기값이 정확히 설정되어야 한다.', () => {
		const { result } = renderHook(() => usePassword(initialValue));

		expect(result.current.inputValue).toEqual(initialValue);
	});

	it('입력값 숫자일 떄 정확히 업데이트 되어야 한다.', () => {
		const userInput = '99';
		const { result } = renderHook(() => usePassword(initialValue));
		const target = { value: userInput, name: 'password' };

		act(() => {
			result.current.handlePasswordChange({
				target,
				currentTarget: target,
			} as React.ChangeEvent<HTMLInputElement>);
		});

		expect(result.current.inputValue.password).toEqual(userInput);
	});

	it('입력값이 숫자가 아닐 때 업데이트가 안된다', () => {
		const userInput = 'notUpdate';
		const { result } = renderHook(() => usePassword(initialValue));
		const target = { value: userInput, name: 'password' };

		act(() => {
			result.current.handlePasswordChange({
				target,
				currentTarget: target,
			} as React.ChangeEvent<HTMLInputElement>);
		});

		expect(result.current.inputValue.password).not.toEqual(userInput);
	});

	it('입력값이 2자리 초과시 업데이트가 안된다', () => {
		const userInput = '123';
		const { result } = renderHook(() => usePassword(initialValue));
		const target = { value: userInput, name: 'password' };

		act(() => {
			result.current.handlePasswordChange({
				target,
				currentTarget: target,
			} as React.ChangeEvent<HTMLInputElement>);
		});

		expect(result.current.inputValue.password).not.toEqual(userInput);
	});
});
