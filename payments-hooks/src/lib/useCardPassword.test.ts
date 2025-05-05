import { renderHook, act } from '@testing-library/react';
import { useCardPasswordInput } from './useCardPassword';
import { ChangeEvent } from 'react';
import { ERROR_MESSAGE } from './validator/constants/errorMessage';

describe('useCardPasswordInput', () => {
  it('초기값이 정확히 설정되어야 한다.', () => {
    const initialValue = '';
    const { result } = renderHook(() => useCardPasswordInput());

    expect(result.current.cardPassword).toBe(initialValue);
  });

  it('입력값이 정확히 업데이트 되어야 한다.', () => {
    const userInput = '3';
    const { result } = renderHook(() => useCardPasswordInput());

    act(() => {
      result.current.onChangeHandler({
        target: { value: userInput },
      } as ChangeEvent<HTMLInputElement>);
    });

    expect(result.current.cardPassword).toBe(userInput);
  });
  it('숫자가 아닌 입력값에 에러메세지가 출력된다.', () => {
    const userInput = 'k';
    const { result } = renderHook(() => useCardPasswordInput());

    act(() => {
      result.current.onChangeHandler({
        target: { value: userInput },
      } as ChangeEvent<HTMLInputElement>);
    });

    expect(result.current.errorMessage).toBe(ERROR_MESSAGE.PASSWORD.IS_NUMBER_STRING);
  });
});
