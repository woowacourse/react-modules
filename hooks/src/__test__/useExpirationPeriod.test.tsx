import { renderHook, act } from '@testing-library/react';
import useExpirationPeriod from '../lib/hooks/useExpirationPeriod';

describe('useExpirationPeriod 훅', () => {
  test('초기 상태', () => {
    const { result } = renderHook(() => useExpirationPeriod());
    expect(result.current.value).toEqual({
      month: '',
      year: '',
    });
    expect(result.current.isError).toEqual({
      month: false,
      year: false,
    });
    expect(result.current.errorMessage).toBe('');
  });

  test('유효한 입력 시 에러 없음', () => {
    const { result } = renderHook(() => useExpirationPeriod());
    act(() => {
      result.current.onChange(
        {
          target: { value: '12' },
        } as React.ChangeEvent<HTMLInputElement>,
        'month'
      );
    });

    act(() => {
      result.current.onChange(
        {
          target: { value: '25' },
        } as React.ChangeEvent<HTMLInputElement>,
        'year'
      );
    });
    expect(result.current.value).toEqual({
      month: '12',
      year: '25',
    });
    expect(result.current.isError).toEqual({
      month: false,
      year: false,
    });
    expect(result.current.errorMessage).toBe('');
  });

  test('유효하지 않은 기간 입력시 에러 메시지', () => {
    const { result } = renderHook(() => useExpirationPeriod());
    act(() => {
      result.current.onChange(
        {
          target: { value: '25' },
        } as React.ChangeEvent<HTMLInputElement>,
        'year'
      );
    });

    act(() => {
      result.current.onChange(
        {
          target: { value: '04' },
        } as React.ChangeEvent<HTMLInputElement>,
        'month'
      );
    });
    expect(result.current.value).toEqual({
      month: '04',
      year: '25',
    });
    expect(result.current.isError).toEqual({
      month: true,
      year: false,
    });
    expect(result.current.errorMessage).toBe(
      '현재보다 이전값을 유효기간으로 선택할 수 없습니다.'
    );
  });
});
