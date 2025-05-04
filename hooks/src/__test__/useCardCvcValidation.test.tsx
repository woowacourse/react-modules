import { renderHook } from '@testing-library/react';
import useCardCvcValidation from '../lib/useCardCvcValidation';

describe('useCardCvcValidation 테스트', () => {
  it('CVC로 유효한 형태가 들어오면 isCvcError로 false를 반환한다.', () => {
    const cvc = '123';

    const { result } = renderHook(() => useCardCvcValidation(cvc));
    expect(result.current.isCvcError).toBe(false);
  });

  it('CVC로 유효하지 않은 형태가 들어오면 isCvcError로 true를 반환한다.', () => {
    const cvc = 'asd';

    const { result } = renderHook(() => useCardCvcValidation(cvc));
    expect(result.current.isCvcError).toBe(true);
  });
});
