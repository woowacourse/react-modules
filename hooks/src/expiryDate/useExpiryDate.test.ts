import { renderHook, act } from '@testing-library/react';
import useExpiryDate from './useExpiryDate';
import { ChangeEvent } from 'react';

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

    act(() => {
      result.current.validateExpiryDate('month', 'aa');
    });

    expect(result.current.isValid.month).toBe(false);
    expect(result.current.errorMessage).toBe('숫자만 입력해주세요.');
  });

  it('입력값이 두 자리가 아닐 때 isValid로 false를 반환하고 에러 메시지를 반환한다.', () => {
    const { result } = renderHook(() => useExpiryDate());

    act(() => {
      result.current.validateExpiryDate('month', '123');
    });

    expect(result.current.isValid.month).toBe(false);
    expect(result.current.errorMessage).toBe(
      '유효기간은 두 자리만 입력해야 합니다.'
    );
  });

  it('입력값이 1 이상 12이하가 아닐 때 isValid로 false를 반환하고 에러 메시지를 반환한다.', () => {
    const { result } = renderHook(() => useExpiryDate());

    act(() => {
      result.current.validateExpiryDate('month', '13');
    });

    expect(result.current.isValid.month).toBe(false);
    expect(result.current.errorMessage).toBe(
      '유효한 월(1~12)을 입력해야 합니다.'
    );
  });

  it('입력값이 1 이상 12이하가 아닐 때 isValid로 false를 반환하고 에러 메시지를 반환한다.', () => {
    const { result } = renderHook(() => useExpiryDate());

    act(() => {
      result.current.handleExpiryDateChange({
        target: { name: 'month', value: '04' },
      } as ChangeEvent<HTMLInputElement>);
    });

    act(() => {
      result.current.validateIsExpiredDate('year', '23');
    });

    expect(result.current.isValid.year).toBe(false);
    expect(result.current.errorMessage).toBe(
      '유효기간은 현재 날짜 이후로 입력해야 합니다.'
    );
  });
});
