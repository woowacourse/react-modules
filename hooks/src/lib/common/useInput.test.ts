import { renderHook, act } from '@testing-library/react';
import useInput from './useInput';

describe('useInput', () => {
	const initialValue = {
		first: 'first',
		second: 'second',
		third: 'third',
	};

	it('초기값이 정확히 설정되어야 한다.', () => {
		const { result } = renderHook(() => useInput(initialValue));

		expect(result.current.inputValue).toEqual(initialValue);
	});

	it('입력값이 정확히 업데이트 되어야 한다.', () => {
		const userInput = 'input';
		const { result } = renderHook(() => useInput(initialValue));
		const target = { value: userInput, name: 'first' };

		act(() => {
			result.current.handleInputChange({
				target,
				currentTarget: target,
			} as React.ChangeEvent<HTMLInputElement>);
		});

		expect(result.current.inputValue.first).toEqual(userInput);
	});
});
