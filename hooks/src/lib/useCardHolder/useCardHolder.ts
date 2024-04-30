import { ChangeEvent } from 'react';
import { useInput } from '../common';
import Validator from '../../utils/validator';

const useCardHolder = <T extends object>(initialValue: T) => {
	const { inputValue, handleInputChange } = useInput(initialValue);

	const handleCardHolderChange = (e: ChangeEvent<HTMLInputElement>) => {
		if (e.target !== e.currentTarget) return;

		const { value } = e.target;
		if (!Validator.checkEnglish(value)) return;

		handleInputChange(e);
	};

	// TODO: 이름 길이 제한 유효성 검사 및 constants도 확인하기

	return { inputValue, handleCardHolderChange } as const;
};

export default useCardHolder;
