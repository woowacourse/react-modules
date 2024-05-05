import { renderHook } from '@testing-library/react';
import { ChangeEvent, act } from 'react';
import useCardOwner from './useCardOwner';

describe('useCardOwner 테스트', () => {
  it('초기값이 정확하게 설정되어야 한다.', () => {
    const initialValue = 'SONG NAKTA';
    const { result } = renderHook(() => useCardOwner(initialValue));

    expect(result.current.value).toBe(initialValue);
  });

  it.each([['12345'], ['@/[]'], ['한글입력']])('입력값이 영어, 띄어쓰기가 아닌 경우 입력을 제한한다.', (userInput: string) => {
    const { result } = renderHook(() => useCardOwner());

    act(() => {
      result.current.onChange({
        target: { value: userInput },
      } as ChangeEvent<HTMLInputElement>);
    });

    expect(result.current.value).toBe('');
  });
});
