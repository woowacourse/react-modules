import { renderHook, act } from '@testing-library/react';
import useCardNumber from '../lib/hooks/useCardNumber';

describe('useCardNumber 훅', () => {
  test('초기 상태', () => {
    const { result } = renderHook(() => useCardNumber());
    expect(result.current.cardNumber).toEqual(['', '', '', '']);
    expect(result.current.isError).toEqual([false, false, false, false]);
    expect(result.current.errorMessage).toBe('');
  });

  test('유효한 입력 시 에러 없음', () => {
    const { result } = renderHook(() => useCardNumber());
    act(() => {
      result.current.onChange(
        { target: { value: '1234' } } as React.ChangeEvent<HTMLInputElement>,
        0
      );
    });
    expect(result.current.cardNumber[0]).toBe('1234');
    expect(result.current.isError[0]).toBe(false);
    expect(result.current.errorMessage).toBe('');
  });

  test('자리 수 부족 시 에러 메시지', () => {
    const { result } = renderHook(() => useCardNumber());
    act(() => {
      result.current.onChange(
        { target: { value: '123' } } as React.ChangeEvent<HTMLInputElement>,
        1
      );
    });
    expect(result.current.isError[1]).toBe(true);
    expect(result.current.errorMessage).toBe(
      '한 칸은 4자리 숫자를 입력해야합니다.'
    );
  });
});
