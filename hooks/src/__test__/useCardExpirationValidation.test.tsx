import { renderHook } from '@testing-library/react';
import useCardExpirationValidation from '../lib/useCardExpirationValidation';

describe('useCardExpirationValidation 테스트', () => {
  it('CardExpiration으로 모두 유효한 형태가 들어오면 isCardExpirationError에 false로 가득찬 배열을 반환한다.', () => {
    const expirationPeriod = {
      month: '12',
      year: '25',
    };

    const { result } = renderHook(() =>
      useCardExpirationValidation(expirationPeriod.month, expirationPeriod.year)
    );
    expect(result.current.isCardExpirationError).toEqual([false, false]);
  });

  it('유효기간 중 월과 년이 둘다 에러인 경우 isCardExpirationError에 둘다 true인 배열을 반환한다.', () => {
    const expirationPeriod = {
      month: '16',
      year: '12',
    };

    const { result } = renderHook(() =>
      useCardExpirationValidation(expirationPeriod.month, expirationPeriod.year)
    );
    expect(result.current.isCardExpirationError).toEqual([true, true]);
  });

  it('유효기간 중 년만 에러인 경우 isCardExpirationError에 년 부분만 true인 배열을 반환한다.', () => {
    const expirationPeriod = {
      month: '12',
      year: '12',
    };

    const { result } = renderHook(() =>
      useCardExpirationValidation(expirationPeriod.month, expirationPeriod.year)
    );
    expect(result.current.isCardExpirationError).toEqual([false, true]);
  });

  it('유효기간 중 월만 에러인 경우 isCardExpirationError에 월 부분만 true인 배열을 반환한다.', () => {
    const expirationPeriod = {
      month: '25',
      year: '25',
    };

    const { result } = renderHook(() =>
      useCardExpirationValidation(expirationPeriod.month, expirationPeriod.year)
    );
    expect(result.current.isCardExpirationError).toEqual([true, false]);
  });
});
