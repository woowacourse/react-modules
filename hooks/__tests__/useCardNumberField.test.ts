import { renderHook, act } from '@testing-library/react';
import { useCardNumberField } from '../src/lib/hooks/useCardNumberField';

describe('useCardNumberInput custom hook 테스트', () => {
  it('유효한 카드 번호를 입력 처리', () => {
    const { result } = renderHook(() => useCardNumberField());

    act(() => {
      result.current.handleCardNumberChange('first', '1234');
    });

    expect(result.current.cardNumbers.first).toBe('1234');
    expect(result.current.cardNumberErrors.first).toBe('');
  });

  describe('숫자 입력 유효성 검사', () => {
    it.each([
      ['123a', '숫자만 입력 가능합니다.', '숫자가 아닌 입력'],
      ['123', '4자리 숫자를 입력해주세요.', '자리수가 부족한 입력'],
    ])('카드 번호 입력이 %s일 때 에러: %s (%s)', (input, error, _) => {
      const { result } = renderHook(() => useCardNumberField());
      act(() => {
        result.current.handleCardNumberChange('first', input);
      });
      expect(result.current.cardNumberErrors.first).toBe(error);
    });
  });
});
