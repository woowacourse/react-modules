import { renderHook, act } from '@testing-library/react';
import { useCardPasswordField } from '../src/lib/hooks/useCardPasswordField';

describe('useCardPasswordField custom hook 테스트', () => {
  it('유효한 비밀번호 입력 처리', () => {
    const { result } = renderHook(() => useCardPasswordField());

    act(() => {
      result.current.handleCardPasswordChange('12');
    });

    expect(result.current.cardPassword).toBe('12');
    expect(result.current.cardPasswordError).toBe('');
  });

  describe('비밀번호 입력 유효성 검사', () => {
    it.each([
      ['1a', '숫자만 입력 가능합니다.', '숫자가 아닌 입력'],
      ['1', '비밀번호는 2자리여야 합니다.', '자리수가 부족한 입력'],
    ])('비밀번호 입력이 %s일 때 에러: %s (%s)', (input, error, _) => {
      const { result } = renderHook(() => useCardPasswordField());

      act(() => {
        result.current.handleCardPasswordChange(input);
      });

      expect(result.current.cardPasswordError).toBe(error);
    });
  });
});
