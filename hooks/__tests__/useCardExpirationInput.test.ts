import { renderHook, act } from '@testing-library/react';
import { useCardExpirationInput } from '../src/lib/useCardExpirationInput';

describe('useCardExpirationInput custom hook 테스트', () => {
  it('카드 유효기간을 입력하면, 에러가 발생하지 않는다.', () => {
    const { result } = renderHook(() => useCardExpirationInput());
    act(() => {
      result.current.handleCardExpirationChange('month', '12');
      result.current.handleCardExpirationChange('year', '25');
    });
    expect(result.current.cardExpirationError.month).toBe('');
    expect(result.current.cardExpirationError.year).toBe('');
    expect(result.current.cardExpiration.month).toBe('12');
    expect(result.current.cardExpiration.year).toBe('25');
  });
  it('숫자가 아닌 입력에는 에러가 발생한다.', () => {
    const { result } = renderHook(() => useCardExpirationInput());
    act(() => {
      result.current.handleCardExpirationChange('month', '12a');
    });
    expect(result.current.cardExpirationError.month).toBe('숫자만 입력 가능합니다.');
  });
  it('유효하지 않은 월 입력에는 에러가 발생한다.', () => {
    const { result } = renderHook(() => useCardExpirationInput());
    act(() => {
      result.current.handleCardExpirationChange('month', '13');
    });
    expect(result.current.cardExpirationError.month).toBe('1부터 12 사이의 숫자를 입력해주세요.');
  });
  it('자리수가 2자리 미만이면, 에러가 발생한다.', () => {
    const { result } = renderHook(() => useCardExpirationInput());
    act(() => {
      result.current.handleCardExpirationChange('year', '2');
    });
    expect(result.current.cardExpirationError.year).toBe('2자리 숫자를 입력해주세요.');
  });
});
