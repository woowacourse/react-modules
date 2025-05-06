import { renderHook, act } from '@testing-library/react';
import useCardCVC from '../lib/hooks/useCardCVC';

describe('useCardCVC 훅', () => {
  test('초기 상태', () => {
    const { result } = renderHook(() => useCardCVC());
    expect(result.current.cardCVC).toEqual('');
    expect(result.current.isCardCVCError).toEqual(false);
    expect(result.current.errorMessage).toBe('');
  });

  test('유효한 입력 시 에러 없음', () => {
    const { result } = renderHook(() => useCardCVC());
    act(() => {
      result.current.onChangeCVC({
        target: { value: '123' },
      } as React.ChangeEvent<HTMLInputElement>);
    });
    expect(result.current.cardCVC).toBe('123');
    expect(result.current.isCardCVCError).toBe(false);
    expect(result.current.errorMessage).toBe('');
  });

  test('자리 수 부족 시 에러 메시지', () => {
    const { result } = renderHook(() => useCardCVC());
    act(() => {
      result.current.onChangeCVC({
        target: { value: '12' },
      } as React.ChangeEvent<HTMLInputElement>);
    });
    expect(result.current.isCardCVCError).toBe(true);
    expect(result.current.errorMessage).toBe(
      '한 칸은 3자리 숫자를 입력해야합니다.'
    );
  });
});
