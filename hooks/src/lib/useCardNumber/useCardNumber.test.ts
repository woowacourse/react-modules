import { renderHook, act } from '@testing-library/react';
import useCardNumber from './useCardNumber';

describe('신용카드 번호 입력 테스트', () => {
	const initialValue = {
		first: 'first',
		second: 'second',
		third: 'third',
	};

	it('초기값이 정확히 설정되어야 한다.', () => {
		const { result } = renderHook(() => useCardNumber(initialValue));

		expect(result.current.inputValue).toEqual(initialValue);
	});

	it('입력값 숫자일 떄 정확히 업데이트 되어야 한다.', () => {
		const userInput = '1234';
		const { result } = renderHook(() => useCardNumber(initialValue));
		const target = { value: userInput, name: 'first' };

		act(() => {
			result.current.handleCardNumberChange({
				target,
				currentTarget: target,
			} as React.ChangeEvent<HTMLInputElement>);
		});

		expect(result.current.inputValue.first).toEqual(userInput);
	});

	it('입력값이 숫자가 아닐 때 업데이트가 안된다', () => {
		const userInput = 'notUpdate';
		const { result } = renderHook(() => useCardNumber(initialValue));
		const target = { value: userInput, name: 'first' };

		act(() => {
			result.current.handleCardNumberChange({
				target,
				currentTarget: target,
			} as React.ChangeEvent<HTMLInputElement>);
		});

		expect(result.current.inputValue.first).not.toEqual(userInput);
	});

	it('입력값이 4자리 이상일 때 업데이트가 안된다', () => {
		const userInput = '12345';
		const { result } = renderHook(() => useCardNumber(initialValue));
		const target = { value: userInput, name: 'first' };

		act(() => {
			result.current.handleCardNumberChange({
				target,
				currentTarget: target,
			} as React.ChangeEvent<HTMLInputElement>);
		});

		expect(result.current.inputValue.first).not.toEqual(userInput);
	});
});
