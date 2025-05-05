import { act, renderHook } from '@testing-library/react';
import { CARD_NUMBER_ERROR_TYPES } from '../config';
import useCardNumbers from './useCardNumbers';

describe('useCardNumbers', () => {
  it('입력값이 정확히 업데이트 되어야 한다.', () => {
    const { result } = renderHook(() => useCardNumbers());

    act(() => {
      result.current.handleCardNumbersChange('part1', '1234');
    });

    expect(result.current.cardNumbers.part1).toBe('1234');
  });

  it('입력값이 숫자가 아닐 때 isValid로 false를 반환하고 에러 메시지를 반환한다.', () => {
    const { result } = renderHook(() => useCardNumbers());

    expect(result.current.getCardNumberValidationError('aaaa')).toBe(
      CARD_NUMBER_ERROR_TYPES.notNumber
    );
  });

  it('입력값이 네 자리가 아닐 때 isValid로 false를 반환하고 에러 메시지를 반환한다.', () => {
    const { result } = renderHook(() => useCardNumbers());

    expect(result.current.getCardNumberValidationError('12345')).toBe(
      CARD_NUMBER_ERROR_TYPES.invalidLength
    );
  });
});
