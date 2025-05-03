import { renderHook, act, RenderHookResult } from '@testing-library/react';
import { useCardExpirationInput } from '../src/lib/useCardExpirationInput';

describe('useCardExpirationInput custom hook 테스트', () => {
  let hookResult: RenderHookResult<ReturnType<typeof useCardExpirationInput>, void>;

  beforeEach(() => {
    hookResult = renderHook<ReturnType<typeof useCardExpirationInput>, void>(() => useCardExpirationInput());
  });

  it('카드 유효기간 2자리를 입력하면, 에러가 발생하지 않는다.', () => {
    act(() => {
      hookResult.result.current.handleCardExpirationChange('month', '12');
      hookResult.result.current.handleCardExpirationChange('year', '25');
    });
    expect(hookResult.result.current.cardExpirationError.month).toBe('');
    expect(hookResult.result.current.cardExpirationError.year).toBe('');
    expect(hookResult.result.current.cardExpiration.month).toBe('12');
    expect(hookResult.result.current.cardExpiration.year).toBe('25');
  });
  it('문자가 입력되었을 때, 에러가 발생한다.', () => {
    act(() => {
      hookResult.result.current.handleCardExpirationChange('month', '12a');
    });
    expect(hookResult.result.current.cardExpirationError.month).toBe('숫자만 입력 가능합니다.');
  });
  it('유효하지 않은 월 입력에는 에러가 발생한다.', () => {
    act(() => {
      hookResult.result.current.handleCardExpirationChange('month', '13');
    });
    expect(hookResult.result.current.cardExpirationError.month).toBe('1부터 12 사이의 숫자를 입력해주세요.');
  });
  it('자리수가 2자리 미만이면, 에러가 발생한다.', () => {
    act(() => {
      hookResult.result.current.handleCardExpirationChange('year', '2');
    });
    expect(hookResult.result.current.cardExpirationError.year).toBe('2자리 숫자를 입력해주세요.');
  });
});
