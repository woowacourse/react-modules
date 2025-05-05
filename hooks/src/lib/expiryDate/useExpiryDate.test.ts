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

  it('이벤트 핸들러가 감지한 입력값이 hook 내부의 expiryDate 상태(state)로 변경된다.', () => {
    act(() => {
      result.current.handleExpiryDateChange({
        target: { name: 'month', value: '04' },
      } as ChangeEvent<HTMLInputElement>);
    });

    expect(result.current.expiryDate.month).toBe('04');
  });

  it('입력값이 숫자가 아닐 때 notNumber 에러 타입을 반환한다.', () => {
    expect(result.current.validateExpiryDate('month', 'aa')).toBe(
      EXPIRY_DATE_ERROR_TYPES.notNumber
    );
  });

  it('입력값이 두 자리가 아닐 때 invalidLength 에러 타입을 반환한다.', () => {
    expect(result.current.validateExpiryDate('month', '123')).toBe(
      EXPIRY_DATE_ERROR_TYPES.invalidLength
    );
  });

  it('입력값이 1 이상 12이하가 아닐 때 invalidMonthRange 에러 타입을 반환한다.', () => {
    expect(result.current.validateExpiryDate('month', '13')).toBe(
      EXPIRY_DATE_ERROR_TYPES.invalidMonthRange
    );
  });

  it('입력값이 현재 날짜의 이전 시점인, 만료된 날짜일 때 expiredDate 에러 타입을 반환한다.', () => {
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
