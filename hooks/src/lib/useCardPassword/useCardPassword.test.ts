import { renderHook } from '@testing-library/react';
import { ChangeEvent, act } from 'react';
import useCardPassword from './useCardPassword';

describe('useCardPassword 테스트', () => {
  it('카드 비밀번호의 초기값 설정 시, 정확하게 설정되어야 한다.', () => {
    const initialValue = '12';
    const { result } = renderHook(() => useCardPassword(initialValue));

    expect(result.current.value).toBe(initialValue);
  });

  it.each([['1'], ['123']])('입력한 비밀번호가 2자리가 아니라면 에러 상태가 true가 된다.', (userInput: string) => {
    const { result } = renderHook(() => useCardPassword());

    act(() => {
      result.current.onChange({
        target: { value: userInput },
      } as ChangeEvent<HTMLInputElement>);
    });

    expect(result.current.error.state).toBeTruthy();
  });

  it.each([['nakta'], ['@/[]'], [' '], ['한글입력']])('입력값이 숫자가 아닌 경우 입력을 제한한다.', (userInput: string) => {
    const { result } = renderHook(() => useCardPassword());

    act(() => {
      result.current.onChange({
        target: { value: userInput },
      } as ChangeEvent<HTMLInputElement>);
    });

    expect(result.current.value).toBe('');
  });
});
