import { ChangeEvent, useState } from 'react';
import { CARD } from '../../constants/option';

type CardType = keyof typeof CARD;

const useSelectCardType = (initialSelected?: CardType) => {
	const [selectedCardType, setSelectedCardType] = useState<CardType | null>(
		initialSelected || null,
	);

	const handleSelectCardTypeChange = (e: ChangeEvent<HTMLButtonElement | HTMLSelectElement>) => {
		if (e.target !== e.currentTarget) return;

		const { value } = e.target;

		setSelectedCardType(value as CardType);
	};

	return { selectedCardType, handleSelectCardTypeChange } as const;
};

export default useSelectCardType;
