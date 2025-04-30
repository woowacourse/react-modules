import { renderHook, waitFor } from '@testing-library/react';
import useCardBrandValidate from './useCardBrandValidate';
import { act } from 'react';

describe('useCardBrandValidate', () => {
  const CARD_BRANDS = ['신한카드', '카카오뱅크', '국민카드'];
  it('카드 브랜드가 올바르면 isValid가 true이고 에러 메시지가 null이다.', () => {
    const { result } = renderHook(() => useCardBrandValidate(CARD_BRANDS));

    const { isValid, errorMessage, validateCardBrand } = result.current;

    act(() => {
      validateCardBrand('신한카드');
    });

    waitFor(() => {
      expect(isValid).toBe(true);
      expect(errorMessage).toBeNull();
    });
  });

  it('카드 브랜드가 올바르지 않으면 isValid가 false이고 에러 메시지가 나온다.', () => {
    const { result } = renderHook(() => useCardBrandValidate(CARD_BRANDS));

    const { isValid, errorMessage, validateCardBrand } = result.current;

    act(() => {
      validateCardBrand('농협카드');
    });

    waitFor(() => {
      expect(isValid).toBe(false);
      expect(errorMessage).toBe('카드 브랜드가 올바르지 않습니다.');
    });
  });
});
