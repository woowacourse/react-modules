import { renderHook, act } from '@testing-library/react';
import useCardCVC from '../lib/hooks/useCardCVC';

describe('useCardCVC 훅', () => {
  test('초기 상태', () => {
    const { result } = renderHook(() => useCardCVC());
    expect(result.current.value).toEqual('');
    expect(result.current.isError).toEqual(false);
    expect(result.current.errorMessage).toBe('');
  });

  test('입력 수 초과시 입력 안됨', () => {
    const { result } = renderHook(() => useCardCVC());
    act(() => {
      result.current.onChange({
        target: { value: '1234' },
      } as React.ChangeEvent<HTMLInputElement>);
    });
    expect(result.current.value).toBe('');
    expect(result.current.isError).toBe(false);
    expect(result.current.errorMessage).toBe('');
  });

  test('유효한 입력 시 에러 없음', () => {
    const { result } = renderHook(() => useCardCVC());
    act(() => {
      result.current.onChange({
        target: { value: '123' },
      } as React.ChangeEvent<HTMLInputElement>);
    });
    expect(result.current.value).toBe('123');
    expect(result.current.isError).toBe(false);
    expect(result.current.errorMessage).toBe('');
  });

  test('자리 수 부족 시 에러 메시지', () => {
    const { result } = renderHook(() => useCardCVC());
    act(() => {
      result.current.onChange({
        target: { value: '12' },
      } as React.ChangeEvent<HTMLInputElement>);
    });
    expect(result.current.isError).toBe(true);
    expect(result.current.errorMessage).toBe(
      '한 칸은 3자리 숫자를 입력해야합니다.'
    );
  });
});
