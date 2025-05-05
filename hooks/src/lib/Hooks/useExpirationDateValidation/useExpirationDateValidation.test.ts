import { renderHook, act } from '@testing-library/react';
import useExpirationDateValidation from '.';

describe('useExpirationDateValidation', () => {
  it('useExpirationDateValidation 초기 noError 상태는 true이다.', () => {
    const initialNoError = true;
    const { result } = renderHook(() => useExpirationDateValidation());

    expect(result.current.noError).toEqual(initialNoError);
  });

  it('월이 아닌 값이 들어오면 에러메시지를 반환한다.', () => {
    const { result } = renderHook(() => useExpirationDateValidation());
    const badEvent = {
      target: { value: '14' },
    } as React.ChangeEvent<HTMLInputElement>;

    act(() => {
      result.current.onChange(0)(badEvent); //month
    });

    expect(result.current.errorMessage).toBe('유효하지 않은 월입니다.');
  });

  it('올해 년도 이전인 값이 들어오면 에러메시지를 반환한다.', () => {
    const { result } = renderHook(() => useExpirationDateValidation());
    const badEvent = {
      target: { value: '24' },
    } as React.ChangeEvent<HTMLInputElement>;

    act(() => {
      result.current.onChange(1)(badEvent); // year
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
      result.current.onChange(0)(goodMonthEvent); // month
      result.current.onChange(1)(goodYearEvent); // year
    });

    expect(result.current.noError).toBe(true);
    expect(result.current.errorMessage).toBe('');
  });
});
