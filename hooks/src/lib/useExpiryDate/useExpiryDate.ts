import { ChangeEvent, KeyboardEvent, FocusEvent, useState } from 'react';
import { useInput } from '../common';
import Validator from '../utils/validator';
import { ERROR_MESSAGE, OPTION } from '../constants';
import { EventProcessor, NameValuePair } from '../common/useInput';
import formattingMonth from '../utils/formattingMonth';

const useExpiryDate = <T extends object>(initialValue: T) => {
	const { inputValue, handleInputChange, handleEventProcessor } = useInput<T>(initialValue);
	const [validationResult, setValidationResult] = useState<ValidationResult>({
		isValid: true,
		errorMessage: '',
	});

	const handleExpiryChange = (e: ChangeEvent<HTMLInputElement>) => {
		if (e.target !== e.currentTarget) return;

		const { value } = e.target;

		if (!Validator.checkNumberAndOver(value, OPTION.expirationDateMaxLength)) {
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

	const handleExpiryDateBlur = (e: FocusEvent<HTMLInputElement>) => {
		if (e.target !== e.currentTarget) return;

		const { value, name } = e.target;

		if (name === 'year' && !Validator.checkFillNumber(value, OPTION.expirationDateMaxLength))
			return setValidationResult({
				isValid: false,
				errorMessage: ERROR_MESSAGE.expiryFormat,
			});

		if (name === 'month' && !Validator.checkCreditExpirationPeriod(value, name))
			return setValidationResult({
				isValid: false,
				errorMessage: ERROR_MESSAGE.expiredCard,
			});

		handleEventProcessor(processor, e);
		setValidationResult({
			isValid: true,
			errorMessage: '',
		});
	};

	const handleExpiryDateEnter = (e: KeyboardEvent<HTMLInputElement>) => {
		if (e.target !== e.currentTarget) return;
		if (e.key !== 'Enter') return;

		const { value, name } = e.target as HTMLInputElement;
		if (name === 'year' && !Validator.checkFillNumber(value, OPTION.expirationDateMaxLength))
			return setValidationResult({
				isValid: false,
				errorMessage: ERROR_MESSAGE.expiryFormat,
			});

		if (!Validator.checkCreditExpirationPeriod(value, name))
			return setValidationResult({
				isValid: false,
				errorMessage: ERROR_MESSAGE.expiredCard,
			});

		handleEventProcessor(processor, e);
		setValidationResult({
			isValid: true,
			errorMessage: '',
		});
	};

	const processor = (e: EventProcessor) => {
		const { value, name } = e.target as NameValuePair;
		if (name === 'month') {
			const newValue = formattingMonth(value, name);

			return { name, value: newValue } as const;
		}

		return { name, value } as const;
	};

	return {
		inputValue,
		validationResult,
		handleExpiryChange,
		handleExpiryDateBlur,
		handleExpiryDateEnter,
	} as const;
};

export default useExpiryDate;
