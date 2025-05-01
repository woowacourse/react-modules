import { renderHook, act } from '@testing-library/react';
import { useCardNumbersInput } from './useCardNumbers';
import { ChangeEvent } from 'react';
import { ERROR_MESSAGE } from './validator/constants/errorMessage';

describe('useCardNumbersInput', () => {
  it('초기값이 정확히 설정되어야 한다.', () => {
    const initialValue = ['', '', '', ''];
    const { result } = renderHook(() => useCardNumbersInput());

    expect(result.current.cardNumbers).toEqual(initialValue);
  });

  it('입력값이 정확히 업데이트 되어야 한다.', () => {
    const userInput = '3';
    const { result } = renderHook(() => useCardNumbersInput());

    act(() => {
      result.current.onChangeHandler({
        target: { name: '0', value: userInput },
      } as ChangeEvent<HTMLInputElement>);
    });

    expect(result.current.cardNumbers).toEqual([userInput, '', '', '']);
  });
  it('숫자가 아닌 입력값에 에러메세지가 출력된다.', () => {
    const userInput = 'k';
    const { result } = renderHook(() => useCardNumbersInput());

    act(() => {
      result.current.onChangeHandler({
        target: { name: '0', value: userInput },
      } as ChangeEvent<HTMLInputElement>);
    });

    expect(result.current.errorMessage).toBe(ERROR_MESSAGE.NUMBER.IS_NUMBER_STRING);
  });
});
