import { ChangeEvent } from 'react';
import { useInput } from '../common';
import Validator from '../../utils/validator';
import { OPTION } from '../../constants';

const useCVC = <T extends object>(initialValue: T) => {
	const { inputValue, handleInputChange } = useInput(initialValue);

	// TODO: Blur&Enter시 3자리가 채워졌는 유효성검사

	const handleCvcChange = (e: ChangeEvent<HTMLInputElement>) => {
		if (e.target !== e.currentTarget) return;

		const { value } = e.target;
		if (!Validator.checkNumber(value, OPTION.cvcMaxLength)) return;

		handleInputChange(e);
	};

	return { inputValue, handleCvcChange } as const;
};

export default useCVC;
