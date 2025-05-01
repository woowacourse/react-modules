import { renderHook, act } from '@testing-library/react';
import useCardNumberValidation from '.';

describe('useCardNumberValidation', () => {
  it('useCardNumberValidation의 초기 에러 상태가 반환된다.', () => {
    const initialErrors = [false, false, false, false];
    const { result } = renderHook(() => useCardNumberValidation());

    expect(result.current.errors).toEqual(initialErrors);
  });

  it('숫자가 아닌 값이 들어오면 에러메시지를 반환한다.', () => {
    const userInput = 'hi';
    const index = 0; // input 위치
    const { result } = renderHook(() => useCardNumberValidation());

    act(() => {
      result.current.validateInput(userInput, index);
    });

    expect(result.current.errorMessage).toBe('숫자만 입력 가능합니다.');
  });

  it('현재 에러 상태에 에러가 없다면 noError가 true를 반환한다.', () => {
    const userInput = '1243';
    const index = 0; // input 위치
    const { result } = renderHook(() => useCardNumberValidation());

    act(() => {
      result.current.validateInput(userInput, index);
    });

    expect(result.current.noError).toBeTruthy();
  });
});
