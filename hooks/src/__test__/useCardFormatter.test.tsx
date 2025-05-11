import { renderHook, act } from '@testing-library/react';
import useCardFormatter from '../lib/hooks/useCardFormatter';

describe('useCardFormatter 훅', () => {
  test('초기 상태', () => {
    const { result } = renderHook(() => useCardFormatter());
    expect(result.current.formatted).toBe('');
  });

  test('VISA 카드 포맷 (4-4-4-4)', () => {
    const { result } = renderHook(() => useCardFormatter());
    act(() => {
      result.current.onChange('4123456789012345');
    });
    expect(result.current.formatted).toBe('4123 4567 8901 2345');
  });

  test('MASTERCARD 포맷 (4-4-4-4)', () => {
    const { result } = renderHook(() => useCardFormatter());
    act(() => {
      result.current.onChange('5123456789012345');
    });
    expect(result.current.formatted).toBe('5123 4567 8901 2345');
  });

  test('AMEX 포맷 (4-6-5)', () => {
    const { result } = renderHook(() => useCardFormatter());
    act(() => {
      result.current.onChange('341234567890123');
    });
    expect(result.current.formatted).toBe('3412 345678 90123');
  });

  test('DINERS 포맷 (4-6-4)', () => {
    const { result } = renderHook(() => useCardFormatter());
    act(() => {
      result.current.onChange('36123456789012');
    });
    expect(result.current.formatted).toBe('3612 345678 9012');
  });

  test('UNIONPAY 포맷 (4-4-4-4-3)', () => {
    const { result } = renderHook(() => useCardFormatter());
    act(() => {
      result.current.onChange('6221261234567890123');
    });
    expect(result.current.formatted).toBe('6221 2612 3456 7890 123');
  });

  test('숫자 이외의 문자는 무시', () => {
    const { result } = renderHook(() => useCardFormatter());
    act(() => {
      result.current.onChange('5123-4567-8901-2345');
    });
    expect(result.current.formatted).toBe('5123 4567 8901 2345');
  });

  test('알 수 없는 카드 번호는 기본 포맷 (4-4-4-4)', () => {
    const { result } = renderHook(() => useCardFormatter());
    act(() => {
      result.current.onChange('1234567890123456');
    });
    expect(result.current.formatted).toBe('1234 5678 9012 3456');
  });
});
