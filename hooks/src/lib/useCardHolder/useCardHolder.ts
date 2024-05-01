import { ChangeEvent, useState, KeyboardEvent, FocusEvent } from 'react';
import { useInput } from '../common';
import Validator from '../utils/validator';
import { ERROR_MESSAGE } from '../constants';
import { EventProcessor, NameValuePair } from '../common/useInput';

const useCardHolder = <T extends object>(initialValue: T) => {
	const { inputValue, handleInputChange, handleEventProcessor } = useInput(initialValue);
	const [validationResult, setValidationResult] = useState<ValidationResult>({
		isValid: true,
		errorMessage: '',
	});

	const handleCardHolderChange = (e: ChangeEvent<HTMLInputElement>) => {
		if (e.target !== e.currentTarget) return;

		const { value } = e.target;
		if (!Validator.checkEnglish(value)) {
			return setValidationResult({
				isValid: false,
				errorMessage: ERROR_MESSAGE.onlyEnglish,
			});
		}

		handleInputChange(e);
		setValidationResult({
			isValid: true,
			errorMessage: '',
		});
	};

	const handleCardHolderBlur = (e: FocusEvent<HTMLInputElement>) => {
		if (e.target !== e.currentTarget) return;

		const { value } = e.target;
		if (!Validator.checkExist(value))
			return setValidationResult({
				isValid: false,
				errorMessage: ERROR_MESSAGE.nameOutOfRange,
			});

		handleEventProcessor(processor, e);
		setValidationResult({
			isValid: true,
			errorMessage: '',
		});
	};

	const handleCardHolderEnter = (e: KeyboardEvent<HTMLInputElement>) => {
		if (e.target !== e.currentTarget) return;
		if (e.key !== 'Enter') return;

		const { value } = e.target as HTMLInputElement;
		if (!Validator.checkExist(value))
			return setValidationResult({
				isValid: false,
				errorMessage: ERROR_MESSAGE.nameOutOfRange,
			});

		handleEventProcessor(processor, e);
		setValidationResult({
			isValid: true,
			errorMessage: '',
		});
	};

	const processor = (e: EventProcessor) => {
		const { value, name } = e.target as NameValuePair;

		return { name, value } as const;
	};

	return {
		inputValue,
		validationResult,
		handleCardHolderChange,
		handleCardHolderBlur,
		handleCardHolderEnter,
	} as const;
};

export default useCardHolder;
