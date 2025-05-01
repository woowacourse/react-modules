import { renderHook, act } from '@testing-library/react';
import usePasswordValidation from '.';

describe('usePasswordValidation', () => {
  it('usePasswordValidation 초기 에러 상태가 반환된다.', () => {
    const initialErrors = false;
    const { result } = renderHook(
      (): { errors: boolean; errorMessage: string } => usePasswordValidation()
    );

    expect(result.current.errors).toEqual(initialErrors);
  });

  it('숫자가 아닌 값이 들어오면 에러메시지를 반환한다.', () => {
    const userInput = 'hi';
    const { result } = renderHook(() => usePasswordValidation());

    act(() => {
      result.current.validateInput(userInput);
    });

    expect(result.current.errorMessage).toBe('숫자만 입력 가능합니다.');
  });

  it('현재 에러 상태에 에러가 없다면 noError가 true를 반환한다.', () => {
    const userInput = '12';
    const { result } = renderHook(() => usePasswordValidation());

    act(() => {
      result.current.validateInput(userInput);
    });

    expect(result.current.noError).toBeTruthy();
  });
});
