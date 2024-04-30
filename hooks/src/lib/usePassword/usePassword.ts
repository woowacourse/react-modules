import { ChangeEvent } from 'react';
import { useInput } from '../common';
import Validator from '../../utils/validator';
import { OPTION } from '../../constants';

const usePassword = <T extends object>(initialValue: T) => {
	const { inputValue, handleInputChange } = useInput(initialValue);

	const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
		if (e.target !== e.currentTarget) return;

		const { value } = e.target;
		if (!Validator.checkNumber(value, OPTION.passwordMaxLength)) return;

		handleInputChange(e);
	};

	// TODO: Blur&Enter시 2자리가 채워졌는 유효성검사

	return { inputValue, handlePasswordChange } as const;
};

export default usePassword;
