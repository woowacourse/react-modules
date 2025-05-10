import { renderHook, act } from '@testing-library/react';
import useCardNumber from '../lib/hooks/useCardNumber';

describe('useCardNumber 훅', () => {
  test('초기 상태', () => {
    const { result } = renderHook(() => useCardNumber());
    expect(result.current.formatted).toEqual(undefined);
    expect(result.current.isError).toEqual(false);
    expect(result.current.errorMessage).toBe('');
  });

  test('입력 수 초과시 입력 안됨', async () => {
    const { result } = renderHook(() => useCardNumber());
    act(() => {
      result.current.onChange({
        target: { value: '12345678912345678' },
      } as React.ChangeEvent<HTMLInputElement>);
    });

    expect(result.current.formatted).toEqual(['1234', '5678', '9123', '45678']);
    expect(result.current.isError).toBe(true);
    expect(result.current.errorMessage).toBe(
      '4-4-4-4 형태의 16자리로 16자리로 입력해주세요'
    );
  });

  test('유효한 입력 시 에러 없음', () => {
    const { result } = renderHook(() => useCardNumber());
    act(() => {
      result.current.onChange({
        target: { value: '1234567891234567' },
      } as React.ChangeEvent<HTMLInputElement>);
    });
    expect(result.current.formatted).toEqual(['1234', '5678', '9123', '4567']);
    expect(result.current.isError).toBe(false);
    expect(result.current.errorMessage).toBe('');
  });

  test('자리 수 부족 시 에러 메시지', () => {
    const { result } = renderHook(() => useCardNumber());
    act(() => {
      result.current.onChange({
        target: { value: '123456789123456' },
      } as React.ChangeEvent<HTMLInputElement>);
    });
    expect(result.current.formatted).toEqual(['1234', '5678', '9123', '456']);
    expect(result.current.isError).toBe(true);
    expect(result.current.errorMessage).toBe(
      '4-4-4-4 형태의 16자리로 16자리로 입력해주세요'
    );
  });
});
