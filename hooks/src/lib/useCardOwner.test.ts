import { renderHook } from '@testing-library/react';
import { ChangeEvent, act } from 'react';
import useCardOwner from './useCardOwner';

describe('useCardOwner 테스트', () => {
  it('입력한 값이 영어가 아니라면 입력을 제한한다.', () => {
    const userInput = '12345';
    const { result } = renderHook(() => useCardOwner());

    act(() => {
      result.current.cardOwner.onChange({
        target: { value: userInput },
      } as ChangeEvent<HTMLInputElement>);
    });

    expect(result.current.cardOwner.value).toBe('');
  });
});
