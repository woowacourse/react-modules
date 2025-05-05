import { renderHook, act } from '@testing-library/react';
import useExpiryDate from './useExpiryDate';
import { ChangeEvent } from 'react';
import {
  EXPIRY_DATE_ERROR_TYPES,
  ExpiryDateErrorType,
  ExpiryDateKey,
} from '../constants';
import { ValidationResult } from '../types';

interface RenderHookResult {
  current: RenderHookCurrent;
}

interface RenderHookCurrent {
  expiryDate: Record<ExpiryDateKey, string>;
  validationResults: Record<ExpiryDateKey, ValidationResult>;
  validateExpiryDate: (
    name: ExpiryDateKey,
    value: string
  ) => ExpiryDateErrorType | null;
  validateIsExpiredDate: (
    name: ExpiryDateKey,
    value: string
  ) => ExpiryDateErrorType | null;
  handleExpiryDateChange: (
    event: ChangeEvent<HTMLInputElement>,
    restrictChange?: boolean
  ) => void;
}

describe('useExpiryDate', () => {
  let result: RenderHookResult;

  beforeEach(() => {
    result = renderHook(() => useExpiryDate()).result;
  });

  it('입력값이 정확히 업데이트 되어야 한다.', () => {
    act(() => {
      result.current.handleExpiryDateChange({
        target: { name: 'month', value: '04' },
      } as ChangeEvent<HTMLInputElement>);
    });

    expect(result.current.expiryDate.month).toBe('04');
  });

  it('입력값이 숫자가 아닐 때 isValid로 false를 반환하고 에러 메시지를 반환한다.', () => {
    expect(result.current.validateExpiryDate('month', 'aa')).toBe(
      EXPIRY_DATE_ERROR_TYPES.notNumber
    );
  });

  it('입력값이 두 자리가 아닐 때 isValid로 false를 반환하고 에러 메시지를 반환한다.', () => {
    expect(result.current.validateExpiryDate('month', '123')).toBe(
      EXPIRY_DATE_ERROR_TYPES.invalidLength
    );
  });

  it('입력값이 1 이상 12이하가 아닐 때 isValid로 false를 반환하고 에러 메시지를 반환한다.', () => {
    expect(result.current.validateExpiryDate('month', '13')).toBe(
      EXPIRY_DATE_ERROR_TYPES.invalidMonthRange
    );
  });

  it('입력값이 1 이상 12이하가 아닐 때 isValid로 false를 반환하고 에러 메시지를 반환한다.', () => {
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
