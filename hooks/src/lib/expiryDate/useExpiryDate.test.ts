import { act, renderHook } from '@testing-library/react';
import { EXPIRY_DATE_ERROR_TYPES } from '../config';
import useExpiryDate from './useExpiryDate';

describe('useExpiryDate', () => {
  it('입력값이 정확히 업데이트 되어야 한다.', () => {
    const { result } = renderHook(() => useExpiryDate());

    act(() => {
      result.current.handleExpiryDateChange('month', '04');
    });

    expect(result.current.expiryDate.month).toBe('04');
  });

  describe('getExpiryDateValidationError', () => {
    const invalidCases = [
      {
        name: '숫자가 아닌 값',
        input: 'aa',
        expected: EXPIRY_DATE_ERROR_TYPES.notNumber,
      },
      {
        name: '세 자리 이상',
        input: '123',
        expected: EXPIRY_DATE_ERROR_TYPES.invalidLength,
      },
      {
        name: '13 이상 입력',
        input: '13',
        expected: EXPIRY_DATE_ERROR_TYPES.invalidMonthRange,
      },
    ];

    it.each(invalidCases)(
      '%s 상황일 때 isValid로 false를 반환하고 에러 메시지를 반환해야 한다.',
      ({ input, expected }) => {
        const { result } = renderHook(() => useExpiryDate());

        const error = result.current.getExpiryDateValidationError(
          'month',
          input
        );
        expect(error).toBe(expected);
      }
    );
  });

  describe('getExpiryDateExpiredError', () => {
    it('과거 날짜일 경우 expiredDate 에러를 반환해야 한다.', () => {
      const { result } = renderHook(() => useExpiryDate());

      act(() => {
        result.current.handleExpiryDateChange('month', '04');
      });

      expect(
        result.current.getExpiryDateExpiredError(
          'year',
          '12',
          result.current.expiryDate
        )
      ).toBe(EXPIRY_DATE_ERROR_TYPES.expiredDate);
    });
  });
});
