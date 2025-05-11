import { renderHook, act } from '@testing-library/react';

import useCardBrand, { UseCardBrandResult } from './useCardBrand';

describe('useCardBrand', () => {
  const CARD_BRANDS = ['신한카드', '카카오뱅크', '국민카드'];
  let result: { current: UseCardBrandResult };

  beforeEach(() => {
    const rendered = renderHook(() => useCardBrand(CARD_BRANDS));
    result = rendered.result;
  });

  it('선택된 카드 브랜드가 올바르면 카드 브랜드가 선택되고 에러 메시지가 null이다.', () => {
    act(() => {
      result.current.handleBrandSelect({
        target: { value: '신한카드' }
      } as React.ChangeEvent<HTMLSelectElement>);
    });

    expect(result.current.cardBrand).toBe('신한카드');
    expect(result.current.errorMessage).toBeNull();
  });

  it('선택된 카드 브랜드가 올바르지 않으면 "카드 브랜드가 올바르지 않습니다." 에러 메시지가 나온다.', () => {
    act(() => {
      result.current.handleBrandSelect({
        target: { value: '농협카드' }
      } as React.ChangeEvent<HTMLSelectElement>);
    });

    expect(result.current.errorMessage).toBe(
      '카드 브랜드가 올바르지 않습니다.'
    );
  });
});
