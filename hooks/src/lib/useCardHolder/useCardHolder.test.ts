import { renderHook, act } from '@testing-library/react';
import useCardHolder from './useCardHolder';

describe('신용카드의 소유자 이름 입력 테스트', () => {
	const initialValue = {
		name: 'testName',
	};

	it('초기값이 정확히 설정되어야 한다.', () => {
		const { result } = renderHook(() => useCardHolder(initialValue));

		expect(result.current.inputValue).toEqual(initialValue);
	});

	it('입력값 영어일 떄 정확히 업데이트 되어야 한다.', () => {
		const userInput = 'changeName';
		const { result } = renderHook(() => useCardHolder(initialValue));
		const target = { value: userInput, name: 'name' };

		act(() => {
			result.current.handleCardHolderChange({
				target,
				currentTarget: target,
			} as React.ChangeEvent<HTMLInputElement>);
		});

		expect(result.current.inputValue.name).toEqual(userInput);
	});

	it('입력값이 숫자일 때 업데이트가 안된다', () => {
		const userInput = '2353';
		const { result } = renderHook(() => useCardHolder(initialValue));
		const target = { value: userInput, name: 'name' };

		act(() => {
			result.current.handleCardHolderChange({
				target,
				currentTarget: target,
			} as React.ChangeEvent<HTMLInputElement>);
		});

		expect(result.current.inputValue.name).not.toEqual(userInput);
	});

	it('입력값이 한글일 때 업데이트가 안된다', () => {
		const userInput = '한글 입력 테스트';
		const { result } = renderHook(() => useCardHolder(initialValue));
		const target = { value: userInput, name: 'name' };

		act(() => {
			result.current.handleCardHolderChange({
				target,
				currentTarget: target,
			} as React.ChangeEvent<HTMLInputElement>);
		});

		expect(result.current.inputValue.name).not.toEqual(userInput);
	});
});
