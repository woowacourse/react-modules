import { act, renderHook } from '@testing-library/react';
import { ChangeEvent } from 'react';
import { EXPIRY_DATE_ERROR_TYPES } from '../config';
import useExpiryDate from './useExpiryDate';

describe('useExpiryDate', () => {
  it('입력값이 정확히 업데이트 되어야 한다.', () => {
    const { result } = renderHook(() => useExpiryDate());

    act(() => {
      result.current.handleExpiryDateChange({
        target: { name: 'month', value: '04' },
      } as ChangeEvent<HTMLInputElement>);
    });

    expect(result.current.expiryDate.month).toBe('04');
  });

  it('입력값이 숫자가 아닐 때 isValid로 false를 반환하고 에러 메시지를 반환한다.', () => {
    const { result } = renderHook(() => useExpiryDate());

    expect(result.current.validateExpiryDate('month', 'aa')).toBe(
      EXPIRY_DATE_ERROR_TYPES.notNumber
    );
  });

  it('입력값이 두 자리가 아닐 때 isValid로 false를 반환하고 에러 메시지를 반환한다.', () => {
    const { result } = renderHook(() => useExpiryDate());

    expect(result.current.validateExpiryDate('month', '123')).toBe(
      EXPIRY_DATE_ERROR_TYPES.invalidLength
    );
  });

  it('입력값이 1 이상 12이하가 아닐 때 isValid로 false를 반환하고 에러 메시지를 반환한다.', () => {
    const { result } = renderHook(() => useExpiryDate());

    expect(result.current.validateExpiryDate('month', '13')).toBe(
      EXPIRY_DATE_ERROR_TYPES.invalidMonthRange
    );
  });

  it('입력값이 1 이상 12이하가 아닐 때 isValid로 false를 반환하고 에러 메시지를 반환한다.', () => {
    const { result } = renderHook(() => useExpiryDate());

    act(() => {
      result.current.handleExpiryDateChange({
        target: { name: 'month', value: '04' },
      } as ChangeEvent<HTMLInputElement>);
    });

    expect(result.current.validateIsExpiredDate('year', '12')).toBe(
      EXPIRY_DATE_ERROR_TYPES.expiredDate
    );
  });
});
