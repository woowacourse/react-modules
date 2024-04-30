import { ChangeEvent } from 'react';
import { useInput } from '../common';
import Validator from '../../utils/validator';
import { OPTION } from '../../constants';

const useCardNumber = <T extends object>(initialValue: T) => {
	const { inputValue, handleInputChange } = useInput(initialValue);

	const handleCardNumberChange = (e: ChangeEvent<HTMLInputElement>) => {
		if (e.target !== e.currentTarget) return;

		const { value } = e.target;
		if (!Validator.checkNumber(value, OPTION.cardNumberMaxLength)) return;

		handleInputChange(e);
	};

	// TODO: Blur&Enter시 4자리가 채워졌는 유효성검사

	return { inputValue, handleCardNumberChange } as const;
};

export default useCardNumber;
