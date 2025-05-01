import { renderHook, act } from '@testing-library/react';
import useCvcNumberValidation from '.';

describe('useCvcNumberValidation', () => {
  it('useCvcNumberValidation 초기 에러 상태가 반환된다.', () => {
    const initialErrors = false;
    const { result } = renderHook(
      (): { errors: boolean; errorMessage: string } => useCvcNumberValidation()
    );

    expect(result.current.errors).toEqual(initialErrors);
  });

  it('숫자가 아닌 값이 들어오면 에러메시지를 반환한다.', () => {
    const userInput = 'hi';
    const { result } = renderHook(() => useCvcNumberValidation());

    act(() => {
      result.current.validateInput(userInput);
    });

    expect(result.current.errorMessage).toBe('숫자만 입력 가능합니다.');
  });

  it('현재 에러 상태에 에러가 없다면 noError가 true를 반환한다.', () => {
    const userInput = '124';
    const { result } = renderHook(() => useCvcNumberValidation());

    act(() => {
      result.current.validateInput(userInput);
    });

    expect(result.current.noError).toBeTruthy();
  });
});
