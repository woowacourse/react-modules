import { renderHook, act } from '@testing-library/react';
import useCardNumbers from './useCardNumbers';
import { ChangeEvent } from 'react';

describe('useCardNumbers', () => {
  it('입력값이 정확히 업데이트 되어야 한다.', () => {
    const { result } = renderHook(() => useCardNumbers());

    act(() => {
      result.current.handleCardNumbersChange({
        target: { name: 'part1', value: '1234' },
      } as ChangeEvent<HTMLInputElement>);
    });

    expect(result.current.cardNumbers.part1).toBe('1234');
  });

  it('입력값이 숫자가 아닐 때 isValid로 false를 반환하고 에러 메시지를 반환한다.', () => {
    const { result } = renderHook(() => useCardNumbers());

    act(() => {
      result.current.validateCardNumbers('part1', 'aaaa');
    });

    const { isValid, errorMessage } = result.current.validationResults.part1;

    expect(isValid).toBe(false);
    expect(errorMessage).toBe('숫자만 입력해주세요.');
  });

  it('입력값이 네 자리가 아닐 때 isValid로 false를 반환하고 에러 메시지를 반환한다.', () => {
    const { result } = renderHook(() => useCardNumbers());

    act(() => {
      result.current.validateCardNumbers('part1', '12345');
    });

    const { isValid, errorMessage } = result.current.validationResults.part1;

    expect(isValid).toBe(false);
    expect(errorMessage).toBe('카드 번호는 네 자리만 입력해야 합니다.');
  });
});
