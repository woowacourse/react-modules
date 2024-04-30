import { ChangeEvent, useState } from 'react';

const useInput = <T extends object>(initialValue: T) => {
	const [inputValue, setInputValue] = useState<T>(initialValue);

	const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
		if (e.target !== e.currentTarget) return;
		const { value, name } = e.target;

		setInputValue((prev) => ({ ...prev, [name]: value }));
	};

	return { inputValue, handleInputChange } as const;
};

export default useInput;
