import { renderHook } from '@testing-library/react';
import useCardPasswordValidation from '../lib/useCardPasswordValidation';

describe('usePasswordValidation 테스트', () => {
  it('password로 유효한 형태가 들어오면 isPasswordError로 false를 반환한다.', () => {
    const password = '12';

    const { result } = renderHook(() => useCardPasswordValidation(password));
    expect(result.current.isPasswordError).toBe(false);
  });

  it('password로 유효하지 않은 형태가 들어오면 isPasswordError로 true를 반환한다.', () => {
    const password = 'as';

    const { result } = renderHook(() => useCardPasswordValidation(password));
    expect(result.current.isPasswordError).toBe(true);
  });
});
