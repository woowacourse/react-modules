import { renderHook, act } from '@testing-library/react';
import useCVC from './useCVC';

describe('신용카드 CVC 입력 테스트', () => {
	const initialValue = {
		cvc: '99',
	};

	it('초기값이 정확히 설정되어야 한다.', () => {
		const { result } = renderHook(() => useCVC(initialValue));

		expect(result.current.inputValue).toEqual(initialValue);
	});

	it('입력값 숫자일 떄 정확히 업데이트 되어야 한다.', () => {
		const userInput = '129';
		const { result } = renderHook(() => useCVC(initialValue));
		const target = { value: userInput, name: 'cvc' };

		act(() => {
			result.current.handleCvcChange({
				target,
				currentTarget: target,
			} as React.ChangeEvent<HTMLInputElement>);
		});

		expect(result.current.inputValue.cvc).toEqual(userInput);
	});

	it('입력값이 숫자가 아닐 때 업데이트가 안된다', () => {
		const userInput = 'notUpdate';
		const { result } = renderHook(() => useCVC(initialValue));
		const target = { value: userInput, name: 'cvc' };

		act(() => {
			result.current.handleCvcChange({
				target,
				currentTarget: target,
			} as React.ChangeEvent<HTMLInputElement>);
		});

		expect(result.current.inputValue.cvc).not.toEqual(userInput);
	});

	it('입력값이 3자리 초과시 업데이트가 안된다', () => {
		const userInput = '1234';
		const { result } = renderHook(() => useCVC(initialValue));
		const target = { value: userInput, name: 'cvc' };

		act(() => {
			result.current.handleCvcChange({
				target,
				currentTarget: target,
			} as React.ChangeEvent<HTMLInputElement>);
		});

		expect(result.current.inputValue.cvc).not.toEqual(userInput);
	});
});
