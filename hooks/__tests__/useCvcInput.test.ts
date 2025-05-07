import { renderHook, act } from '@testing-library/react';
import { useCvcInput } from '../src/lib/hooks/useCvcInput';

describe('useCvcInput custom hook 테스트', () => {
  it('유효한 CVC 입력 처리', () => {
    const { result } = renderHook(() => useCvcInput());
    act(() => {
      result.current.handleCvcChange('123');
    });
    expect(result.current.cvc).toBe('123');
    expect(result.current.cvcError).toBe('');
  });

  describe('CVC 입력 유효성 검사', () => {
    it.each([
      ['12a', '숫자만 입력 가능합니다.', '숫자가 아닌 입력'],
      ['12', 'CVC는 3자리여야 합니다.', '자리수가 부족한 입력'],
    ])('CVC 입력이 %s일 때 에러: %s (%s)', (input, error, _) => {
      const { result } = renderHook(() => useCvcInput());
      act(() => {
        result.current.handleCvcChange(input);
      });

      expect(result.current.cvcError).toBe(error);
    });
  });
});
