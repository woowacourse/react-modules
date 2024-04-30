import { renderHook, act } from '@testing-library/react';
import useExpiryDate from './useExpiryDate';

describe('신용카드 유효기간 입력 테스트', () => {
	const initialValue = {
		month: '12',
		year: '24',
	};

	it('초기값이 정확히 설정되어야 한다.', () => {
		const { result } = renderHook(() => useExpiryDate(initialValue));

		expect(result.current.inputValue).toEqual(initialValue);
	});

	it('월 유효기간 입력 시 정확히 업데이트 되어야 한다.', () => {
		const userInput = '08';
		const { result } = renderHook(() => useExpiryDate(initialValue));
		const target = { value: userInput, name: 'month' };

		act(() => {
			result.current.handleExpiryChange({
				target,
				currentTarget: target,
			} as React.ChangeEvent<HTMLInputElement>);
		});

		expect(result.current.inputValue.month).toEqual(userInput);
		expect(result.current.inputValue.year).toEqual(initialValue.year);
	});

	it('년도 유효기간 입력 시 정확히 업데이트 되어야 한다.', () => {
		const userInput = '30';
		const { result } = renderHook(() => useExpiryDate(initialValue));
		const target = { value: userInput, name: 'year' };

		act(() => {
			result.current.handleExpiryChange({
				target,
				currentTarget: target,
			} as React.ChangeEvent<HTMLInputElement>);
		});

		expect(result.current.inputValue.month).toEqual(initialValue.month);
		expect(result.current.inputValue.year).toEqual(userInput);
	});

	it('월 유효기간 입력값이 숫자가 아닐 때 업데이트가 안된다', () => {
		const userInput = 'notUpdate';
		const { result } = renderHook(() => useExpiryDate(initialValue));
		const target = { value: userInput, name: 'month' };

		act(() => {
			result.current.handleExpiryChange({
				target,
				currentTarget: target,
			} as React.ChangeEvent<HTMLInputElement>);
		});

		expect(result.current.inputValue.month).toEqual(initialValue.month);
		expect(result.current.inputValue.year).toEqual(initialValue.year);
	});

	it('년도 유효기간 입력값이 숫자가 아닐 때 업데이트가 안된다', () => {
		const userInput = 'notUpdate';
		const { result } = renderHook(() => useExpiryDate(initialValue));
		const target = { value: userInput, name: 'year' };

		act(() => {
			result.current.handleExpiryChange({
				target,
				currentTarget: target,
			} as React.ChangeEvent<HTMLInputElement>);
		});

		expect(result.current.inputValue.month).toEqual(initialValue.month);
		expect(result.current.inputValue.year).toEqual(initialValue.year);
	});

	it('월 유효기간 입력값이 2자리 초과시 업데이트가 안된다', () => {
		const userInput = '123';
		const { result } = renderHook(() => useExpiryDate(initialValue));
		const target = { value: userInput, name: 'month' };

		act(() => {
			result.current.handleExpiryChange({
				target,
				currentTarget: target,
			} as React.ChangeEvent<HTMLInputElement>);
		});

		expect(result.current.inputValue.month).toEqual(initialValue.month);
		expect(result.current.inputValue.year).toEqual(initialValue.year);
	});

	it('년도 유효기간 입력값이 2자리 초과시 업데이트가 안된다', () => {
		const userInput = '123';
		const { result } = renderHook(() => useExpiryDate(initialValue));
		const target = { value: userInput, name: 'year' };

		act(() => {
			result.current.handleExpiryChange({
				target,
				currentTarget: target,
			} as React.ChangeEvent<HTMLInputElement>);
		});

		expect(result.current.inputValue.month).toEqual(initialValue.month);
		expect(result.current.inputValue.year).toEqual(initialValue.year);
	});
});
