import { renderHook, act } from '@testing-library/react';
import useSelectedCardType from './useSelectCardType';

describe('신용카드 카드사 입력 테스트', () => {
	it('카드사를 선택하면 정확히 업데이트 되어야 한다.', () => {
		const selectCardType = '카카오뱅크';
		const { result } = renderHook(() => useSelectedCardType());
		const target = { value: selectCardType };

		act(() => {
			result.current.handleSelectCardTypeChange({
				target,
				currentTarget: target,
			} as React.ChangeEvent<HTMLButtonElement>);
		});

		expect(result.current.selectedCardType).toEqual(selectCardType);
	});
});
