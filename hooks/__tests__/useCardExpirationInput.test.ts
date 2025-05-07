import { renderHook, act } from '@testing-library/react';
import { useCardExpirationInput } from '../src/lib/hooks/useCardExpirationInput';

describe('useCardExpirationInput custom hook 테스트', () => {
  it('유효한 카드 유효기간 입력 처리', () => {
    const { result } = renderHook(() => useCardExpirationInput());

    act(() => {
      result.current.handleCardExpirationChange('month', '12');
      result.current.handleCardExpirationChange('year', '25');
    });

    expect(result.current.cardExpiration.month).toBe('12');
    expect(result.current.cardExpiration.year).toBe('25');
    expect(result.current.cardExpirationError.month).toBe('');
    expect(result.current.cardExpirationError.year).toBe('');
  });

  describe('월(month) 입력 유효성 검사', () => {
    it.each([
      ['1a', '숫자만 입력 가능합니다.', '숫자가 아닌 입력'],
      ['13', '1부터 12 사이의 숫자를 입력해주세요.', '범위 외의 숫자'],
    ])('월 입력이 %s일 때 에러: %s (%s)', (input, error, _) => {
      const { result } = renderHook(() => useCardExpirationInput());

      act(() => {
        result.current.handleCardExpirationChange('month', input);
      });
      expect(result.current.cardExpirationError.month).toBe(error);
    });
  });

  describe('년도(year) 입력 유효성 검사', () => {
    it.each([
      ['1a', '숫자만 입력 가능합니다.', '숫자가 아닌 입력'],
      ['2', '2자리 숫자를 입력해주세요.', '자리수가 부족한 입력'],
    ])('년도 입력이 %s일 때 에러: %s (%s)', (input, error, _) => {
      const { result } = renderHook(() => useCardExpirationInput());

      act(() => {
        result.current.handleCardExpirationChange('year', input);
      });
      expect(result.current.cardExpirationError.year).toBe(error);
    });
  });
});
