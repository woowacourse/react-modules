import { renderHook, act } from '@testing-library/react';
import useCardHolder from './useCardHolder';
import { ERROR_MESSAGE } from '../constants';

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
		const expectedValidationResult = {
			isValid: true,
			errorMessage: '',
		};

		act(() => {
			result.current.handleCardHolderChange({
				target,
				currentTarget: target,
			} as React.ChangeEvent<HTMLInputElement>);
		});

		expect(result.current.inputValue.name).toEqual(userInput);
		expect(result.current.validationResult).toEqual(expectedValidationResult);
	});

	it('입력값이 숫자일 때 업데이트가 안된다', () => {
		const userInput = '2353';
		const { result } = renderHook(() => useCardHolder(initialValue));
		const target = { value: userInput, name: 'name' };
		const expectedValidationResult = {
			isValid: false,
			errorMessage: ERROR_MESSAGE.onlyEnglish,
		};

		act(() => {
			result.current.handleCardHolderChange({
				target,
				currentTarget: target,
			} as React.ChangeEvent<HTMLInputElement>);
		});

		expect(result.current.inputValue.name).not.toEqual(userInput);
		expect(result.current.validationResult).toEqual(expectedValidationResult);
	});

	it('입력값이 한글일 때 업데이트가 안된다', () => {
		const userInput = '한글 입력 테스트';
		const { result } = renderHook(() => useCardHolder(initialValue));
		const target = { value: userInput, name: 'name' };
		const expectedValidationResult = {
			isValid: false,
			errorMessage: ERROR_MESSAGE.onlyEnglish,
		};

		act(() => {
			result.current.handleCardHolderChange({
				target,
				currentTarget: target,
			} as React.ChangeEvent<HTMLInputElement>);
		});

		expect(result.current.inputValue.name).not.toEqual(userInput);
		expect(result.current.validationResult).toEqual(expectedValidationResult);
	});

	it('입력 값이 모두 채워지고 블러/엔터 이벤트 발생 시 에러가 발생하지 않는다', () => {
		const userInput = 'userInput';
		const { result } = renderHook(() => useCardHolder(initialValue));
		const target = { value: userInput, name: 'name' };
		const expectedValidationResult = {
			isValid: true,
			errorMessage: '',
		};

		act(() => {
			result.current.handleCardHolderBlur({
				target,
				currentTarget: target,
			} as React.FocusEvent<HTMLInputElement>);
		});

		expect(result.current.inputValue.name).toEqual(userInput);
		expect(result.current.validationResult).toEqual(expectedValidationResult);
	});

	it('입력 값이 없는 경우 블러/엔터 이벤트 발생 시 에러가 발생한다', () => {
		const userInput = '';
		const { result } = renderHook(() => useCardHolder(initialValue));
		const target = { value: userInput, name: 'name' };
		const expectedValidationResult = {
			isValid: false,
			errorMessage: ERROR_MESSAGE.nameOutOfRange,
		};

		act(() => {
			result.current.handleCardHolderBlur({
				target,
				currentTarget: target,
			} as React.FocusEvent<HTMLInputElement>);
		});

		expect(result.current.inputValue.name).not.toEqual(userInput);
		expect(result.current.validationResult).toEqual(expectedValidationResult);
	});
});
