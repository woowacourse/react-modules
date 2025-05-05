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

  test('입력 수 초과시 입력 안됨', () => {
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
          target: { value: '255' },
        } as React.ChangeEvent<HTMLInputElement>,
        'year'
      );
    });
    expect(result.current.value).toEqual({
      month: '12',
      year: '',
    });
    expect(result.current.isError).toEqual({
      month: false,
      year: true,
    });
    expect(result.current.errorMessage).toBe(
      'YY형식으로 입력해주세요. (ex. 01)'
    );
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

  // month
  test.each(['13', '00'])('유효하지 않은 달 입력시 에러 발생', (value) => {
    const { result } = renderHook(() => useExpirationPeriod([]));
    act(() => {
      result.current.onChange(
        {
          target: { value: value },
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
      month: value,
      year: '25',
    });
    expect(result.current.isError).toEqual({
      month: true,
      year: false,
    });
    expect(result.current.errorMessage).toBe(
      '1~12사이의 올바른 월을 입력해 주세요.'
    );
  });

  // year
  test('현재보다 이전값을 입력시 에러 발생', () => {
    const { result } = renderHook(() => useExpirationPeriod([]));
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
          target: { value: '24' },
        } as React.ChangeEvent<HTMLInputElement>,
        'year'
      );
    });
    expect(result.current.value).toEqual({
      month: '12',
      year: '24',
    });
    expect(result.current.isError).toEqual({
      month: false,
      year: true,
    });
    expect(result.current.errorMessage).toBe(
      '현재보다 이전값을 유효기간으로 선택할 수 없습니다.'
    );
  });

  test('현재보다 이전년도를 입력시 에러 발생', () => {
    const { result } = renderHook(() => useExpirationPeriod([]));
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
          target: { value: '24' },
        } as React.ChangeEvent<HTMLInputElement>,
        'year'
      );
    });
    expect(result.current.value).toEqual({
      month: '12',
      year: '24',
    });
    expect(result.current.isError).toEqual({
      month: false,
      year: true,
    });
    expect(result.current.errorMessage).toBe(
      '현재보다 이전값을 유효기간으로 선택할 수 없습니다.'
    );
  });

  test('현재년도와 같으면서 월이 현재월보다 이전인 값을 입력시 에러 메시지', () => {
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
