import { renderHook } from '@testing-library/react';
import useIsValidLength from '../lib/useIsValidLength';

describe('useIsValidLength 테스트', () => {
  it('들어온 값의 길이가 지정한 대로 유효하지 않으면 false를 반환한다.', () => {
    const { result } = renderHook(() => useIsValidLength('123', 0, 4));

    expect(result.current).toBe(false);
  });

  it('들어온 값의 길이가 지정한 대로 유효하면 true를 반환한다.', () => {
    const { result } = renderHook(() => useIsValidLength('1234', 0, 4));

    expect(result.current).toBe(true);
  });
});
