import { ChangeEvent, KeyboardEvent, FocusEvent, useState } from 'react';
import { useInput } from '../common';
import Validator from '../../utils/validator';
import { ERROR_MESSAGE, OPTION } from '../../constants';
import { EventProcessor, NameValuePair } from '../common/useInput';

const useCVC = <T extends object>(initialValue: T) => {
	const { inputValue, handleInputChange, handleEventProcessor } = useInput(initialValue);
	const [validationResult, setValidationResult] = useState<ValidationResult>({
		isValid: true,
		errorMessage: '',
	});

	const handleCvcChange = (e: ChangeEvent<HTMLInputElement>) => {
		if (e.target !== e.currentTarget) return;

		const { value } = e.target;
		if (!Validator.checkNumberAndOver(value, OPTION.cvcMaxLength)) {
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

	const handleCvcBlur = (e: FocusEvent<HTMLInputElement>) => {
		if (e.target !== e.currentTarget) return;

		const { value } = e.target;
		if (!Validator.checkFillNumber(value, OPTION.cvcMaxLength))
			return setValidationResult({
				isValid: false,
				errorMessage: ERROR_MESSAGE.cvcOutOfRange,
			});

		handleEventProcessor(processor, e);
		setValidationResult({
			isValid: true,
			errorMessage: '',
		});
	};

	const handleCvcEnter = (e: KeyboardEvent<HTMLInputElement>) => {
		if (e.target !== e.currentTarget) return;
		if (e.key !== 'Enter') return;

		const { value } = e.target as HTMLInputElement;
		if (!value || !Validator.checkFillNumber(value, OPTION.cvcMaxLength))
			return setValidationResult({
				isValid: false,
				errorMessage: ERROR_MESSAGE.cvcOutOfRange,
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
		handleCvcChange,
		handleCvcBlur,
		handleCvcEnter,
	} as const;
};

export default useCVC;
