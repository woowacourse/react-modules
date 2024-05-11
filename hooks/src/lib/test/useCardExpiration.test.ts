import { renderHook, act } from '@testing-library/react';
import { ChangeEvent } from 'react';
import useCardExpiration from '../useCardExpiration';

describe('useCardExpiration 커스텀 훅 테스트', () => {
  it('월 입력에 따라 월 상태가 올바르게 업데이트되는지 확인한다.', () => {
    const { result } = renderHook(() => useCardExpiration());

    act(() => {
      result.current.handleCardExpirationMM({
        target: { value: '09' },
      } as ChangeEvent<HTMLInputElement>);
    });

    expect(result.current.cardExpiration.MM).toBe('09');
  });

  it('연도 입력에 따라 연도 상태가 올바르게 업데이트되는지 확인한다.', () => {
    const { result } = renderHook(() => useCardExpiration());

    act(() => {
      result.current.handleCardExpirationYY({
        target: { value: '23' },
      } as ChangeEvent<HTMLInputElement>);
    });

    expect(result.current.cardExpiration.YY).toBe('23');
  });

  it('1~12의 월 입력이 아닌 경우 월은 1이상 12이하여야 합니다.라는 메세지를 보여준다.', () => {
    const { result } = renderHook(() => useCardExpiration());

    act(() => {
      result.current.handleCardExpirationMM({
        target: { value: '13' },
      } as ChangeEvent<HTMLInputElement>);
    });

    expect(result.current.cardExpiration.errorMessage).toBe(
      '월은 1이상 12이하여야 합니다.',
    );
  });
});
