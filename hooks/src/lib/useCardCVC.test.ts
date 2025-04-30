import { renderHook, act } from '@testing-library/react';
import { useCardCVCInput } from './useCardCVC';
import { ChangeEvent } from 'react';
import { ERROR_MESSAGE } from './validator/constants/errorMessage';

describe('useCardCVCInput', () => {
  it('초기값이 정확히 설정되어야 한다.', () => {
    const initialValue = '';
    const { result } = renderHook(() => useCardCVCInput());

    expect(result.current.cardCVC).toBe(initialValue);
  });

  it('입력값이 정확히 업데이트 되어야 한다.', () => {
    const userInput = '3';
    const { result } = renderHook(() => useCardCVCInput());

    act(() => {
      result.current.onChangeHandler({
        target: { value: userInput },
      } as ChangeEvent<HTMLInputElement>);
    });

    expect(result.current.cardCVC).toBe(userInput);
  });

  it('숫자가 아닌 입력값에 에러메세지가 출력된다.', () => {
    const userInput = 'k';
    const { result } = renderHook(() => useCardCVCInput());

    act(() => {
      result.current.onChangeHandler({
        target: { value: userInput },
      } as ChangeEvent<HTMLInputElement>);
    });

    expect(result.current.errorMessage).toBe(ERROR_MESSAGE.CVC.IS_NUMBER_STRING);
  });
});
