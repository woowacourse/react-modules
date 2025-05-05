import { renderHook, act } from '@testing-library/react';

import useCardBrandValidate, {
  CardBrandValidateResult
} from './useCardBrandValidate';

describe('useCardBrandValidate', () => {
  const CARD_BRANDS = ['신한카드', '카카오뱅크', '국민카드'];
  let result: { current: CardBrandValidateResult };

  beforeEach(() => {
    const rendered = renderHook(() => useCardBrandValidate(CARD_BRANDS));
    result = rendered.result;
  });

  it('카드 브랜드가 올바르면 isValid가 true이고 에러 메시지가 null이다.', () => {
    act(() => {
      result.current.validateCardBrand('신한카드');
    });

    expect(result.current.isValid).toBe(true);
    expect(result.current.errorMessage).toBeNull();
  });

  it('카드 브랜드가 올바르지 않으면 isValid가 false이고 에러 메시지가 나온다.', () => {
    act(() => {
      result.current.validateCardBrand('농협카드');
    });

    expect(result.current.isValid).toBe(false);
    expect(result.current.errorMessage).toBe(
      '카드 브랜드가 올바르지 않습니다.'
    );
  });
});
