import { renderHook, act } from '@testing-library/react';
import useExpirationDateValidation from '.';

describe('useExpirationDateValidation', () => {
  it('초기 noError 상태는 true이다.', () => {
    const { result } = renderHook(() => useExpirationDateValidation());

    expect(result.current.noError).toBe(true);
  });

  it('월이 아닌 값이 들어오면 에러메시지를 반환한다.', () => {
    const { result } = renderHook(() => useExpirationDateValidation());
    const badMonthEvent = {
      target: { value: '14' },
    } as React.ChangeEvent<HTMLInputElement>;

    act(() => {
      result.current.onChange('month')(badMonthEvent);
    });

    expect(result.current.errorMessage).toBe('유효하지 않은 월입니다.');
  });

  it('올해 이전 연도 값이 들어오면 에러메시지를 반환한다.', () => {
    const { result } = renderHook(() => useExpirationDateValidation());
    const badYearEvent = {
      target: { value: '24' },
    } as React.ChangeEvent<HTMLInputElement>;

    act(() => {
      result.current.onChange('year')(badYearEvent);
    });

    expect(result.current.errorMessage).toBe('유효하지 않은 연도입니다.');
  });

  it('유효한 월과 연도를 입력하면 noError는 true, 에러 메시지는 없다.', () => {
    const { result } = renderHook(() => useExpirationDateValidation());
    const goodMonthEvent = {
      target: { value: '12' },
    } as React.ChangeEvent<HTMLInputElement>;
    const goodYearEvent = {
      target: { value: '30' },
    } as React.ChangeEvent<HTMLInputElement>;

    act(() => {
      result.current.onChange('month')(goodMonthEvent);
      result.current.onChange('year')(goodYearEvent);
    });

    expect(result.current.noError).toBe(true);
    expect(result.current.errorMessage).toBe('');
  });
});
