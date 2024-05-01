import { ChangeEvent, KeyboardEvent, FocusEvent, useState } from 'react';
import { useInput } from '../common';
import Validator from '../../utils/validator';
import { ERROR_MESSAGE, OPTION } from '../../constants';
import { EventProcessor, NameValuePair } from '../common/useInput';

const useCardNumber = <T extends object>(initialValue: T) => {
	const { inputValue, handleInputChange, handleEventProcessor } = useInput(initialValue);
	const [validationResult, setValidationResult] = useState<ValidationResult>({
		isValid: true,
		errorMessage: '',
	});

	const handleCardNumberChange = (e: ChangeEvent<HTMLInputElement>) => {
		if (e.target !== e.currentTarget) return;

		const { value } = e.target;
		if (!Validator.checkNumberAndOver(value, OPTION.cardNumberMaxLength)) {
			return setValidationResult({
				isValid: false,
				errorMessage: ERROR_MESSAGE.onlyNumber,
			});
		}

		handleInputChange(e);
		setValidationResult({
			isValid: true,
			errorMessage: '',
		});
	};

	const handleCardNumberBlur = (e: FocusEvent<HTMLInputElement>) => {
		if (e.target !== e.currentTarget) return;

		const { value } = e.target;
		if (!Validator.checkFillNumber(value, OPTION.cardNumberMaxLength))
			return setValidationResult({
				isValid: false,
				errorMessage: ERROR_MESSAGE.cardNumberOutOfRange,
			});

		handleEventProcessor(processor, e);
		setValidationResult({
			isValid: true,
			errorMessage: '',
		});
	};

	const handleCardNumberEnter = (e: KeyboardEvent<HTMLInputElement>) => {
		if (e.target !== e.currentTarget) return;
		if (e.key !== 'Enter') return;

		const { value } = e.target as HTMLInputElement;
		if (!value || !Validator.checkFillNumber(value, OPTION.cardNumberMaxLength))
			return setValidationResult({
				isValid: false,
				errorMessage: ERROR_MESSAGE.cardNumberOutOfRange,
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
		handleCardNumberChange,
		handleCardNumberBlur,
		handleCardNumberEnter,
	} as const;
};

export default useCardNumber;
