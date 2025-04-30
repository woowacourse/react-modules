import { renderHook, act } from '@testing-library/react';
import { useCardNumberInput } from '../src/lib/useCardNumberInput';

describe('useCardNumberInput custom hook 테스트', () => {
  it('카드 번호를 입력하면, 에러가 발생하지 않는다.', () => {
    const { result } = renderHook(() => useCardNumberInput());
    act(() => {
      result.current.handleCardNumberChange('first', '1234');
    });
    expect(result.current.cardNumberError).toBe('');
    expect(result.current.cardNumbers.first).toBe('1234');
  });

  it('숫자가 아닌 입력에는 에러가 발생한다.', () => {
    const { result } = renderHook(() => useCardNumberInput());
    act(() => {
      result.current.handleCardNumberChange('first', '12a4');
    });
    expect(result.current.cardNumberError).toBe('숫자만 입력 가능합니다.');
  });

  it('자리수가 4자리 미만이면, 에러가 발생한다.', () => {
    const { result } = renderHook(() => useCardNumberInput());
    act(() => {
      result.current.handleCardNumberChange('first', '123');
    });
    expect(result.current.cardNumberError).toBe('4자리 숫자를 입력해주세요.');
  });
});
