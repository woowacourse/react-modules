import { renderHook, act } from '@testing-library/react';
import { useCardPasswordInput } from '../src/lib/useCardPasswordInput';

describe('useCardPasswordInput custom hook 테스트', () => {
  it('비밀번호 앞 2자리를 입력하면, 에러가 발생하지 않는다.', () => {
    const { result } = renderHook(() => useCardPasswordInput());
    act(() => {
      result.current.handleCardPasswordChange('12');
    });
    expect(result.current.cardPasswordError).toBe('');
    expect(result.current.cardPassword).toBe('12');
  });

  it('숫자가 아닌 입력에는 에러가 발생한다.', () => {
    const { result } = renderHook(() => useCardPasswordInput());
    act(() => {
      result.current.handleCardPasswordChange('12a');
    });
    expect(result.current.cardPasswordError).toBe('숫자만 입력 가능합니다.');
  });

  it('자리수가 2자리 미만이면, 에러가 발생한다.', () => {
    const { result } = renderHook(() => useCardPasswordInput());
    act(() => {
      result.current.handleCardPasswordChange('1');
    });
    expect(result.current.cardPasswordError).toBe('비밀번호는 2자리여야 합니다.');
  });
});
