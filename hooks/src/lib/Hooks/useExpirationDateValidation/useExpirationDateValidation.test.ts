import { renderHook, act } from '@testing-library/react';
import useExpirationDateValidation from '.';

describe('useExpirationDateValidation', () => {
  it('useExpirationDateValidation의 초기 에러 상태가 반환된다.', () => {
    const initialErrors = [false, false];
    const { result } = renderHook(
      (): { errors: boolean[]; errorMessage: string } =>
        useExpirationDateValidation()
    );

    expect(result.current.errors).toEqual(initialErrors);
  });

  it('월이 아닌 값이 들어오면 에러메시지를 반환한다.', () => {
    const month = '14';
    const index = 0; // month 위치
    const { result } = renderHook(() => useExpirationDateValidation());

    act(() => {
      result.current.validateInput(index, month);
    });

    expect(result.current.errorMessage).toBe('유효하지 않은 월입니다.');
  });

  it('올해 년도 이전인 값이 들어오면 에러메시지를 반환한다.', () => {
    const year = '14';
    const index = 1; // year 위치
    const { result } = renderHook(() => useExpirationDateValidation());

    act(() => {
      result.current.validateInput(index, year);
    });

    expect(result.current.errorMessage).toBe('유효하지 않은 연도입니다.');
  });

  it('현재 에러 상태에 에러가 없다면 noError가 true를 반환한다.', () => {
    const month = '12';
    const index = 0; // month 위치
    const { result } = renderHook(() => useExpirationDateValidation());

    act(() => {
      result.current.validateInput(index, month);
    });

    expect(result.current.noError).toBeTruthy();
  });
});
