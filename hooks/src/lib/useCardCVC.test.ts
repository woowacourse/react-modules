import { renderHook } from '@testing-library/react';
import { ChangeEvent, act } from 'react';
import useCardCVC from './useCardCVC';

describe('useCardCVC 테스트', () => {
  it('초기값이 정확하게 설정되어야 한다.', () => {
    const initialValue = '123';
    const { result } = renderHook(() => useCardCVC(initialValue));

    expect(result.current.value).toBe(initialValue);
  });

  it.each([['12'], ['1234']])('입력값이 3자리가 아닌 경우 에러 상태가 true가 된다.', (userInput: string) => {
    const { result } = renderHook(() => useCardCVC());

    act(() => {
      result.current.onChange({
        target: { value: userInput },
      } as ChangeEvent<HTMLInputElement>);
    });

    expect(result.current.error.state).toBeTruthy();
  });

  it.each([['nakta'], ['@/[]'], [' '], ['한글입력']])('입력값이 숫자가 아닌 경우 입력을 제한한다.', (userInput: string) => {
    const { result } = renderHook(() => useCardCVC());

    act(() => {
      result.current.onChange({
        target: { value: userInput },
      } as ChangeEvent<HTMLInputElement>);
    });

    expect(result.current.value).toBe('');
  });
});
