import { renderHook } from '@testing-library/react';
import useIsNumber from '../lib/useIsNumber';

describe('useIsNumber 테스트', () => {
  it.each(['mingo', '3.4'])('숫자가 아닌 값이 들어오면 false를 반환한다.', (value) => {
    const { result } = renderHook(() => useIsNumber(value));

    expect(result.current).toBe(false);
  });

  it('숫자인 값이 들어오면 true를 반환한다.', () => {
    const { result } = renderHook(() => useIsNumber('1234'));

    expect(result.current).toBe(true);
  });
});
