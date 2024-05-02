import { renderHook } from '@testing-library/react';
import { ChangeEvent, act } from 'react';
import useCardCVC from './useCardCVC';

describe('useCardCVC 테스트', () => {
  it('입력값이 3자리가 아닌 경우 에러 상태가 true가 된다.', () => {
    const userInput = '12';
    const { result } = renderHook(() => useCardCVC());

    act(() => {
      result.current.cardCVC.onChange({
        target: { value: userInput },
      } as ChangeEvent<HTMLInputElement>);
    });

    expect(result.current.cardCVC.error.state).toBeTruthy();
  });

  it('입력값이 숫자가 아닌 경우 입력을 제한한다.', () => {
    const userInput = 'nakta';
    const { result } = renderHook(() => useCardCVC());

    act(() => {
      result.current.cardCVC.onChange({
        target: { value: userInput },
      } as ChangeEvent<HTMLInputElement>);
    });

    expect(result.current.cardCVC.value).toBe('');
  });
});
