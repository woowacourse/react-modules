import { act, renderHook } from '@testing-library/react';
import { CARD_NUMBER_ERROR_TYPES } from '../config';
import useCardNumbers from './useCardNumbers';

describe('useCardNumbers', () => {
  it('입력값이 정확히 업데이트 되어야 한다.', () => {
    const { result } = renderHook(() =>
      useCardNumbers([
        { name: 'part1', length: 4 },
        { name: 'part2', length: 4 },
        { name: 'part3', length: 4 },
        { name: 'part4', length: 4 },
      ])
    );

    act(() => {
      result.current.handleCardNumbersChange('part1', '1234');
    });

    expect(result.current.cardNumbers.part1).toBe('1234');
  });

  describe('getCardNumberValidationError', () => {
    const invalidCases = [
      {
        name: '숫자가 아닌 값',
        input: 'aaaa',
        expected: CARD_NUMBER_ERROR_TYPES.notNumber,
      },
      {
        name: '다섯 자릿수 입력',
        input: '12345',
        expected: CARD_NUMBER_ERROR_TYPES.invalidLength,
      },
    ];

    it.each(invalidCases)(
      '%s 상황일 때 isValid로 false를 반환하고 에러 메시지를 반환해야 한다.',
      ({ input, expected }) => {
        const { result } = renderHook(() =>
          useCardNumbers([
            { name: 'part1', length: 4 },
            { name: 'part2', length: 4 },
            { name: 'part3', length: 4 },
            { name: 'part4', length: 4 },
          ])
        );

        const error = result.current.getCardNumberValidationError(
          'part1',
          input
        );
        expect(error).toBe(expected);
      }
    );
  });
});
