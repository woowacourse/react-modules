import { renderHook } from '@testing-library/react';
import { act } from 'react';
import useCardBrand from '../src/useCardBrand/useCardBrand';
import { CARD_BRAND_ERROR_MESSAGE } from '../src/useCardBrand/useCardBrand';

describe('useCardBrand hook 테스트', () => {
  const optionValues = ['Visa', 'MasterCard', 'Amex'];

  it('초깃값은 빈 문자열이다', () => {
    const { result } = renderHook(() => useCardBrand({ optionValues }));
    expect(result.current.cardBrand).toBe('');
  });

  it('초기값을 설정할 수 있다', () => {
    const { result } = renderHook(() =>
      useCardBrand({ userCardBrand: 'Visa', optionValues })
    );
    expect(result.current.cardBrand).toBe('Visa');
  });

  it('올바른 브랜드를 입력하면 상태가 업데이트된다', () => {
    const { result } = renderHook(() => useCardBrand({ optionValues }));

    const event = {
      target: { value: 'MasterCard' },
    } as React.ChangeEvent<HTMLInputElement>;

    act(() => {
      result.current.handleCardBrandChange(event);
    });

    expect(result.current.cardBrand).toBe('MasterCard');
    expect(result.current.isError).toBe(false);
  });

  it('옵션에 없는 값을 입력하면 에러 상태를 반환한다', () => {
    const { result } = renderHook(() => useCardBrand({ optionValues }));

    const event = {
      target: { value: 'NotABrand' },
    } as React.ChangeEvent<HTMLInputElement>;

    act(() => {
      result.current.handleCardBrandChange(event);
    });

    expect(result.current.isError).toBe(true);
    expect(result.current.errorMessage).toBe(
      CARD_BRAND_ERROR_MESSAGE.NOT_SELECTED
    );
  });
});
