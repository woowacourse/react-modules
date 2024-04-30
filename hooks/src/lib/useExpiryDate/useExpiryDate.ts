import { ChangeEvent } from 'react';
import { useInput } from '../common';
import Validator from '../../utils/validator';
import { OPTION } from '../../constants';

const useExpiryDate = <T extends object>(initialValue: T) => {
	const { inputValue, handleInputChange } = useInput(initialValue);

	// TODO: Blur&Enter시 2자리 숫자가 채워졌는지
	// TODO: Blur&Enter시 유효기간이 만료 됐는지

	const handleExpiryChange = (e: ChangeEvent<HTMLInputElement>) => {
		if (e.target !== e.currentTarget) return;

		const { value } = e.target;
		if (!Validator.checkNumber(value, OPTION.expirationDateMaxLength)) return;

		handleInputChange(e);
	};

	const handleExpiryChangeBlur = (e: ChangeEvent<HTMLInputElement>) => {
		if (e.target !== e.currentTarget) return;

		const { value } = e.target;
		if (!Validator.checkNumber(value, OPTION.expirationDateMaxLength)) return;

		handleInputChange(e);
	};

	return { inputValue, handleExpiryChange } as const;
};

export default useExpiryDate;
